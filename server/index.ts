import {
  ClientDataPeriod,
  ClientDataRequestFlag,
  open,
  Protocol,
  SimConnectConstants,
  SimConnectDataType,
  RawBuffer,
  SimConnectPeriod,
  DataRequestFlag
} from 'node-simconnect';
// const express = require('express');
// const cors = require('cors');
// const http = require('http');
// const { Server } = require('socket.io');
import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const CDU_DATA_REQUEST = 0;
const PMDG_NG3_CDU_0_NAME = 'PMDG_NG3_CDU_0';
const PMDG_NG3_CDU_0_ID = 0x4e473335;
const PMDG_NG3_CDU_0_DEFINITION = 0x4e473338;
const CDU_COLUMNS = 24;
const CDU_ROWS = 14;
const SCREEN_STATE_SIZE = CDU_COLUMNS * CDU_ROWS * (1 + 1 + 1) + 1;
const PORT = 3001;

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server);
const enum DefinitionID {
    CDU_A,
    LIVE_DATA
}

const enum Tag {
    LAT_LON_ALT,
    AIRSPEED,
    VERTICAL_SPEED,
    HEADING,
    LANDING_LIGHT,
    EVT_CDU_L_A,
    'L:switch_573_73X'

}
const enum RequestID {
    LIVE_DATA,
}
open('My SimConnect server', Protocol.KittyHawk)
  .then(function ({ recvOpen, handle }) {
    // console.log('Connected to', recvOpen.applicationName);
    console.log('Connected to Microsoft Flight Simulator');
    handle.mapClientDataNameToID(PMDG_NG3_CDU_0_NAME, PMDG_NG3_CDU_0_ID);
    handle.addToClientDataDefinition(PMDG_NG3_CDU_0_DEFINITION, 0, SCREEN_STATE_SIZE);
    handle.requestClientData(
      PMDG_NG3_CDU_0_ID,
      CDU_DATA_REQUEST,
      PMDG_NG3_CDU_0_DEFINITION,
      ClientDataPeriod.ON_SET,
      ClientDataRequestFlag.CLIENT_DATA_REQUEST_FLAG_CHANGED
    );

    handle.addToDataDefinition(
      DefinitionID.CDU_A,
      'L:switch_573_73X', // A key in CDU
      'bool',
      SimConnectDataType.INT32
    );

    handle.addToDataDefinition(
      DefinitionID.LIVE_DATA,
      'L:switch_573_73X',
      'bool',
      SimConnectDataType.INT32,
      0,
      Tag.LANDING_LIGHT
    );

    handle.requestDataOnSimObject(
      RequestID.LIVE_DATA,
      DefinitionID.LIVE_DATA,
      SimConnectConstants.OBJECT_ID_USER,
      SimConnectPeriod.SIM_FRAME,
      DataRequestFlag.DATA_REQUEST_FLAG_CHANGED | DataRequestFlag.DATA_REQUEST_FLAG_TAGGED
    );

    io.on('connection', (socket: any) => {
      console.log(String(socket.id) + ' is connected...');
      const dataToSet = new RawBuffer(0);
      socket.on('write', (data: string) => { // socket dinleme
        console.log(data);
        dataToSet.clear();
        dataToSet.writeInt32(100);
        handle.setDataOnSimObject(DefinitionID.CDU_A, SimConnectConstants.OBJECT_ID_USER, {
          buffer: dataToSet,
          arrayCount: 0,
          tagged: false
        });
      });
    });

    handle.on('exception', ex => { console.log(ex); });
    handle.on('clientData', recvSimObjectData => {
      if (recvSimObjectData.requestID === CDU_DATA_REQUEST) {
        const { powered, lines } = extractCduScreenState(recvSimObjectData.data);
        if (powered) {
          io.emit('cdu', lines);
        } else {
          console.log('Not powered');
        }
      }
    });
    handle.on('simObjectData', recvSimObjectData => {
      if (recvSimObjectData.requestID === RequestID.LIVE_DATA) {
        const datumId = recvSimObjectData.data.readInt32();
        switch (datumId) {
        case Tag.LANDING_LIGHT:
          {
            const value = recvSimObjectData.data.readInt32();
            console.log('Landing light on', value);
          }
          break;
        }
      }
    });
  })
  .catch(function (error) {
    console.log('Connection failed:', error);
  });

function extractCduScreenState (rawBuffer: RawBuffer): { lines: string[], powered: boolean } {
  const screenText: string[] = Array(CDU_ROWS).fill('');

  for (let col = 0; col < CDU_COLUMNS; col++) {
    for (let row = 0; row < CDU_ROWS; row++) {
      const symbol = rawBuffer.readBytes(1).toString('utf-8');
      const color = rawBuffer.readBytes(1)[0];
      const flags = rawBuffer.readBytes(1)[0];
      screenText[row] += symbol;
    }
  }
  const cduIsPowered = rawBuffer.readBytes(1)[0] === 1;

  return { lines: screenText, powered: cduIsPowered };
}

server.listen(PORT, () => {
  console.log('Server is running on ' + String(PORT));
});
