class Solution:
    def longestSubsequence(self, s: str, k: int) -> int:
        while int(s, 2) > k:
            s = s.replace("1", "", 1)
        
        return len(s)