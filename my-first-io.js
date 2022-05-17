"use strict"
const fs = require('fs');
let bufer = fs.readFileSync(process.argv[2],{encoding:'utf8'});
console.log(bufer.match(/\n/g).length)
