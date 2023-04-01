import io from 'socket.io-client';

export const init = () => {
  console.log('connecting...');
  const socket = io.connect('http://192.168.1.24:3001');
  socket.on('connect', () => {
    console.log('connection successful');
  });
  return { socket };
};
