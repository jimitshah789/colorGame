var numSquares = 6;
var squares = document.querySelectorAll(".squares");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var reset = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	spanDisplay.textContent = pickedColor;
	for(var i =0 ; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.backgroundColor = colors[i]; 
		} 
		else{
		squares[i].style.display = "none";	
		}

	} 
});

hardBtn.addEventListener(("click"), function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	spanDisplay.textContent = pickedColor;

	for(var i =0 ; i < squares.length; i++){

		squares[i].style.backgroundColor = colors[i]; 
		squares[i].style.display = "block";	

	} 
});

reset.addEventListener(("click"), function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	spanDisplay.textContent = pickedColor;
	for(var i =0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	message.textContent = " ";
	reset.textContent = "New Colors";
});

for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i]; 
 
	var spanDisplay = document.getElementById("spanDisplay");
	spanDisplay.textContent = pickedColor;

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			message.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			reset.textContent = "Play again?";
		}else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	});
}


 
function changeColors(color){
	// loop through all squares
	for(var i=0; i<squares.length; i++){
	// change each color to match given color
	squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push(randomColor())
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
