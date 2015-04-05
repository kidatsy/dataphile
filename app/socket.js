module.exports = function(){
  // listen to the connect event
  this.sio.sockets.on('connection', function(socket) {
    
    socket.emit('yo', { hello: 'world' });
    socket.on('info', function (data) {
      console.log(data);
    });

  });
}