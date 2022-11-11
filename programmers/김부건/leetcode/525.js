// 525. Contiguous Array
var findMaxLength = function (nums) {
  const prefix = new Map([[0, -1]]);
  let count = 0;

  return nums.reduce((maxLength, current, i) => {
    current === 0 ? count-- : count++;

    if (prefix.has(count)) {
      return Math.max(maxLength, i - prefix.get(count));
    }

    prefix.set(count, i);

    return maxLength;
  }, 0);
};
