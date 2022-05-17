'use strict'
const http = require("http");
const bl = require('bl');

function geturl(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            response.pipe(bl((err, data) => {
                if (err) reject(err);
                resolve(data)
            }))
        })
    })
}
geturl(process.argv[2])
    .then((result) => {
        console.log(result.toString());
        return geturl(process.argv[3])
    })
    .then((result) => {
        console.log(result.toString())
        return geturl(process.argv[4])
    })
    .then((result) => {
        console.log(result.toString())
    })



