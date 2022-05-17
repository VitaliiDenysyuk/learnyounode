const net = require('net')
function twoChar(num) {
    return num > 9 ? "" + num : "0" + num;
}
const server = net.createServer(function (socket) {
    let currenDate = new Date();
    
    socket.write("" + currenDate.getFullYear()
        + "-" + twoChar(currenDate.getMonth() + 1)
        + "-" + twoChar(currenDate.getDate())
        + " " + twoChar(currenDate.getHours())
        + ":" + twoChar(currenDate.getMinutes())
        +"\n");
    socket.end();
})
server.listen(process.argv[2])