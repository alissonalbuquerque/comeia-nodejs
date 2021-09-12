import express from 'express'
import path from 'path'
import mustache from 'mustache-express'
import router from './routers'

const server = express()

server.use(express.json())

server.set('view engine', 'mustache')
server.set('views', path.resolve(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.resolve(__dirname, '..', 'public')))
server.use(router)

server.listen('3030', () => {
    console.log('Server ON')
    console.log('http://localhost:3030')
})