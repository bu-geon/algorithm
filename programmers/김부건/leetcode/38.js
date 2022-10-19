// 38. Count and Say
var countAndSay = function (n) {
  if (n == 1) return '1';

  return countAndSay(n - 1)
    .match(/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g)
    .reduce((acc, cur) => `${acc}${cur.length}${cur[0]}`, '');
};
