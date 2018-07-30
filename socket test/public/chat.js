var socket = io.connect('https://streamer.cryptocompare.com')
	var subscription = ['5~Poloniex~BTC~USD'];
	socket.emit('SubAdd', { subs: subscription });
	socket.on("m", function(message) {
		console.log(message);
	})
