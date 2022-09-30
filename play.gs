function play(numberOfPlayers = 2) {
  setup(numberOfPlayers);
  playRound();
}


function playRound(){
  for (let x = 0; x < floatingPlayers.length; x++){
    activeRollers.push(floatingPlayers[x]);
    diceRolls(x);
    debugger;
}
}