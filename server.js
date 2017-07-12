const http = require('http');



const PORT1 = 7000;

var handleRequest1 = (request1, response1) => {

	response1.end('Paul is awesome');
}

const server1 = http.createServer(handleRequest1);

server1.listen(PORT1, () => {
	console.log('Yep, Paul is pretty cool');
});



const PORT2 = 7500;

var handleRequest2 = (request2, response2) => {

	response2.end('Paul is a fashion tragedy');
}

const server2 = http.createServer(handleRequest2);

server2.listen(PORT2, () => {
	console.log('Paul is not hip');
});