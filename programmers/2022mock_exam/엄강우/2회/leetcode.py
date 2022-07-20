class Solution:
    def longestSubsequence(self, s: str, k: int) -> int:
        answer = 0
        value = 0
        n = len(s)
        for idx in range(n-1, -1, -1):
            if s[idx] == "1":
                if value + 2 ** (n-idx-1) <= k:
                    value += 2 ** (n-idx-1)
                    answer += 1
            else:
                answer += 1
        
        return answer