import http from 'http'
import { Server } from "socket.io"
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 4000
const app = express()

app.use((_, res, next) => {

  res.send({
    'Acces-Controll-Allow-Origin': '*',
  })
  next()
})

const server = http.createServer(app)

const io = new Server(server, {
  path: '/socket'
})

const mainSocket = io.of('/main')

mainSocket.on('connection', socket => {
  console.log('New connect main server...', Math.random())

  socket.on('disconnect', ()=> console.log('Disconnect main server'))

  socket.on('send_mesage', message => {
    console.log(message);
    
  })
})


app.get('/', (req, res) => res.send("OK"))

server.listen(PORT,() => console.log(PORT))
