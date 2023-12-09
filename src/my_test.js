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

const xxx = 1345;

console.log(getSumOfDigits(xxx));
