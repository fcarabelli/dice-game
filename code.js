
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomDice1 = ("dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomDice2 = ("dice" + randomNumber2 + ".png");


var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2"); 

img1.setAttribute("src", randomDice1);
img2.setAttribute("src", randomDice2);

var title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    title.innerHTML = "🚩 Player1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "🚩 Player2 Wins!"
} else {
    title.innerHTML = "Draw!"
}


