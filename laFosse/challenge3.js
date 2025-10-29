'use strict';

/* Assignment 3: laFosse Academy is hosting a basketball game. The LFA coach is nalysing the scores of different players during a series of games. The score are represended as an array. The coach wants to give extra points to the scores of players who scored an odd number of points, and review these.

The oodScores function takes two arguments: an array of numbers which represents the scores of players, and a number of the extra points to be awarded. Every odd score is awarded the extra points.

The function should add the extra points to the odd scores and return an array of only the new scores.*/

/**
 * Adds extra points to odd scores and returns an array of the updated scores.
 *
 * @param {number[]} scores An array of integers representing player scores.
 * @param {number} extraPoints An integer representing the extra points to award.
 * @returns {number[]} A new array containing only the updated odd scores.
 */
function oddScores(scores, extraPoints) {
  // Create an empty array to store the new scores.
  const newScores = [];

  // Loop through each individual score in the 'scores' array.
  for (const score of scores) {
    // Check if the current score is odd.
    // An odd number divided by 2 will have a remainder other than 0.
    if (score % 2 !== 0) {
      // If the score is odd, add the extra points to it.
      const newScore = score + extraPoints;
      
      // Push the new score into the 'newScores' array.
      newScores.push(newScore);
    }
  }

  // Return the array containing only the updated odd scores.
  return newScores;
}

const playerScores = [15, 20, 21, 18, 19];
const extraPoints = 5;
const updatedScores = oddScores(playerScores, extraPoints);

console.log(updatedScores);
// Expected output: [20, 26, 24]
// Explanation:
// - 15 (odd) + 5 = 20
// - 20 (even) is skipped`
// - 21 (odd) + 5 = 26
// - 18 (even) is skipped
// - 19 (odd) + 5 = 24
// reference: google 