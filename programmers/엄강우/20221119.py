class Solution:
    def calculAnswer(self, nums):
        N = len(nums)
        ans = 0
        stack = []
        for i in range(len(nums)):
            while stack and nums[stack[-1]] > nums[i]:
                idx = stack.pop()
                if stack:
                    ans -= (i - idx) * (idx-stack[-1]) * nums[idx]
                else:
                    ans -= (i - idx) * (idx + 1) * nums[idx]
            stack.append(i)
        while stack:
            idx = stack.pop()
            if stack:
                ans -= (N-idx) * (idx - stack[-1]) * nums[idx]
            else:
                ans -= (N-idx) * (idx + 1) * nums[idx]
        return ans

    def subArrayRanges(self, nums: List[int]) -> int:
        minusNums = [-num for num in nums]
        return self.calculAnswer(nums) + self.calculAnswer(minusNums)