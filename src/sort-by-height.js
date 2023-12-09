const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortByHeights = arr.filter((el) => el !== -1).sort((a, b) => a - b);

  const indexesMinusOne = arr
    .map((el, index) => (el === -1 ? index : undefined))
    .filter((index) => index !== undefined);

  indexesMinusOne.forEach((index) => {
    sortByHeights.splice(index, 0, -1);
  });

  return sortByHeights;
}

module.exports = {
  sortByHeight,
};
