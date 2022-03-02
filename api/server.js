const express = require('express')
const cors = require('cors')
const server = express()
const idRouter = require('./idRouter')

require('dotenv').config()

server.use(express.json())
server.use(cors())

server.use('/api/id', idRouter )
server.get('/', (req,res) => {
    res.json({message: "inside Server"})
})
module.exports = server