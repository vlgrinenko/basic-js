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

const fakeDate = {
  toString() {
    return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date',
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

console.log(getSeason(fakeDate));
// console.log(fakeDate.hasOwnProperty('getTime'));
