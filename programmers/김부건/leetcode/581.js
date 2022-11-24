// 581. Shortest Unsorted Continuous Subarray
var findUnsortedSubarray = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  let start = 0;
  let end = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sorted[i]) {
      start = i;
      break;
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== sorted[i]) {
      end = i + 1;
      break;
    }
  }

  return end - start;
};
