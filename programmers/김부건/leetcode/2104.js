var subArrayRanges = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let smallest = Infinity;
    let largest = -Infinity;
    for (let j = i; j < nums.length; j++) {
      smallest = Math.min(nums[j], smallest);
      largest = Math.max(nums[j], largest);

      sum += largest - smallest;
    }
  }

  return sum;
};
