function getCommonCharacterCount(s1, s2) {
  const array1 = s1.split('');
  const array2 = s2.split('');

  const matchesArray = array1.filter((char) => {
    const indexInArray2 = array2.indexOf(char);

    if (indexInArray2 !== -1) {
      array2.splice(indexInArray2, 1);
      return true;
    }

    return false;
  });

  return matchesArray.length;
}

console.log(getCommonCharacterCount('aabcc', 'adcaa'));
