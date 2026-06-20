//core module


//external module
const express = require('express');

//local module
const userRequestHandler = require('./user');

const app = express();

app.get("/",(req , res, next) => {
  console.log("came in first middleware",req.url, req.method);
  next();
});

app.post("/submit",(req , res, next) => {
  console.log("came in secound middleware",req.url, req.method);
  res.send(" <p>welcome to the page</p> ")
});

app.use("/",(req , res, next) => {
  console.log("came in another middleware",req.url, req.method);
  res.send("<p>came from another middle.</p>");
  next();
});




const PORT= 6005;
app.listen(PORT , () => {
  console.log(`server running on port http://localhost:${PORT}`);
});