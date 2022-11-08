class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        prefixSumDict = {0: -1}
        ans = 0
        count = 0
        for idx, num in enumerate(nums):
            count += 1 if num==1 else -1
            if count in prefixSumDict:
                ans = max(ans, idx - prefixSumDict[count])
            else:
                prefixSumDict[count] = idx
        return ans  