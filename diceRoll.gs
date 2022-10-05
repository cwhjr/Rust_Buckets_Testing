//Rolls a single die.  
function dieRoll(randomDie) {
      let roll = Math.floor(Math.random()*6 + Math.floor((randomDie/4)));
      //debugger;
      return roll;     
}

//Rolls each player's next allotment of dice.
//Stores the value of the rolls in player.dicetrack.dicerolled.value.
//Stores the type of die rolled in player.dicetrack.dicerolled.type.
function diceRolls(y) {
    
    //Randomly select and roll dicetrack.numberOfDice dice from dicebag.
    //This also determines the color of the die being rolled.
  for (let i = 1; i <= players[floatingPlayers[y]].dicetrack.spaces.numberOfDice[0]; i++){
    const randomDie = players[y].dicebag[Math.floor(Math.random() * players[y].dicebag.length)]

    rolledDie = dieRoll(randomDie);
    playerRolling = floatingPlayers[activeRollers[y]];

    //Determine the possible sides on the die based on the die color.
    diceTypeSides = diceSides[randomDie];
    
    //Deterine the symbol shown baesd on the die color and the die roll.
    diceTypeSide = diceValues[diceTypeSides[rolledDie]];

    playerRolling.rolledDie.value.push(diceTypeSide);
    playerRolling.rolledDie.type.push(diceTypes[randomDie]);
    //sortRolledDice(y,players[y].rolledDice.value,players[y].rolledDice.type);

    //Remove a die from dicebag after rolling it.
    players[y].dicebag.shift();
  }

  //Increment space.numberOfDice AFTER rolling appropriate number of dice.
  players[y].dicetrack.spaces.numberOfDice.shift();
debugger;
  // console.log(players[y].dicetrack.diceRolled.value);
  // return rolls;
  
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



rearrangeDice 

function tmp() {
  diceTypeSides = diceTypes.sides[1];
  diceTypeSide = [diceTypes.value[diceTypeSides[2]]];

  console.log(diceTypeSide)
}
