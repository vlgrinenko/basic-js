const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayNumbres = n.toString().split('');

  const posibleNumbers = arrayNumbres.map((el, index) => {
    const temp = arrayNumbres.slice();
    temp.splice(index, 1);
    return parseInt(temp.join(''));
  });

  return Math.max(...posibleNumbers);
}

module.exports = {
  deleteDigit,
};
