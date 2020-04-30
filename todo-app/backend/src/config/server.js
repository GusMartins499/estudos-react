const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express();
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json({ extended: true }))
server.use(allowCors)

server.listen(port, function () {
    console.log(`BACKEND IS RUNNING ON PORT ${port}`)
})

module.exports = server