// 904. Fruit Into Baskets
var totalFruit = function (tree) {
  const fruitsMap = new Map();

  let [left, maxFruits] = [0, 0];
  for (let right = 0; right < tree.length; right++) {
    const fruit = tree[right];
    fruitsMap.set(fruit, (fruitsMap.get(fruit) || 0) + 1);

    while (fruitsMap.size > 2) {
      const leftFruit = tree[left];
      if (fruitsMap.get(leftFruit) === 1) {
        fruitsMap.delete(leftFruit);
      } else {
        fruitsMap.set(leftFruit, fruitsMap.get(leftFruit) - 1);
      }
      left++;
    }

    maxFruits = Math.max(maxFruits, right - left + 1);
  }

  return maxFruits;
};
