// 835. Image Overlap
var largestOverlap = function (img1, img2) {
  let largestOverlap = 0;
  const img1Numbers = img1.map((row) => parseInt(row.join(''), 2));
  const img2Numbers = img2.map((row) => parseInt(row.join(''), 2));

  const countBits = (n) => {
    let count = 0;
    while (n !== 0) {
      n &= n - 1;
      count++;
    }

    return count;
  };

  let maxBits = 1;
  let len = img1[0].length;
  while (len - 1 > 0) {
    maxBits <<= 1;
    maxBits = maxBits | 1;
    len--;
  }

  const slideLeft = (arr) => {
    return arr.map((n) => (n << 1 > maxBits ? maxBits & (n << 1) : n << 1));
  };

  const slideRight = (arr) => {
    return arr.map((n) => n >> 1);
  };

  const slideUp = (arr) => {
    return [...arr.slice(1), 0];
  };

  const slideDown = (arr) => {
    return [0, ...arr.slice(0, arr.length - 1)];
  };

  const que = [img1Numbers];
  const slideFns = [slideLeft, slideRight, slideUp, slideDown];
  const set = new Set();
  while (que.length > 0) {
    const currentNumbers = que.shift();
    const overlap = currentNumbers.reduce(
      (acc, cur, index) => acc + countBits(cur & img2Numbers[index]),
      0
    );
    largestOverlap = Math.max(largestOverlap, overlap);

    for (const slideFn of slideFns) {
      const nextNumbers = slideFn(currentNumbers);

      const sum = nextNumbers.reduce((sum, cur) => sum + cur);
      if (sum > 0 && !set.has(nextNumbers.join(''))) {
        set.add(nextNumbers.join(''));
        que.push(nextNumbers);
      }
    }
  }

  return largestOverlap;
};

// console.log(
//   largestOverlap(
//     [
//       [1, 1, 0],
//       [0, 1, 0],
//       [0, 1, 0],
//     ],
//     [
//       [0, 0, 0],
//       [0, 1, 1],
//       [0, 0, 1],
//     ]
//   )
// );
