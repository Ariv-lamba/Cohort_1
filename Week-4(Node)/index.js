console.log('Hello, World!');
function sum(a, b){
    return a+b;
}

console.log(sum(1, 2));

const fs = require('fs');
// fs.writeFileSync('output.txt', 'This is some output text.');

const path = require('path');

//const filepath = path.join(__dirname);
// sum.readFile (filepath , 'utf-8', data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data);
//     }
// }
//console.log(filepath);
console.log(path.join(__dirname + '../../../' + 'output.txt'));