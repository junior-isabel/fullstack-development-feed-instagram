const http = require('http')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)
app.use(cors())
app.use(morgan('dev'))
require('./src/database/index')
app.use((req, res, next) => {
    req.io = io
    next()
})
app.use('/files', express.static(path.resolve(__dirname, 'uploads', 'resized')))
app.use(require('./src/routes'))



server.listen(3333)