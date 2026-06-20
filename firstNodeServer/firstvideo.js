const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url,req.headers, req.method);

  if(req.url === '/'){
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body><h1>home page</h1></body>');
    res.write('</html>');
    return res.end();
  } else if(req.url === '/products'){
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Products Page</title></head>');
    res.write('<body><h1>products page</h1></body>');
    res.write('</html>');
    return res.end();
  } 
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Node Server</title></head>');
    res.write('<body><h1>Hello World</h1></body>');
    res.write('</html>');
    res.end();
  }
);

const PORT= 6005;
server.listen(PORT , () => {
  console.log(`server running on port http://localhost:${PORT}`);
});