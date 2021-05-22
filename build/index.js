"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = express_1.default();
var PORT = process.env.PORT || 4000;
var server = http_1.default.createServer(app);
app.get('/', function (req, res) { return res.send("OK"); });
server.listen(PORT, function () { return console.log(PORT); });
