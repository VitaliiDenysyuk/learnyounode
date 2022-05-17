"use strict"
const fs = require("fs");
const path = require("path");
let pathStarted = process.argv[2];
let mask = process.argv[3];
function ls(lpath, lmask) {
    return new Promise((resolve, reject) => {
        fs.readdir(lpath, (err, data) => {
            if (err) reject(err);
            resolve(data.filter((file) => (path.extname(file) == "." + lmask)))
        })
    })
}
ls(pathStarted, mask).then(
    list => list.forEach((fileName) => (console.log(fileName)))
)
