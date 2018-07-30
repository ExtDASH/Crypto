const express = require('express')
// const request = require("request")
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const request = require('request')
const app = express()
const cryptoRouter = require('./routes/routes')
const socket = require('socket.io')
// const cryptoController = require('./controllers/controllers')


app.use(express.static(`${__dirname}/../`))
app.use(morgan('tiny'))
app.use('/data', cryptoRouter)

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



var server = app.listen(3000, function(){
	console.log("i am king")
})

//NEED MONGODB UTILIZATION


var io = socket(server)

io.on('connection', function(){
	console.log('hello from socket')
})