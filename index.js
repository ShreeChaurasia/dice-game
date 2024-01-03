var randomNumber1=Math.random()
randomNumber1=Math.floor(randomNumber1*6+1);

/*var randomDice= "dice" +randomNumber1+ ".png";
var randomImage="images/" +randomDice*/
var randomDice1="images/dice" +randomNumber1+ ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDice1);




var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6+1);

var randomDice2="images/dice" +randomNumber2+ ".png";


document.querySelectorAll("img")[1].setAttribute("src", randomDice2);


//var randomNumber1=Math.floor((Math.random())*6)+1;
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins";

}else{
    document.querySelector("h1").innerHTML="its a draw";

}
