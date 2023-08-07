

//Displayer current players turn
function whichPlayer(){
      if(playerTurn%2==0) {
      document.getElementById("pTurn").innerHTML = "Player 1's Turn";  
      console.log("Player 1 turn"); 
      }
      else {
            console.log("player 2 turn");
            document.getElementById("pTurn").innerHTML = "Player 2's Turn";
      }
}

function wordToArray(word){
      var str=word;
      wordAsArray=chosenWord.split("")
      console.log(wordAsArray);
}

//word 1= array of words, word2 will be chosenword
//function determines if word has been found completely.
function compareEndGame(word1,word2){
var x=wordArray.join("");
console.log(x);
console.log(wordArray);
if(x==word2){
      console.log("GAME OVER");
      if(pointsP1>pointsP2){
            alert("Player 1 wins with $" + pointsP1);
      }
      else if(pointsP2>pointsP1){
                  alert("Player 2 wins with $" + pointsP2);
      }
      alert("Game has completed!!");
      document.getElementById("startGame").style.display = "inline";
      //show word with underscores
      document.getElementById("underscores").style.display = "none";
      //reveal spin button to the world!
      document.getElementById("myBtn").style.display = "none";
      location.reload();
}
}

//get random word from array!!
function getWord(){
      chosenWord=words[Math.floor(Math.random() * words.length)]
      wordArray=[];
      //turns word into undersdores
      for (var i=0;i<chosenWord.length;i++){

             wordArray[i]="_";
      }
      console.log(chosenWord);
      wordToArray(chosenWord);
            console.log(chosenWord);
//puts space in underscores where neeeded
            for(var j=0;j<chosenWord.length;j++){
            if (chosenWord[j]==" "){
                  wordArray[j]=" ";
            }
      }
      document.getElementById("underscores").innerHTML = wordArray;
      console.log(wordArray);
}

//FIND EACH INDEX OF GUESSED LETTER IN WORD
//https://stackoverflow.com/questions/3410464/how-to-find-indices-of-all-occurrences-of-one-string-in-another-in-javascript
function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toUpperCase();
        searchStr = searchStr.toUpperCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

//ADD POINTS TO TOTAL
function revealPoints(add){

      if(playerTurn%2==0){         
      pointsP1+=helper;
      document.getElementById("pointsPlayer1").innerHTML = "You have  $" + pointsP1;
                  document.getElementById("myBtn").style.display = "inline";
                        }

      else{
      pointsP2+=helper;
      document.getElementById("pointsPlayer2").innerHTML = "You have  $" + pointsP2;
                  document.getElementById("myBtn").style.display = "inline";
                  }         

            }
      


//REVEAL THE LETTER FOUND AT INDEX...
function revealLetter(index,letter){
      // playerTurn++;
      wordArray[index]=letter;
      console.log(wordArray)
      document.getElementById("underscores").innerHTML = wordArray;
      //only add points for first instance of letter found,
      revealPoints(helper);      
}
//same as letter but doesnt add points if guessed correctly
function revealVowels(index,letter){
      // playerTurn++;
      wordArray[index]=letter;
      console.log(wordArray)
      document.getElementById("underscores").innerHTML = wordArray;
      //only add points for first instance of letter found,
}
