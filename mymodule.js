"use strict"
const fs = require("fs");
const path = require("path");
module.exports = function(lpath, lmask, callBack){
    lsReadAsinc(lpath, lmask).then(
        list=>callBack(null, list),
        error=>callBack(error)
    )
}
function lsReadAsinc(lpath, lmask) {
    return new Promise((resolve, reject) => {
        fs.readdir(lpath, (err, data) => {
            if (err) reject(err);
            resolve(data.filter((file) => (path.extname(file) == "." + lmask)))
        })
    })
}
