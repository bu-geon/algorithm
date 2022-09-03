class Solution:
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:
        start = 1
        end = 10 ** 6
        
        while start < end:
            mid = (start + end) // 2
            result = sum([x // mid if x % mid == 0 else x // mid + 1 for x in nums])
            if result > threshold:
                start = mid + 1
            else:
                end = mid
        
        return end
        