// 516. Longest Palindromic Subsequence

var longestPalindromeSubseq = function (s) {
  const dp = Array.from(new Array(s.length), () => new Array(s.length).fill(0));

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }

  for (let difference = 1; difference <= s.length - 1; difference++) {
    for (let start = 0; start <= s.length - 1 - difference; start++) {
      let end = start + difference;

      if (s[start] === s[end]) {
        dp[start][end] = dp[start + 1][end - 1] + 2;
      } else {
        dp[start][end] = Math.max(dp[start][end - 1], dp[start + 1][end]);
      }
    }
  }

  return dp[0][s.length - 1];
};
