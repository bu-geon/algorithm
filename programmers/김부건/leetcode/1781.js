// 1781. Sum of Beauty of All Substrings
var beautySum = function (s) {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const counts = Array.from({ length: 26 }, () => 0);
    for (let j = i; j < s.length; j++) {
      const index = s.charCodeAt(j) - 'a'.charCodeAt(0);
      counts[index]++;
      most = Math.max(...counts);
      least = Math.min(...counts.filter((count) => count !== 0));
      sum += most - least;
    }
  }

  return sum;
};
