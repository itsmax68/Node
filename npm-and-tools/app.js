const http = require('http');

const server = http.createServer((req , res)=> {
  console.log(req)
});

const PORT= 6006;
server.listen(PORT , () => {
  console.log(`server running on port http://localhost:${PORT}`);
});