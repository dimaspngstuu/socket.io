const express = require('express');
const app = express();
const http = require('http');


const expressServer = http.createServer(app);

//configure a socket io
const {Server} = require('socket.io');
const io = new Server(expressServer);

io.on('connection', socket => {
    console.log('New User connection')

    socket.on('disconnect', () => console.log('User Disconnect'))
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

expressServer.listen(3000, () => {
    console.log('Express server listening on port 3000');
})