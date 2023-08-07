
//START GAME....set word, show underscores, and reveal spin button
//then hide start button!
document.getElementById("startGame").addEventListener("click", function(){
      //set the word from array
      getWord();
      //hide start button
      document.getElementById("startGame").style.display = "none";
      //show word with underscores
      document.getElementById("underscores").innerHTML = wordArray;
      //reveal spin button to the world!
      document.getElementById("myBtn").style.display = "inline";
      document.getElementById("guess").style.display = "inline";

});

//hides vowel button after you spin post choosing a vowel
function hide(){
            document.getElementById("vowels").style.display = "none";
}

//SPIN BUTTON handler..
document.getElementById("myBtn").addEventListener("click", function(){
        document.getElementById("vowels").style.display = "none";

    //setTimeOut all of this bc the wheel needs .1 secnds to spin. set timeout to 1500ms
    setTimeout(function(){  
      document.getElementById("vowels").style.display = "none";

      document.getElementById("myBtn").style.display = "none";
      document.getElementById("vowelBoard").style.display = "none";
      console.log("spinning.....")
      //helper...spins wheel for random value from arrau
      // helper = wheel[Math.floor(Math.random() * (max - min)) + min];
      // helper=helper1;
      //which players turn?
      whichPlayer();
      //show spin value on html...
      document.getElementById("spinValue").innerHTML = "You spun for: $" + helper;
      //show word _,_,_,_ on board
      document.getElementById("underscores").innerHTML = wordArray;
      document.getElementById("letterBoard").style.display = "inline";
      document.getElementById("myBtn").style.display = "none";
      // playerTurn++;
      if(helper=='Bankrupt'){
            if(playerTurn%2==0){
                  console.log("Player 1 Bankrupt")
            pointsP1=0;
            document.getElementById("pointsPlayer1").innerHTML = "You went Bankrupt! Now have  $" + pointsP1;
            document.getElementById("myBtn").style.display = "inline";
            document.getElementById("letterBoard").style.display = "none";
            document.getElementById("vowels").style.display = "none";

            playerTurn++;
}     
            else{
                  console.log("Player 2 Bankrupt")
            pointsP2=0;
            document.getElementById("pointsPlayer2").innerHTML = "You went Bankrupt! Now have  $" + pointsP2;
            document.getElementById("myBtn").style.display = "inline";
            document.getElementById("letterBoard").style.display = "none";
            document.getElementById("vowels").style.display = "none";

            playerTurn++;
}
      }
      if(helper=="Lose a Turn"){
            console.log("Lose a turn")
            document.getElementById("letterBoard").style.display = "none";
            document.getElementById("myBtn").style.display = "inline";
            playerTurn++;
      }
      document.getElementById("vowels").style.display = "hide";
    }, 2500);
},false);

//handles event where you vuy a vowel
document.getElementById("vowels").addEventListener("click", function(){
      document.getElementById("vowelBoard").style.display = "inline";
      document.getElementById("myBtn").style.display = "none";
      document.getElementById("vowels").style.display = "none";
});


//should show up after you spin!
//ALPHABET BUTTONS TO PRESS....DISAPPEARS WHEN PRESSED
//when letter is chosen....lets increase turnNum and check the word for the letter picked
function setLetter(letter) {
    document.getElementById('name').innerHTML = document.getElementById('name').innerHTML + letter;
    document.getElementById(letter).style.display = "none";
    var indices=getIndicesOf(letter,chosenWord);
    console.log(indices)
    document.getElementById("output").innerHTML = indices + "";
   firstOcc=1;  

      document.getElementById("letterBoard").style.display = "none";
      document.getElementById("myBtn").style.display = "inline";

    //for each indices found, reveal the letter found in array...then add points again
    indices.forEach(function (indices){
    revealLetter(indices,letter);
      firstOcc++;
      whichPlayer();
      console.log("Found a letter!")
      compareEndGame(wordArray,chosenWord);
          });

    //if letter guessed is in word, take another turn!
      if(firstOcc==1){
            playerTurn++;
            firstOcc++;
      }
      //if current player has at least $250, allow them to buy a vowel before next spin
      if(playerTurn%2==0 && pointsP1>250){
      document.getElementById("vowels").style.display = "inline";
      }
      else if(playerTurn%2!=0 && pointsP2>250){
      document.getElementById("vowels").style.display = "inline";
      }

}


//same as setletter but for vowels.
function setVowel(letter) {
         if(playerTurn%2==0){
            pointsP1-=250;
            document.getElementById("pointsPlayer1").innerHTML = "You have  $" + pointsP1;

         }
         else{
            pointsP2-=250;
            document.getElementById("pointsPlayer2").innerHTML = "You have  $" + pointsP2;
         }
    document.getElementById('name').innerHTML = document.getElementById('name').innerHTML + letter;
    document.getElementById(letter).style.display = "none";
    var indices=getIndicesOf(letter,chosenWord);
    console.log(indices)
    document.getElementById("output").innerHTML = indices + "";
    firstOcc=1;  
    document.getElementById("vowelBoard").style.display = "none";
    document.getElementById("myBtn").style.display = "inline";
    //for each indices found, reveal the letter found in array...then add points again
    indices.forEach(function (indices){
    revealVowels(indices,letter);
      firstOcc++;
      whichPlayer();
      console.log("Found a letter!")
      compareEndGame(wordArray,chosenWord);
          });
    //if letter guessed is in word, guess again!
      if(firstOcc==1){
            playerTurn++;
            firstOcc++;
            whichPlayer();
            document.getElementById("vowels").style.display = "none";
      }
      if(playerTurn%2==0 && pointsP1>250){
      document.getElementById("vowels").style.display = "inline";
      }
      else if(playerTurn%2!=0 && pointsP2>250){
      document.getElementById("vowels").style.display = "inline";
      }
      whichPlayer();
}

   let theWheel = new Winwheel({
                'outerRadius'     : 212,        // Set outer radius so wheel fits inside the background.
                'innerRadius'     : 75,         // Make wheel hollow so segments don't go all way to center.
                'textFontSize'    : 24,         // Set default font size for the segments.
                'textOrientation' : 'vertical', // Make text vertial so goes down from the outside of wheel.
                'textAlignment'   : 'outer',    // Align text to outside of wheel.
                'numSegments'     : 24,         // Specify number of segments.
                'segments'        :             // Define segments including colour and text.
                [                               // font size and test colour overridden on backrupt segments.
                   {'fillStyle' : '#ee1c24', 'text' : '300'},
                   {'fillStyle' : '#3cb878', 'text' : '450'},
                   {'fillStyle' : '#f6989d', 'text' : '600'},
                   {'fillStyle' : '#00aef0', 'text' : '750'},
                   {'fillStyle' : '#f26522', 'text' : '500'},
                   {'fillStyle' : '#000000', 'text' : 'Bankrupt', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
                   {'fillStyle' : '#e70697', 'text' : '3000'},
                   {'fillStyle' : '#fff200', 'text' : '600'},
                   {'fillStyle' : '#f6989d', 'text' : '700'},
                   {'fillStyle' : '#ee1c24', 'text' : '350'},
                   {'fillStyle' : '#3cb878', 'text' : '500'},
                   {'fillStyle' : '#f26522', 'text' : '800'},
                   {'fillStyle' : '#a186be', 'text' : '300'},
                   {'fillStyle' : '#fff200', 'text' : '400'},
                   {'fillStyle' : '#00aef0', 'text' : '650'},
                   {'fillStyle' : '#ee1c24', 'text' : '1000'},
                   {'fillStyle' : '#f6989d', 'text' : '500'},
                   {'fillStyle' : '#f26522', 'text' : '400'},
                   {'fillStyle' : '#3cb878', 'text' : '900'},
                   {'fillStyle' : '#000000', 'text' : 'Bankrupt', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
                   {'fillStyle' : '#a186be', 'text' : '600'},
                   {'fillStyle' : '#fff200', 'text' : '700'},
                   {'fillStyle' : '#00aef0', 'text' : '800'},
                   {'fillStyle' : '#ee1c24', 'text' : '1000'},
                ],
                'animation' :           // Specify the animation to use.
                {
                    'type'     : 'spinToStop',
                    'duration' :2,    // Duration in seconds.
                    'spins'    : 3,     // Default number of complete spins.
                    'callbackFinished' : alertPrize,
                    'callbackSound'    : playSound,   // Function to call when the tick sound is to be triggered.
                    'soundTrigger'     : 'pin'        // Specify pins are to trigger the sound, the other option is 'segment'.
                },
                'pins' :                // Turn pins on.
                {
                    'number'     : 24,
                    'fillStyle'  : 'silver',
                    'outerRadius': 4,
                }
            });

            // Loads the tick audio sound in to an audio object.
            let audio = new Audio('tick.mp3');

            // This function is called when the sound is to be played.
            function playSound()
            {
                // Stop and rewind the sound if it already happens to be playing.
                audio.pause();
                audio.currentTime = 0;

                // Play the sound.
                audio.play();
            }

            // Vars used by the code in this page to do power controls.
            let wheelPower    = 3;
            let wheelSpinning = false;

            // -------------------------------------------------------
            // Click handler for spin button.
            // -------------------------------------------------------
            function startSpin()
            {
              wheelSpinning=false;
                // Ensure that spinning can't be clicked again while already running.
                if (wheelSpinning == false) {
                    // Based on the power level selected adjust the number of spins for the wheel, the more times is has
                    // to rotate with the duration of the animation the quicker the wheel spins.
                    theWheel.animation.spins = 10;

                    // Disable the spin button so can't click again while wheel is spinning.
                    document.getElementById('spin_button').src       = "spin_off.png";
                    document.getElementById('spin_button').className = "";
                    
                    // Reset the rotation angle to less than or equal to 360 so spinning again
                    // works as expected. Setting to modulus (%) 360 keeps the current position.
                    theWheel.rotationAngle = theWheel.rotationAngle % 360;

                    // Begin the spin animation by calling startAnimation on the wheel object.
                    theWheel.startAnimation();

                    // Set to true so that power can't be changed and spin button re-enabled during
                    // the current animation. The user will have to reset before spinning again.
                    wheelSpinning = true;
                }
            }

            // -------------------------------------------------------
            // Function for reset button.
            // -------------------------------------------------------
            function resetWheel()
            {
                theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
                theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
                theWheel.draw();                // Call draw to render changes to the wheel.

                // document.getElementById('pw1').className = "";  // Remove all colours from the power level indicators.
                // document.getElementById('pw2').className = "";
                // document.getElementById('pw3').className = "";

                wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
            }

            // -------------------------------------------------------
            // Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
            // -------------------------------------------------------
            function alertPrize(indicatedSegment)
            {
                // Just alert to the user what happened.
                // In a real project probably want to do something more interesting than this with the result.
                if (indicatedSegment.text == 'LOSE TURN') {
                    alert('Sorry but you loose a turn.');
                    helper='Lose a Turn';
                } else if (indicatedSegment.text == 'Bankrupt') {
                    alert('Oh no, you have gone BANKRUPT!');
                    helper='Bankrupt';

                } else {
                    helper=parseInt(indicatedSegment.text);
                    console.log(helper);

                }
                document.getElementById("vowels").style.display = "hide";

                return false;(reset);
            }
