var server = require ('tk102');

// start server
server.createServer ({
  port: 1337
});

//This doesn't work
server.on ('track', function (gps) {
	console.log ('GPS: ' + gps.signal);
});


//This works
server.on ('data', function (raw) {
  console.log ('Incoming data: '+ raw);
});

//This works
server.on ('connection', function (socket) {
  console.log ('Connection from '+ socket.remoteAddress);
});

