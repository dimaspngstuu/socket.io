const express = require('express');
const app = express();
const http = require('http');

//import module path for find a directory or a file
const path = require('path');



app.use(express.static('client/build'));
app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'client','index.html'))
})


const expressServer = http.createServer(app);

const {Server} = require('socket.io');
const { setTimeout } = require('timers/promises');

const io = new Server(expressServer, {
    cors:{
        origin:"*"
    }
});

app.get('/express-server', (req,res) => {
    res.json({message: "This is a Server Page"})
})

io.on('connection', (socket) => {
    console.log('New user connected')


    socket.emit('msg', "This message from server side")

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
})



expressServer.listen(5000, () => {
    console.log('server is running in PORT 5000')
})