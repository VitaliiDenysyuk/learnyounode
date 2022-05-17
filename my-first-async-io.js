"use strict"
const fs = require('fs');

function readFile(nameFile) {
    return new Promise((resolve, reject) => {
        fs.readFile(process.argv[2], { encoding: 'utf8' }, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

readFile(process.argv[2]).then(
    buffer => console.log(buffer.match(/\n/g).length)
)