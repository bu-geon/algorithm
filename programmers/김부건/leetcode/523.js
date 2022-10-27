// 523. Continuous Subarray Sum
var checkSubarraySum = function (nums, k) {
  const remainderSet = new Set();

  let prefixSum = 0;
  let prevRemainder = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    const remainder = prefixSum % k;

    if (remainderSet.has(remainder)) {
      return true;
    }

    remainderSet.add(prevRemainder);
    prevRemainder = remainder;
  }

  return false;
};
