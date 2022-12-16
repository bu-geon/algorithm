class Solution:
    def longestPalindrome(self, s: str) -> str:
        L = len(s)
        maxLength = 1
        start = 0
        dp = {}

        for length in range(2, L+1):
            i = 0
            while i <= L - length:
                j = i + length - 1
                if s[i] == s[j] and ((i+1, j-1) in dp or length <= 3):
                    maxLength = length
                    dp[(i, j)] = 1
                    start = i
                i += 1
        return s[start:start+maxLength]