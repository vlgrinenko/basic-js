function getEmailDomain(email) {
  const arr = email.split('@');

  return arr[arr.length - 1];
}

console.log(getEmailDomain('very.unusual.@.unusual.com@usual.com'));
// '4a4t'
