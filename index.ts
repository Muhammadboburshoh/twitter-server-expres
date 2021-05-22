import http from 'http'
import { Server } from "socket.io"
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

const server = http.createServer(app)

app.get('/', (req, res) => res.send("OK"))

server.listen(PORT,() => console.log(PORT))
