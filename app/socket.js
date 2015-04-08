module.exports = function(){
  // listen to the connect event
  this.sio.sockets.on('connection', function(socket) {
    
    console.log('client connected: ' + socket.id);

    // send message to the current client
    socket.emit('msg', 'hello new user');

    // client disconnect handler
    socket.on('disconnect', function () {

        console.log('client disconnected: ' + socket.id);
    });

  });
}