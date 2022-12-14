// 213. House Robber II
var rob = function (nums) {
  if (nums.length < 4) return Math.max(...nums);

  const targetHouses1 = nums.slice(0, nums.length - 1);
  const targetHouses2 = nums.slice(1);

  const rob = (houses) => {
    let amount1 = 0,
      amount2 = 0;

    houses.forEach((money) => {
      [amount1, amount2] = [amount2, Math.max(amount1 + money, amount2)];
    });

    return amount2;
  };

  return Math.max(rob(targetHouses1), rob(targetHouses2));
};
