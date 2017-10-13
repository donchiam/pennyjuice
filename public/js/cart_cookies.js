
document.addEventListener("DOMContentLoaded",function(){
	//document.getElementById("appleCount").innerText = Cookies.get("apple");
	appleCount = document.getElementById("appleCount");
	appleCount = 0;
	strawBanCount = document.getElementById("strawBanCount");
	strawBanCount = 0;
	citrusCount = document.getElementById("citrusCount");
	citrusCount = 0;
	peachMangoCount = document.getElementById("peachMangoCount");
	peachMangoCount = 0;
	blueRaspCount = document.getElementById("blueRaspCount");
	blueRaspCount = 0;
	greenWaterCount = document.getElementById("greenWaterCount");
	greenWaterCount = 0;
	cranAppleCount = document.getElementById("cranAppleCount");
	cranAppleCount = 0;
	berryPunchCount = document.getElementById("berryPunchCount");
	berryPunchCount = 0;
	orangePineCount = document.getElementById("orangePineCount");
	orangePineCount = 0;
	let orders = document.querySelector(".orders");
	let close = document.querySelector(".close")[0];
	apple = document.getElementById("apple");
	strawBan = document.getElementById("strawBan");	
	citrus = document.getElementById("citrus");	
	peachMango = document.getElementById("peachMango");	
	blueRasp = document.getElementById("blueRasp");	
	greenWater = document.getElementById("greenWater");	
	cranApple = document.getElementById("cranApple");
	berryPunch = document.getElementById("berryPunch");	
	orangePine = document.getElementById("orangePine");
	

	document.getElementById("buyApple").addEventListener("click",function(event){
		event.preventDefault();
	    appleCount +=1;

	    document.getElementById("appleCount").innerText = appleCount;
	    apple.style.display = "block";
	})

	document.getElementById("buyStrawBan").addEventListener("click",function(event){
		event.preventDefault();
	    strawBanCount +=1;
	    document.getElementById("strawBanCount").innerText = strawBanCount;
	    openOrders();
	    strawBan.style.display = "block";
	    //strawBanCount.style.display = "block";
	})
	document.getElementById("buyCitrus").addEventListener("click",function(event){
		event.preventDefault();
	    citrusCount +=1;
	    document.getElementById("citrusCount").innerText = citrusCount;
	  	openOrders();
	  	citrus.style.display = "block"; 
	})
	document.getElementById("buyPeachMango").addEventListener("click",function(event){
		event.preventDefault();
	    peachMangoCount +=1;
	    document.getElementById("peachMangoCount").innerText = peachMangoCount;
	    openOrders();
	    peachMango.style.display = "block";
	})
	document.getElementById("buyBlueRasp").addEventListener("click",function(event){
		event.preventDefault();
	    blueRaspCount +=1;
	    document.getElementById("blueRaspCount").innerText = blueRaspCount;
	    openOrders();
	    blueRasp.style.display = "block";
	})
	document.getElementById("buyGreenWater").addEventListener("click",function(event){
		event.preventDefault();
	    greenWaterCount +=1;
	    document.getElementById("greenWaterCount").innerText = greenWaterCount;
	    openOrders();
	    greenWater.style.display = "block";
	})
	document.getElementById("buyCranApple").addEventListener("click",function(event){
		event.preventDefault();
	    cranAppleCount +=1;
	    document.getElementById("cranAppleCount").innerText = cranAppleCount;
	    openOrders();
	    cranApple.style.display = "block";
	})
	document.getElementById("buyBerryPunch").addEventListener("click",function(event){
		event.preventDefault();
	    berryPunchCount +=1;
	    document.getElementById("berryPunchCount").innerText = berryPunchCount;
	    openOrders();
	    berryPunch.style.display = "block";
	})
	document.getElementById("buyOrangePine").addEventListener("click",function(event){
		event.preventDefault();
	    orangePineCount +=1;
	    document.getElementById("orangePineCount").innerText = orangePineCount;
	    openOrders();
	    orangePine.style.display = "block";
	})


	//let orders = document.querySelector(".orders");
	//let send = document.getElementById("checkout");
	//let close = document.getElementsByClassName("close")[0];


	document.querySelector(".buyButton").addEventListener("click",function(event){
	//send.addEventListener("click", closeModal);
		openOrders();
	})

	document.querySelector(".close").addEventListener("click",function(event){
		closeOrders();
	})
		//close.addEventListener("click", closeOrders());

		function openOrders() {
			orders.style.display = "block";
		}

		function closeOrders() {
			orders.style.display = "none";
		}


//	document.getElementById("buyStrawBan").addEventListener("click",function(event){
//		event.preventDefault();
//		console.log(Cookies.get("strawBan"));
//	    let strawBanCount = ~~Cookies.get("strawBan") + 1;
//	    Cookies.set("strawBan", strawBanCount);
//	    document.getElementById("strawBanCount").innerText = strawBanCount;
//	})



});
