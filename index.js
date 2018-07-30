/*

API KEY: DB60E174-BE0A-4FC0-A685-EFD70162FF02
HEADER: X-CoinAPI-Key: KEY
{
  "type": "hello",
  "apikey": "73034021-0EBC-493D-8A00-E0F138111F41",
  "heartbeat": false,
  "subscribe_data_type": ["trade"],
  "subscribe_filter_symbol_id": [
    "BITSTAMP_SPOT_BTC_USD",
    "BITFINEX_SPOT_BTC_LTC",
    "COINBASE_",
    "ITBIT_"
    ]
}

or
{
  "type": "hello",
  "apikey": "73034021-0EBC-493D-8A00-E0F138111F41",
  "heartbeat": false,
  "subscribe_data_type": ["quote"],
  "subscribe_filter_asset_id": ["BTC", "ETH"]
}
or
{
  "type": "hello",
  "apikey": "73034021-0EBC-493D-8A00-E0F138111F41",
  "heartbeat": false,
  "subscribe_data_type": ["trade", "quote", "book20"]
}

*/


import data from './data.js'




let tabs = document.getElementsByClassName("tabsLa")
let coin = document.getElementById("coinz")
let exchangess = document.getElementById("exchangesL")
let cex = document.getElementsByClassName("clickEx")
let addToFav = document.querySelectorAll("svg")
let mainInfo = document.getElementById("detailedInfo")
let coinEls = document.getElementsByClassName("tdCoins")
let svgs1 = document.querySelectorAll(".svgCls")
let svgs2 = document.querySelectorAll(".svgCls2")
let svgs3 = document.querySelectorAll(".svgCls3")


tabs[0].addEventListener("click", function(){
	this.classList.add("active")
	// tabs[1].classList.remove("active")
	if(this.classList.contains("active")){
		coin.classList.remove("hideThis")
		coin.classList.add("showThis")
		// exchangess.classList.add("hideThis")
	}
})



for(let i = 0; i < svgs1.length; i++){
	
	svgs1[i].addEventListener("click", function(){

		this.classList.add("active2")
		if(!this.classList.contains("startRotate")){
			this.classList.remove("unRotate")
			this.classList.add("startRotate")
		} else if (this.classList.contains("startRotate")){
			this.classList.remove("startRotate")
			this.classList.add("unRotate")
			if(this.classList.contains("unRotate")){
				this.classList.remove("active2")
			} 
		}

	})
}




