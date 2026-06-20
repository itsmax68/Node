const fs = require('fs');

console.log('1. start os script');

console.log('2. reading file sync');
const dataSync = fs.readFileSync('user-details.txt', 'utf8');
console.log('3. sync read complete');

console.log('4. reading async');
fs.readFile('user.txt', 'utf8' , (err, dataAsync) => {
  if (err) throw err ;
  console.log('5. async read complete');

});

console.log('6. end script');
