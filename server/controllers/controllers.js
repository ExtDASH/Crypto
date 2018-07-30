const request = require("request")
const bodyParser = require('body-parser')

module.exports = {

	getCoins: (req, res, next) => {
		console.log("hi")
		request('https://min-api.cryptocompare.com/data/all/coinlist', function(error, response, data){
			console.log('error: ', error)
			console.log('statusCode:', response && response.statusCode)
			var obj = JSON.parse(data)
			res.send(obj)
				})
		},
	
	getExchanges: (req, res, next) => {
		console.log("hi")
		request('https://min-api.cryptocompare.com/data/all/exchanges', function(error, response, data){
			console.log('error: ', error)
			console.log('statusCode:', response && response.statusCode)
			var obj = JSON.parse(data)
			res.send(obj)
				})
	},

	getSpec: (req, res, next) => {
		console.log("hi2")
		var id = req.params.id
		// console.log(id)
		request('https://min-api.cryptocompare.com/data/histominute?fsym='+id+'&tsym=USD&limit=100', function(error, response, data){
			console.log('error: ', error)
			console.log('statusCode:', response && response.statusCode)
			console.log("hi3")
			var obj = JSON.parse(data)
			res.send(obj)

		})
	}
}