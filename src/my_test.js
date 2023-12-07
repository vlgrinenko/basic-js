const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string') {
    return false;
  }

  const activity = parseFloat(sampleActivity);

  // if (isNaN(activity) || activity <= 0 || activity >= MODERN_ACTIVITY) {
  //   return false;
  // }

  const RATE = 0.693 / HALF_LIFE_PERIOD;
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / RATE);

  return age;
}

//dateSample('1') => 22387
console.log(dateSample('1'));
