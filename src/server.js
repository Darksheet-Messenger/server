const express = require('express');
const app = express();

//---------- CRIA AS ROTAS MIKAIO.
app.use(express.static(__dirname + '/public'));

const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log(`User ${socket.id} connected!`);

    socket.on('test1', (parameter) => {
        console.log(parameter);
    });

    socket.on('login', (userData) => {
        var name = userData.name;
        var password = userData.password;

        console.log(`Dados de acesso -> nome: ${name} senha: ${password}`);
    });

    socket.on('new_user', () => {});

    socket.on('disconnect', () => {
        console.log(`User ${socket.id} disconnected!`);
    });

});

http.listen(process.env.PORT || 3000, () => console.log('Servidor rodando!!!'));
//http.listen(process.env.PORT || 3000, '192.168.1.66', () => console.log('Servidor rodando!!!'));