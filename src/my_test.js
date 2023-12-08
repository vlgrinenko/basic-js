function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor((turns * 3600) / turnsSpeed);

  return {
    turns,
    seconds,
  };
}

const disksNumber = 9;
const turnsSpeed = 4308;
console.log(calculateHanoi(disksNumber, turnsSpeed));
