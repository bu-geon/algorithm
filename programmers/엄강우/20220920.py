import collections

class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        nums.sort()
        s1 = 0
        ans = 0
        prefix_sum = 0
        for s2 in range(len(nums)):
            prefix_sum += nums[s2]
            while prefix_sum + k < (s2 - s1 + 1) * nums[s2]:
                prefix_sum -= nums[s1]
                s1 += 1
            ans = max(ans, s2 - s1 + 1)
        return ans