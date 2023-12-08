const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case discardNext:
        i += 1;
        break;
      case discardPrev:
        if (i > 0 && arr[i - 2] !== discardNext) {
          newArr.pop();
        }
        break;
      case doubleNext:
        if (i < arr.length - 1) {
          newArr.push(arr[i + 1]);
        }
        break;
      case doublePrev:
        if (i > 0 && arr[i - 2] !== discardNext) {
          newArr.push(arr[i - 1]);
        }
        break;
      default:
        newArr.push(arr[i]);
        break;
    }
  }

  return newArr;
}

module.exports = {
  transform,
};
