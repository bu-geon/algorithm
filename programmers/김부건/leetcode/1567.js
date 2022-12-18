// 1567. Maximum Length of Subarray With Positive Product
var getMaxLen = function (nums) {
  let positive = 0,
    negative = 0;
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      positive = 0;
      negative = 0;
    }

    if (nums[i] > 0) {
      positive += 1;
      negative = negative === 0 ? 0 : negative + 1;
    }

    if (nums[i] < 0) {
      [positive, negative] = [negative === 0 ? 0 : negative + 1, positive + 1];
    }

    longest = Math.max(longest, positive);
  }

  return longest;
};
