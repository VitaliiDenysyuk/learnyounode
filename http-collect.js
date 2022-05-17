const http = require("http");
const { BufferList } = require('bl')
const url = process.argv[2];
let bl = new BufferList();

http.get(url,response=>{
    response.on("data",(streem)=>{
        bl.append(streem)
    });
    response.on("end",(sreem)=>{
        console.log(bl.length);
        console.log(bl.toString('utf8'))
    })
})