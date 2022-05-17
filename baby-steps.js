"use strict"
let [node, file, ...rest] = process.argv;
let sum = rest.reduce((sum, current) => (sum += +current),0);
console.log(sum);

