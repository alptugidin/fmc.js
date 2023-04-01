const express = require('express');
const cors = require('cors');
const http = require('http');
const {Server} = require('socket.io')
import { ClientDataPeriod, ClientDataRequestFlag, open, Protocol, type RawBuffer } from 'node-simconnect';
const CDU_DATA_REQUEST = 0;
const PMDG_NG3_CDU_0_NAME = 'PMDG_NG3_CDU_0';
const PMDG_NG3_CDU_0_ID = 0x4e473335;
const PMDG_NG3_CDU_0_DEFINITION = 0x4e473338;
const CDU_COLUMNS = 24;
const CDU_ROWS = 14;
const SCREEN_STATE_SIZE = CDU_COLUMNS * CDU_ROWS * (1 + 1 + 1) + 1;



const app = express();
app.use(cors())
const server = http.createServer(app)

const io = new Server(server)

io.on('connection', (socket: any) => {
    console.log(socket.id + ' is connected...')

    // requests from react-native app
    socket.on('write', (data: string) => {
        console.log(data)
    })

})

open('My SimConnect client', Protocol.KittyHawk)
    .then(function ({ recvOpen, handle }) {
        console.log('Connected to', recvOpen.applicationName);
        handle.mapClientDataNameToID(PMDG_NG3_CDU_0_NAME, PMDG_NG3_CDU_0_ID);
        handle.addToClientDataDefinition(PMDG_NG3_CDU_0_DEFINITION, 0, SCREEN_STATE_SIZE);
        handle.requestClientData(
            PMDG_NG3_CDU_0_ID,
            CDU_DATA_REQUEST,
            PMDG_NG3_CDU_0_DEFINITION,
            ClientDataPeriod.ON_SET,
            ClientDataRequestFlag.CLIENT_DATA_REQUEST_FLAG_CHANGED
        );

        handle.on('exception', ex => { console.log(ex); });
        handle.on('clientData', recvSimObjectData => {
            if (recvSimObjectData.requestID === CDU_DATA_REQUEST) {
                const { powered, lines } = extractCduScreenState(recvSimObjectData.data);
                if (powered) {
                    io.emit('cdu',lines)
                } else {
                    console.log('Not powered');
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


server.listen(3001, () => {
    console.log('Server is up 3001')
})















