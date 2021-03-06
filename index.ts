import http from 'http'
import { Server } from "socket.io"
import express from "express"
import dotenv from "dotenv"

import user from './src/modules/user/routes'

dotenv.config()

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())

app.use((_, res, next) => {

  res.set({
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Headers': "Content-Type, access_token",
  })

  next()
})

app.use('/user', user)

const server = http.createServer(app)

const io = new Server(server, {
  path: '/socket'
})

const mainSocket = io.of('/main')

mainSocket.on('connection', socket => {
  console.log('New connect main server...', Math.random())

  socket.on('disconnect', ()=> console.log('Disconnect main server'))

  socket.on('send_mesage', message => {

    socket.broadcast.emit('reseive_message', message)

  })
})


server.listen(PORT,() => console.log(PORT))
