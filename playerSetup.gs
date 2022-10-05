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
    },
    this.floating = true,
    this.rolling = true
  }
  
  diceRolls() {
    for (let i = 0; i < 6; i++){
      let diceToAdd = this.dicetrack.spaces.redDiceToAdd[i]
      for (let d = 1; d <= diceToAdd; d++){
        this.dicebag.push('1')
      }
      for (let j = 1; j <= this.dicetrack.spaces.numberOfDice[i]; j++){
        // debugger;
        const randomDie = this.dicebag[Math.floor((Math.random() * this.dicebag.length))]
        // debugger;
        let rolledDie = this.dieRoll(randomDie);

        //Determine the possible symbols on the die based on the die color.
        let diceTypeSides = diceSides[randomDie];
        
        //Deterine the symbol rolled based on the die color and the die roll.
        let diceTypeSide = diceValues[diceTypeSides[rolledDie]];

        this.unplacedDice.value.push(diceTypeSide);
        this.unplacedDice.type.push(diceTypes[randomDie]);

        //Remove the chosen die from dicebag after rolling it.
        this.dicebag.splice(randomDie,1);
      }
      this.sortUnplacedDice(this.unplacedDice.type, this.unplacedDice.value);
    }
  }
  dieRoll(randomDie) {
        let roll = Math.floor(Math.random()*6 + Math.floor((randomDie/4)));
        // debugger;
        return roll;     
  } 
  sortUnplacedDice(dieType = [], dieValue = []) {
    // fire = 0
    // let unplacedDice = {
    //   value : ['bucket','fire','cannonball'],
    //   type : ['white', 'green', 'red']
    // }
    
    let diceCount = dieType.length

    for(let i = 0; i < diceCount; i++){
      let currentDie = {
        type : dieType[i],
        value : dieValue[i]
      }
      if(currentDie.value == 'fire' && this.fire == 0) { 
        rearrangeDice(dieValue, 0, i, dieType);
      } else if (currentDie.value == 'fire' && this.fire != 0){
        rearrangeDice(dieType, diceCount, i, dieValue)
      }
    }
    debugger;
    for (let i = 0; i < diceCount; i++){
      this.dicetrack.dice.type.push(dieType[0]);
      this.dicetrack.dice.value.push(dieValue[0]);
      this.unplacedDice.type.shift(0);
      this.unplacedDice.value.shift(0)
    }
    debugger;
  }
      
  rearrangeDice(x,y,z,a){
    [x,y] = [y,x];
    [z,a] = [a,z]
  } 
  resolveDiceTrack() {}
}


  

function setup(x=2) {
  for (let i = 0; i < x; i++) {
     players[i] = new Player();
     floatingPlayers.push(i);
  //    y = Math.floor(Math.random() * 5)+1;
  //    for (let j = 1; j <= y; j++){
  //      players[i].dicebag.push(Math.floor(Math.random() * 4));
  //     }
  // }
  // debugger;
}
}

// console.log(player.dicetrack.quantity[0]);