//external module
const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();

app.use((req, res, next) => {
  console.log('first dummy middleware' , req.url , req.method);
  next();
});

app.use((req, res, next) => {
  console.log('second dummy middleware' , req.url , req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log('third middleware' , req.url , req.method);
//   res.send("<h1>welcome to home page!!</h1>");
// });

app.get("/" , (req, res, next) => {
  console.log('Handeling for get' , req.url , req.method);
  res.send(`<h1>welcome to home page!!</h1>`);
})

app.get("/contact-us" , (req, res, next) => {
  console.log('Handeling contact us for get' , req.url , req.method);
  res.send(`<h1>give your details</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder= "enter your name" /> 
    <input type="email" name="email" placeholder= "enter your email" />
    <input type="submit" />
    </form>
    `);
});

app.post('/contact-us', (req,res,next) => {
  console.log('first handeling' , req.url , req.method, req.body);
  next();
});

app.use(bodyParser.urlencoded());

app.post('/contact-us', (req,res,next) => {
  console.log('Handeling for post' , req.url , req.method, req.body);
  res.send(`<h1>we will contact you</h1>`);
});

const PORT= 6005;
app.listen(PORT , () => {
  console.log(`server running on port http://localhost:${PORT}`);
});