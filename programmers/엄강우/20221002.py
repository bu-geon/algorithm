class Solution:
    def numRollsToTarget(self, n: int, k: int, target: int) -> int:   
        @lru_cache(maxsize=None)
        def dfs(num, cnt):
            if cnt == 1:
                if 1 <= num <= k:
                    return 1
                else:
                    return 0
            res = 0
            for i in range(1, k+1):
                if num-i < 0: continue
                res += dfs(num-i, cnt-1)
                res %= (10 ** 9 + 7)
            return res
        
        return dfs(target, n)