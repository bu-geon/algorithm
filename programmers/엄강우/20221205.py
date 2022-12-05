class Solution:
    def getKth(self, lo: int, hi: int, k: int) -> int:
        powerDict = {1: 0}
        def dfs(num):
            if num in powerDict:
                return powerDict[num]
            if num & 1:
                powerDict[num] = dfs(num * 3 + 1) + 1
            else:
                powerDict[num] = dfs(num // 2) + 1
            return powerDict[num]
        
        value = []
        for num in range(lo, hi+1):
            cnt = dfs(num)
            value.append([cnt, num])
        value.sort()
        return value[k-1][1]

class Solution:
    def chalkReplacer(self, chalk: List[int], k: int) -> int:
        prefix = [c for c in chalk]
        for i in range(1, len(chalk)):
            prefix[i] += prefix[i-1]
        
        k %= prefix[-1]
        start = 0
        end = len(chalk) - 1
        while start < end:
            mid = (start + end) // 2
            if prefix[mid] <= k:
                start = mid + 1
            elif prefix[mid] > k:
                end = mid
        return start
