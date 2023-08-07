//adam zuiderveld
//wheel of fortune game

var wheel = [     50000,
                  5000,
                  8500,
                  3000,
                  5000,
                  4500,
                  "Lose a Turn",
                  4000,
                  9500,
                  3500,
                  5000,
                  6500,
                  "Bankrupt",
                  "Bankrupt",
                  "Bankrupt",
                  "Bankrupt",
                  "Bankrupt",
                  "Bankrupt",
                  "Bankrupt",
                  7000,
                  3000,
                  3000,
                  8000,
                  9000,
                  6000,
                  3000,
                  5500,
                  7500,
                  4000,
                  5000,
                  3000
                              ]

var words = [
            "TEST THIS",
            "HELP ME",
            "OK NOW",
            "LETS GO",
            "MORE HERE",
            "BIG BOY",
            "OLD MAN"
                  ]
var helper;
var helper1;
var turnNum=0;
var wordArray=[]; //used to displsy word as "_,_,_,_,_"
var guessedLetters=[]; 
var chosenWord;
var max=25;
var min=0;             
// var points=0;
var firstOcc;
var wordAsArray;
var pointsP1=0;
var pointsP2=0;
//if %2==0, p1 turn, else p2 turn
var playerTurn=2;

