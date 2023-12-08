function isMAC48Address(n) {
  const groups = n.split('-');
  let isMac = true;

  if (groups.length !== 6) {
    return false;
  }

  groups.forEach((group) => {
    if (group.length !== 2 || !/^[0-9a-fA-F{2}]/.test(group)) {
      isMac = false;
    }
  });

  return isMac;
}

console.log(isMAC48Address('00-1B-63-84-45-E6'));
