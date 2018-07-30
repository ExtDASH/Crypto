import data from './data.js'
// import chart from './chart.js'
// const request = require("request")
const app = new Vue({
	el: '#app',
	data,
	methods: {
		fav(id){
			// data.favExch = {}
			let keys = id
			// let aaa = new Object()
			for (keys in data)
				// console.log(data[keys])
				if (keys === id){
					data.favExch.push({keys})
				}
				
				
		},
		delFav(id){
			
		},
		
		filterExchUSD(id, arr, x){
			data.viewing = {}
			data.nameExch = {}
			let keys = id
			// console.log(data.keys)
			for (keys in data)
				if (keys === id){
					// console.log(keys)
					data.viewing = data[keys]
					data.nameExch = {keys}
				}
				


			console.log(data.viewing)
			console.log(data.nameExch)

			
			// console.log(data.arr)
			// // arr = [];
			// let keys = id
			// for(keys in data)
			// 	if(keys === id)
			// 		data.arr.push(data[keys])
			// for (var value in data.arr)
			// 	console.log(data.arr[value])
			// 	for (var newA in data.arr[value])
			// 		console.log(data.arr[value][newA])
			// 		for (var newB in data.arr[value][newA])
			// 			console.log(data.arr[value][newA][newB])


					//WOW!
				
				
		},
		
		filterCtoC(){

		},

		filterMarket(){

		},
		filterOther(){

		},
		getExch(obj){
			$.get("http://localhost:3000/data/exchanges", function(obj){
				
				data.exchanges = obj
				
				console.log(data.exchanges)
				
			})
		},
		getCoins(obj){
			
	 		$.get("http://localhost:3000/data/coins", function(obj){
            	data.coins = obj.Data
            	console.log(data)
            })
	 	
			
		},
		
	
		getCoinData(id){
			console.log("id: " + id)
			$.get('http://localhost:3000/data/'+id, function(obj){
				console.log(obj)
				data.viewing = obj.Data
				console.log(data.viewing[0])
				var drawChart = function(){
					var ctx = document.getElementById('myChart').getContext("2d")
					var mainGradient = ctx.createLinearGradient(0, 400, 400, 400);
					mainGradient.addColorStop(0, 'rgba(246, 79, 89, .25)');
					mainGradient.addColorStop(.5, 'rgba(196, 113, 237, .25)');
					mainGradient.addColorStop(1, 'rgba(18, 194, 233, .25)');
						var myChart = new Chart(ctx, {

							type: 'line',
								data: {
									labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
										datasets: [{
											label: 'Price',
											data: [data.viewing[91].high, data.viewing[92].high, data.viewing[93].high, data.viewing[94].high, data.viewing[95].high, data.viewing[96].high, data.viewing[97].high, data.viewing[98].high, data.viewing[99].high, data.viewing[100].high],
											backgroundColor: mainGradient,
											borderColor: [
											
											],
											borderWidth: 1
											}]
								},
							options: {
								scales: {
									yAxes: [{
										ticks: {
											beginAtZero: false,
										}
									}]
								}
							}
						})
					// console.log(dataA)
				}
				drawChart()
			})

		}

}
})

var socket = io.connect('http://localhost:3000/')