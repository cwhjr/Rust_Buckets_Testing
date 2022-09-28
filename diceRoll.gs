function play(numberOfPlayers = 2) {
  setup(numberOfPlayers);
  for (let x = 0; x < players.length; x++){
    diceRolls(x);
    console.log(players[x].dicetrack.spaces.numberOfDice[0]);
    console.log(players[x].dicebag);
    debugger;
  }
}

/**
 * Rolls a single die. Used internally.
 */
  
function dieRoll() {
      let roll = Math.floor(Math.random()*6 + 1);
      return roll;
}

//Rolls each player's next allotment of dice.
//Stores the value of the rolls in player.dicetrack.dicerolled.value.
//Stores the type of die rolled in player.dicetrack.dicerolled.type.
function diceRolls(y) {
    
    //Shuffle each player's dicebag before selecting dice.
  shuffleArray(players[y].dicebag)
    
    //Select and roll dicetrack.numberOfDice dice from dicebag.
  for (let i = 1; i <= players[y].dicetrack.spaces.numberOfDice[0]; i++){
    const randomDie = players[y].dicebag[Math.floor(Math.random() * players[y].dicebag.length)]
    players[y].dicetrack.diceRolled.value.push(dieRoll());
    players[y].dicetrack.diceRolled.type.push(players[y].dicebag[0]);
    
    //Remove a die from dicebag after rolling it.
    players[y].dicebag.shift();
  }

  //Increment space.numberOfDice AFTER rolling appropriate number of dice.
  players[y].dicetrack.spaces.numberOfDice.shift();

  // console.log(players[y].dicetrack.diceRolled.value);
  // return rolls;
  
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function diceConversion() {
  let 
}


