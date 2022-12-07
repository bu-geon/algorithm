// 1387. Sort Integers by The Power Value
var getKth = function (lo, hi, k) {
  let powerList = [];

  for (let i = lo; i <= hi; i++) {
    powerList.push({ power: getPowerOf(i), index: i });
  }

  powerList.sort((x, y) => x.power - y.power || x.index - y.index);

  return powerList[k - 1].index;
};

const getPowerOf = (n) => {
  let steps = 0;

  while (n !== 1) {
    steps++;

    if (n % 2 === 0) {
      n /= 2;
      continue;
    }

    n = 3 * n + 1;
  }

  return steps;
};
