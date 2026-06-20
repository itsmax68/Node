const http = require('http');
const userRequestHandler = require('./user');


const server = http.createServer(userRequestHandler);


const PORT= 6005;
server.listen(PORT , () => {
  console.log(`server running on port http://localhost:${PORT}`);
});