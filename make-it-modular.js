"use strict"
const mymodule = require("./mymodule");

let pathStarted = process.argv[2];
let mask = process.argv[3];

mymodule(pathStarted, mask, (onerror, list) => {
    if (onerror) {
        return console.error('There was an error:', onerror)
    }
    list.forEach((fileName) => (console.log(fileName)))
})
