class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        if len(s) == 1: return 1
        
        @lru_cache(maxsize=None)
        def dfs(ss):
            res = 0
            for alpha in set(ss):
                l, r = ss.find(alpha), ss.rfind(alpha)
                res = max(res, 1 if l==r else 2+dfs(ss[l+1:r]))
            return res
    
        return dfs(s)
                        
                