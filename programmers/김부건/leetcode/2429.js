// 2429. Minimize XOR
var minimizeXor = function (num1, num2) {
  const countOne = (n) => {
    let count = 0;
    while (n !== 0) {
      n &= n - 1;
      count++;
    }

    return count;
  };

  let one1 = countOne(num1);
  let one2 = countOne(num2);

  if (one1 == one2) return num1;
  if (one1 > one2) {
    let left = one1 - one2;
    while (left-- > 0) {
      num1 &= num1 - 1;
    }
  }
  if (one1 < one2) {
    let left = one2 - one1;
    let addBit = 1;
    while (left > 0) {
      if ((num1 & addBit) === 0) {
        num1 |= addBit;
        left--;
      }
      addBit <<= 1;
    }
  }

  return num1;
};
