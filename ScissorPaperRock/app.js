var win = 0;
var loss = 0;
var tie = 0;
//Array of options for computer to pick from
var choices = ["s","r","p"];
//Ask user for the choice of player
var playGame = function () {
  var playerchoice = window.prompt("Enter r,p or s");
  // If user pressed Cancel, immediately end function
  if (!playerchoice) {
      window.alert("Good Bye!")
    return;
  }
// make player choice to lower case for easy comaparison
  playerchoice = playerchoice.toLowerCase();
// select a random choice for computer 
  var index = Math.floor(Math.random() * choices.length);
  var computerChoice = choices[index];
  window.alert("computer choose "+ computerChoice + index);
//comapre the computer choice with palyer choice and compute results.
  if (playerchoice===computerChoice){
    tie++;
    window.alert("it's tie!")
  }
  else if (
    (playerchoice === "r" && computerChoice === "s") ||
    (playerchoice === "p" && computerChoice === "r") ||
    (playerchoice === "s" && computerChoice === "p")
  ) {
    win++;
    window.alert("You win!");
  } else {
    loss++;
    window.alert("You Lost!");
  }
//alert the statistics 
  window.alert("Stats: \nWins: " + win + "\nLosses" + loss + "\nties" + tie);
//ask to play again
  var playingAgain = window.confirm("Playing again??");
//if aplying again go back to the start of this function
  if (playingAgain) {
    playGame();
  }
  //else say good bye with thanks
  else{window.alert("Good Bye, thanks for playing")}
};
// start the function at the biginning
playGame();
