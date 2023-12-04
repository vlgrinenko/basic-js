function deleteDigit(n) {
  const arrayNumbres = n.toString().split('');

  const posibleNumbers = arrayNumbres.map((el, index) => {
    const temp = arrayNumbres.slice();
    temp.splice(index, 1);
    return parseInt(temp.join(''));
  });

  return Math.max(...posibleNumbers);
}

console.log(deleteDigit(1001));
