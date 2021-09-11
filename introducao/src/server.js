const express = require('express')
const { somar, multiplicar, subtrair, dividir } = require('./Calculadora')

const server = express()

server.get('/', (request, response) => {
    return response.json({message: "Olá Mundo"})
})

console.log("-----------------------------------")
server.listen('3030', () => {
    console.log('Server ON')
    console.log('http://localhost:3030')
})
console.log("-----------------------------------")
