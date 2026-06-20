console.log('hello!');

const fs = require('fs');
fs.writeFile('output.txt' , 'writting File' , (err) => {
  if (err) console.log('error ocurred');
  else console.log('file Written successfully');
});