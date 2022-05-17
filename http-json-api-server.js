"use strict"
const http = require("http");
const server = http.createServer((req, res) => {
    let url = new URL(req.url, `http://${req.headers.host}`);
    let date = new Date(url.searchParams.get("iso"));
    let time;
    if (url.pathname == "/api/parsetime") {
        time = new TakeTime(date);
    };
    if (url.pathname == "/api/unixtime") {
        time = new UnixTime(date);
    }
    if (time) {
        res.writeHead(200, { 'Content-Type': 'application/json' })        
        res.end(JSON.stringify(time))
    } else {
        res.writeHead(404);
        res.end();
    }


});
function TakeTime(dateTime) {
    this.hour = dateTime.getHours();
    this.minute = dateTime.getMinutes();
    this.second = dateTime.getSeconds();
}
function UnixTime(dateTime) {
    this.unixtime = dateTime.getTime();
}
server.listen(process.argv[2]);