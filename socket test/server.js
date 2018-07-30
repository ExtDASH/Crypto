var express = require('express')
var socket = require('socket.io')
var app = express()

var server = app.listen(4000, function(){
	console.log("well met")
})



app.use(express.static('public'))

var io = socket(server)

// console.log(status)
io.on('connect', function(socket){
	console.log('well met from socket connection', socket.id)
	socket.on('error', console.error)
})