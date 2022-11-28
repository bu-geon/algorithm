const MOD = 10 ** 9 + 7;

var sumSubarrayMins = function (arr) {
  const stack = [-1];
  arr.push(0);

  let answer = 0;
  for (let end = 0; end < arr.length; end++) {
    while (arr[end] < arr[stack.at(-1)]) {
      const i = stack.pop();
      const start = stack[stack.length - 1];
      const left = i - start,
        right = end - i;
      answer += (left * arr[i] * right) % MOD;
    }

    stack.push(end);
  }

  return answer % MOD;
};
