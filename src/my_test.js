function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const repeatedAddition = Array(additionRepeatTimes)
    .fill(String(addition))
    .join(additionSeparator);

  return Array(repeatTimes)
    .fill(String(str) + repeatedAddition)
    .join(separator);
}

console.log(repeater('point', { repeatTimes: 3, separator: '&&&' }));
// output: la+la+la
