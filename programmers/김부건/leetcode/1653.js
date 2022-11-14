// 1653. Minimum Deletions to Make String Balanced
var minimumDeletions = function (s) {
  let count = 0;
  const stack = [];

  for (const c of s) {
    if (stack.length > 0 && stack.at(-1) > c) {
      count++;
      stack.pop();
      continue;
    }

    stack.push(c);
  }

  return count;
};
