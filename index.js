const express = require("express");
const app = express();
const http = require("http");

const expressServer = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(expressServer,{
    cors: {
        origin: "*"
    }
});

io.on("connection",function(socket){
    socket.on("message", function(msg){
        io.emit("chat_send", msg)
    })

})

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})


expressServer.listen(3000, () => {
    console.log("This server running in PORT 3000")
})