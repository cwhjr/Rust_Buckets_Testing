

/**
 * Rolls a single die. Used internally.
 */
  
function dieRoll(randomDie) {
      let roll = Math.floor(Math.random()*6 + Math.floor((randomDie/4)));
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
    players[y].dicetrack.diceRolled.value.push(diceTypes.value[dieRoll(randomDie)]);
    players[y].dicetrack.diceRolled.type.push(diceTypes.type[randomDie]);
    
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

let diceTypes ={
  type : [
    'white',
    'red',
    'gold',
    'blue'
  ],
  value : [
    'plank', 
    'cannonball', 
    'powderkeg',
    'bucket',
    'hat',
    'fire',
    'sinking'
  ]
}


