export function rand(max) {
  return Math.floor(Math.random()*max);
}

export function weighted(weights) {
  const sum = weights.reduce((acc, curr) => acc + curr.w, 0);
  let rollingTotal = 0;
  for (let w=0; w<weights.length; w++) {
    const curr = weights[w];
    rollingTotal += curr.w;
    curr.ceiling = rollingTotal / sum;
  }

  return () => {
    const group = Math.random();
    let index = 0;
    let match = null;
    while (match == null && index < weights.length) {
      if (group <= weights[index].ceiling) {
        match = weights[index];
      } else {
        index++;
      }
    }
    return match;
  };
}

export function weightedRandomNumberGenerator(weights) {
  const fn = weighted(weights);
  return () => {
    const match = fn();
    return match.range[0] + rand(match.range[1]-match.range[0]);
  };
}
