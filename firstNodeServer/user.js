const fs = require('fs');
const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

  if(req.url === '/'){
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body><h1>Enter your details</h1>');
    res.write('<form action="/submit" method="POST">');
    res.write('<br><input type="text" name="username" placeholder="enter your name">');
    res.write('<label for gender">gender</label>');
    res.write('<br><input type="radio" id="male" name="gender" value="male">Male');
    res.write('<br><input type="radio" id="female" name="gender" value="female">Female');
    res.write('</label>');
    res.write('<br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if(req.url.toLowerCase() === '/submit' && req.method === 'POST'){

    const body = [];
    req.on('data' , (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      // const bodyObject = {};
      // for(const [key, value] of params.entries()){
      //   bodyObject[key] = value;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  } 
  else{
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Products Page</title></head>');
    res.write('<body><h1>products page</h1></body>');
    res.write('</html>');
    return res.end();
  } 
}

module.exports = userRequestHandler;