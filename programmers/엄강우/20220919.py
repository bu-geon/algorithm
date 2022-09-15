class Solution:
    def twoEggDrop(self, n: int) -> int:
        dp_arr = [0 for _ in range(n+1)]
        def dp(stairs, eggs):
            if dp_arr[stairs] != 0: return dp_arr[stairs]
            if eggs == 1 or stairs <= 1: return stairs
            res = float('inf')
            for i in range(1, stairs+1):
                res = min(res, 1 + max(i-1, dp(stairs-i, eggs)))
            dp_arr[stairs] = res
            return res
        
        return dp(n, 2)