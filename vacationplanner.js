var name=window.prompt("Enter your name");
var greetings=document.getElementById("greeting");
greetings.innerHTML+=", "+name;

var images=['images/image1.jpg','images/image2.jpg','images/image3.jpg','images/image4.jpg'];
var currentImage = 0;
setInterval(changeImage, 3000);
 function changeImage(){
     currentImage++;
     if(currentImage > images.length - 1){
         currentImage = 0;
     }
     document.body.style.backgroundImage = "url(" + images[currentImage] + ")";
 }


var enterDays = document.getElementById("enterDays");
var days;
enterDays.onclick = calculateDays;
function calculateDays(){
	var daysInput = document.getElementById("days");
	days = daysInput.value;
	var daysMessage = document.getElementById("daysMessage");
     	if(days < 4){
        	daysMessage.innerHTML = "Short trips are always worth it!";
     	}
     	else if(days < 7){
        	daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
     	}
     	else{
         	daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
     	}
	var hours = days * 24;
	var minutes = days * 24 * 60;
	var seconds = days * 24 * 60 * 60;
	var hoursMessage = document.getElementById("hoursMessage");
	hoursMessage.innerHTML = "That means you'll be traveling for " + hours + " hours.";
	var minutesMessage = document.getElementById("minutesMessage");
	minutesMessage.innerHTML = "That means you'll be traveling for " + minutes + " minutes.";
	var secondsMessage = document.getElementById("secondsMessage");
	secondsMessage.innerHTML = "That means you'll be traveling for " + seconds + " seconds.";
	
	var timingNext = document.getElementById("timingNext");
 	timingNext.removeAttribute("hidden");
	timingNext.onclick = function(){
	     document.getElementById("budgetSection").removeAttribute("hidden");
	} 
 }
var enterBudget = document.getElementById("enterBudget");
enterBudget.onclick =function(){
	var budgetInput=document.getElementById("tripBudget");
	var budget=budgetInput.value
	var tripExchangeMsg =document.getElementById("tripExchangeMsg");
	var dailyExchangeMsg =document.getElementById("dailyExchangeMsg");
	var exchange10Msg =document.getElementById("exchange10Msg");
	var exchange500Msg =document.getElementById("exchange500Msg");
	tripExchangeMsg.innerHTML="That means you'll need "+budget*65+" INR for your trip";
	dailyExchangeMsg.innerHTML="This means you can spend "+budget*65/days+" INR per day";
	var exchange10Msg = document.getElementById("exchange10Msg");
	exchange10Msg.innerHTML = "You'll need " + 10*65 + " INR for an Item that would cost you 10 USD.";
	var exchange500Msg = document.getElementById("exchange500Msg");
	exchange500Msg.innerHTML = "You'll need " + 500*65+ " INR for an Item that would cost you 500 USD.";
	
}

var showImages=document.getElementById("showImages");
showImages.onclick=function(){
	 document.getElementById("imageSlideshow").removeAttribute("hidden");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var image = document.getElementById("image");

// store image paths in an array
var images = ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/city.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/cloudy.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/green.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/pretty_clouds.jpg"];

var imageIndex = 0;
// point to previous image when prev button is clicked
prev.onclick = function(){
  // set image to highest index when moving past 0
  if(imageIndex == 0){
    imageIndex = images.length - 1;
  }
  else{
    imageIndex--;
  }
  image.setAttribute("src", images[imageIndex]);
}
// point to previous image when prev button is clicked
next.onclick = function(){
  // set image index to 0 when moving past max index
  if(imageIndex == images.length - 1){
    imageIndex = 0;
  }
  else{
    imageIndex++;
  }
  image.setAttribute("src", images[imageIndex]);
}
}


