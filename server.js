const http = require('http');
let port = process.env.PORT || 8099;

const helloServer = http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write('<html><head>');
	res.write('<title>Hello World Page</title>');
	res.write('<head>');
	res.write('<body><h1>Hello World, nodejs!</h1><body>');
	res.end('</html>');
});

helloServer.keepAliveTimeout = 120 * 1000;
helloServer.headersTimeout = 120 * 1000;

helloServer.listen(port, () => console.log(`Example app listening on port ${port}!`));
