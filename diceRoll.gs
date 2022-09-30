

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
    //Don't need to shuffle if I pick a randomDie from dicebag
  //shuffleArray(players[y].dicebag)
    
    //Select and roll dicetrack.numberOfDice dice from dicebag.
    //This also determines the color of the die being rolled.
  for (let i = 1; i <= players[y].dicetrack.spaces.numberOfDice[0]; i++){
    const randomDie = players[y].dicebag[Math.floor(Math.random() * players[y].dicebag.length)]
    rolledDie = dieRoll(randomDie)
    //Determine the possible sides on the die based on the die color.
    diceTypeSides = diceSides[randomDie];
    
    //Deterine the symbol shown baesd on the die color and the die roll.
    diceTypeSide = diceValues[diceTypeSides[rolledDie]];

    players[y].dicetrack.diceRolled.value.push(diceTypeSide);
    players[y].dicetrack.diceRolled.type.push(diceTypes[randomDie]);

    
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

const diceTypes = [ 
    'white',
    'red', 
    'gold', 
    'blue' 
]
const diceValues = [
    'plank', 
    'cannonball', 
    'powderkeg',
    'bucket',
    'hat',
    'fire',
    'sinking'
]
const diceSides = [
    [0,1,2,3,4,5],
    [1,2,2,4,5,5],
    [0,1,2,3,4,4],
    [1,2,3,4,6,6]
]

function tmp() {
  diceTypeSides = diceTypes.sides[1];
  diceTypeSide = [diceTypes.value[diceTypeSides[2]]];

  console.log(diceTypeSide)
}
