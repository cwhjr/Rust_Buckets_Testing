let players = [];
let floatingPlayers = [];
let activeRollers = [];


class Player{
  constructor() {
    this.health = 9,
    this.sinking = 0,
    this.cannonballs = 1,
    this.planks = 1,
    this.powderkegs = 1,
    this.fire = 0,
    this.reroll = 0,
    this.dicetrack = {
      spaces : {
        numberOfDice : [3,2,2,1,1,1],
        redDiceToAdd : [0,1,1,1,2,3],
      },
      dice : {
        type : [],
        value : []
      },
    },
    this.dicebag = [0,0,0,0,0,0],
    this.rolledDice = {
      type : [],
      value : []
    }
    this.roundsLived = 0;
    this.enemiesSunk = 0;
    this.diceAcquired = {
      red : 0,
      blue : 0,
      gold : 0
    }
    this.unplacedDice = {
      type : [],
      value : []
    }
    this.rolledDiceTotal = {
      type : [],
      value : []
    }
  }
  
  diceRolls(){
    for (let i = 1; i <= this.dicetrack.spaces.numberOfDice[0]; i++){
      const randomDie = this.dicebag[Math.floor(Math.random() * this.dicebag.length)]

      rolledDie = dieRoll(randomDie);
      //playerRolling = floatingPlayers[activeRollers[y]];

      //Determine the possible sides on the die based on the die color.
      diceTypeSides = diceSides[randomDie];
      
      //Deterine the symbol shown baesd on the die color and the die roll.
      diceTypeSide = diceValues[diceTypeSides[rolledDie]];

      this.unplacedDice.value.push(diceTypeSide);
      this.unplacedDice.type.push(diceTypes[randomDie]);

      //Remove thie chosen die from dicebag after rolling it.
      this.dicebag.splice(randomDie,1);
    }
  }

}



function setup(x=2) {
  for (let i = 0; i < x; i++) {
     players[i] = new Player();
     floatingPlayers.push(i);
     y = Math.floor(Math.random() * 5)+1;
     for (let j = 1; j <= y; j++){
       players[i].dicebag.push(Math.floor(Math.random() * 4));
      }
  }
  debugger;
}

// console.log(player.dicetrack.quantity[0]);

