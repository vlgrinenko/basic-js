const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length) {
    throw Error('Invalid date!');
  }

  const month = date.getMonth();
  const spring = [2, 3, 4];
  const summer = [5, 6, 7];
  const autumn = [8, 9, 10];

  if (spring.includes(month)) {
    return 'spring';
  } else if (summer.includes(month)) {
    return 'summer';
  } else if (autumn.includes(month)) {
    return 'autumn';
  } else {
    return 'winter';
  }
}

module.exports = {
  getSeason,
};
