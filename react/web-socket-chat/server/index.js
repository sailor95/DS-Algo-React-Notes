const io = require('socket.io')(8080, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
  },
});

const users = {};

io.on('connection', socket => {
  socket.on('new-user', name => {
    users[socket.id] = name;
    socket.broadcast.emit('user-connected', name);
  });
  socket.on('send-msg', message => {
    socket.broadcast.emit('chat-msg', {
      text: message,
      from: users[socket.id],
    });
  });
  socket.on('disconnect', () => {
    socket.broadcast.emit('user-dc', users[socket.id]);
    delete users[socket.id];
  });
});
