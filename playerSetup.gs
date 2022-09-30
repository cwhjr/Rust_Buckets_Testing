let players = [];
let floatingPlayers = [];
let activeRollers = [];

class player{
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
        redDiceToAdd : [1,1,1,2,3],
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
    this.rolledDiceTotal = {
      type : [],
      value : []
    }
  }
}



function setup(x=2) {
  for (let i = 0; i < x; i++) {
     players[i] = new player();
     floatingPlayers.push(i);
     y = Math.floor(Math.random() * 5)+1;
     for (let j = 1; j <= y; j++){
       players[i].dicebag.push(Math.floor(Math.random() * 4));
      }
  }
  debugger;
}

// console.log(player.dicetrack.quantity[0]);

