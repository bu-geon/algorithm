class Solution:
    def twoSum(self, nums, target):
        target_dict = {}
        for idx, num in enumerate(nums):
            if target - num in target_dict:
                return [target_dict[target-num], idx]
            target_dict[num] = idx