// 198. House Robber
var rob = function (nums) {
  const dp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const money = nums[i];
    dp[i] = Math.max(dp[i - 1], (dp[i - 2] || 0) + money);
  }

  return dp.at(-1);
};
