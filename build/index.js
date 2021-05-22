"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var socket_io_1 = require("socket.io");
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var PORT = process.env.PORT || 4000;
var app = express_1.default();
app.use(function (_, res, next) {
    res.send({
        'Acces-Controll-Allow-Origin': '*',
    });
    next();
});
var server = http_1.default.createServer(app);
var io = new socket_io_1.Server(server, {
    path: '/socket'
});
var mainSocket = io.of('/main');
mainSocket.on('connection', function (socket) {
    console.log('New connect main server...', Math.random());
    socket.on('disconnect', function () { return console.log('Disconnect main server'); });
    socket.on('send_mesage', function (message) {
        socket.broadcast.emit('reseive_message', message);
    });
});
app.get('/', function (req, res) { return res.send("OK"); });
server.listen(PORT, function () { return console.log(PORT); });
