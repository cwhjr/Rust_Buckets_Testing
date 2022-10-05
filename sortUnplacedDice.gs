// function sortUnplacedDice() {
//   fire = 0
//   // let unplacedDice = {
//   //   value : ['bucket','fire','cannonball'],
//   //   type : ['white', 'green', 'red']
//   // }
  
//   let diceCount = unplacedDice.value.length

//   for(i=0; i<diceCount; i++){
//     let currentDie = {
//       type : unplacedDice.type[i],
//       value : unplacedDice.value[i]
//     }
//     debugger;
//     if(currentDie.value == 'fire' && fire == 0) { 
//       rearrangeDice(this.unplacedDice.value, 0, i, unplacedDice.type);
//     } else if (currentDie.value == 'fire' && fire != 0){
//       rearrangeDice(unplacedDice.type, diceCount, i,unplacedDice.value)
//     }
//     else {
//     }
//   }
//   debugger;
// }





function selectRandom(v=6){
  Math.floor(Math.random()*v)
}
      
function rearrangeDice(arr1,x,y,arr2 = []){
  [arr1[x],arr1[y]] = [arr1[y],arr1[x]];
  if(arr2.length != 0){
    [arr2[x],arr2[y]] = [arr2[y],arr2[x]];
  }
  debugger;
} 

