const express = require('express');
const socketIO = require('socket.io');
const http = require('http');


const path = require('path');

const app = express();

//crear servidor http
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Inicializando socket IO = esta es la comunicación del backend
//y exportando el socket io
module.exports.io = socketIO(server);


//importando el archivo de sockets
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});


//socket.io/socket.io.js