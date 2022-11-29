class Solution:
    def sumSubarrayMins(self, arr: List[int]) -> int:
        mod = 10 ** 9 + 7
        stack = []
        ans = 0
        for idx, num in enumerate(arr):
            while stack and arr[stack[-1]] >= num:
                targetIdx = stack.pop()
                if stack:
                    ans += (targetIdx-stack[-1]) * (idx - targetIdx) * arr[targetIdx]
                    ans %= mod
                else:
                    ans += (targetIdx+1) * (idx - targetIdx) * arr[targetIdx]
                    ans %= mod
            if not stack or arr[stack[-1]] < num:
                stack.append(idx)
        while stack:
            targetIdx = stack.pop()
            if stack:
                ans += (targetIdx-stack[-1]) * (len(arr) - targetIdx) * arr[targetIdx]
                ans %= mod
            else:
                ans += (targetIdx+1) * (len(arr) - targetIdx) * arr[targetIdx]
                ans %= mod
        
        return ans
