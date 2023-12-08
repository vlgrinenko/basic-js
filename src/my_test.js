function encodeLine(str) {
  let encode = '';
  let count = 1;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      encode += (count > 1 ? count : '') + str[i];
      count = 1;
    }
  }

  return encode;
}

console.log(encodeLine('abbcca'));
// '4a4t'
