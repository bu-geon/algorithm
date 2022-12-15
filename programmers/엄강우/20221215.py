class Solution:
    def rob(self, nums: List[int]) -> int:
        prevRob, prevNotRob = nums[0], 0
        for house in range(1, len(nums)):
            prevRob, prevNotRob = prevNotRob+nums[house], max(prevRob, prevNotRob)
        return max(prevRob, prevNotRob)