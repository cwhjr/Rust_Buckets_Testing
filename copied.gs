
// // Returns a random value between 1 and 6 (inclusive).
// function rollADie() {
//   let result = Math.floor(Math.random()*6 + 1);
//   return result;
// }

// // Rolls the given number of dice and returns the results in an array.
// function rollSomeDie(numberOfDice) {
//   // Take care of some invalid input.
//   if (numberOfDice < 1 || !numberOfDice) {
//     numberOfDice = 1;
//   }

//   let results = [];
//   // Keep rolling until you've reached the specified number of dice.
//   while (results.length < numberOfDice) {
//     results.push(rollADie());
//   }
//   return results;
// }

// // Returns the highest number of equal dice, in the array of provided dice results.
// function countEquals(dice) {
//   // An array that keeps track of how many 1's, 2's and so on that we have.
//   let counter = [0, 0, 0, 0, 0, 0];

//   // Check each die result and increase the proper place in the counter array.
//   for (let i in dice) {
//     let result = dice[i];
//     counter[result-1]++;
//   }

//   // Find the maximum value in the counter array.
//   let max = 0;
//   for (let i in counter) {
//     max = Math.max(max, counter[i]);
// //    if (counter[i] > max) {
// //      max = counter[i];
// //    }
//   }

//   return max;
// }

// function tmp() {
//   let dice = rollSomeDie(20);
//   Logger.log(countEquals(dice));

// }