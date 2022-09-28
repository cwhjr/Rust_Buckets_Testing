function play(numberOfActivePlayers = 2) {
  setup(numberOfActivePlayers);
  for (let x = 0; x < players.length; x++){
    diceRolls(x);
    debugger;
  }
}