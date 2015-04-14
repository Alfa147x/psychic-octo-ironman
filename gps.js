var server = require ('tk102');


// start server
server.createServer ({
  port: 1337
});


server.on ('data', function (raw) {
  console.log ('Incoming data: '+ raw);
});


server.on ('connection', function (socket) {
  console.log ('Connection from '+ socket.remoteAddress);
});

server.on ('track', function (gps) {
	console.log ('GPS: ' + gps.signal);
});
