const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  while (n >= 10) {
    let newN = 0;
    n = n.toString().split('');

    for (let i = 0; i < n.length; i += 1) {
      newN += parseInt(n[i], 10);
    }
    n = newN;
  }

  return n;
}

module.exports = {
  getSumOfDigits,
};
