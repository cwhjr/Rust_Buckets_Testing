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
        diceRolled : {
          type : [],
          value : []
        },
      },
      this.dicebag = [0,0,0,0,0,0]
    }
}

let players = [];
function setup(x) {
  for (let i = 0; i < x; i++) {
     players[i] = new player();
  }
  // player1 = new player();
  for (let i = 0; i < x; i++) {
    console.log(players[i].dicetrack.spaces.numberOfDice[0]);
  }
  // debugger;
}

// console.log(player.dicetrack.quantity[0]);

