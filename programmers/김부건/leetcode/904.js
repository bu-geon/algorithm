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

// var totalFruit = function (tree) {
//   let [first, second, third] = [undefined, undefined, undefined];

//   let [left, maxFruits] = [0, 0];
//   for (let right = 0; right < tree.length; right++) {
//     const fruit = tree[right];

//     if (first === undefined || fruit === first.fruit) {
//       first = { fruit: fruit, lastIndex: right };
//     } else if (second === undefined || fruit === second.fruit) {
//       second = { fruit: fruit, lastIndex: right };
//     } else {
//       if (first.lastIndex >= second.lastIndex) {
//         left = second.lastIndex + 1;
//         second = { fruit: fruit, lastIndex: right };
//       } else {
//         left = first.lastIndex + 1;
//         first = { fruit: fruit, lastIndex: right };
//       }
//     }

//     maxFruits = Math.max(maxFruits, right - left + 1);
//   }

//   return maxFruits;
// };
