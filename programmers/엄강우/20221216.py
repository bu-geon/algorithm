class Solution:
    def getMaxLen(self, nums: List[int]) -> int:
        answer = 0
        currentLength = 0
        minusLength = 0
        firstMinus = -1
        for idx, num in enumerate(nums):
            if num > 0:
                currentLength += 1
            elif num == 0:
                currentLength = 0
                minusLength = 0
                firstMinus = -1
            else:
                if firstMinus == -1:
                    firstMinus = idx
                minusLength += 1
                currentLength += 1

            if minusLength % 2 == 0:
                answer = max(answer, currentLength)
            else:
                answer = max(answer, idx - firstMinus)
        
        return answer
