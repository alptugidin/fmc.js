import { connect } from 'socket.io-client';

export const init = (): any => {
  console.log('connecting...');
  const socket = connect('http://192.168.1.24:3001');
  socket.on('connect', () => {
    console.log('connection successful');
  });
  return { socket };
};
