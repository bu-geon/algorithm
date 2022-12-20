class Solution:
    def longestPalindrome(self, s: str) -> str:
        L = len(s)
        maxLength = 1
        start = 0
        dp = {}

        for length in range(2, L+1):
            i = 0
            while i <= L - length:
                j = i + length - 1
                if s[i] == s[j] and ((i+1, j-1) in dp or length <= 3):
                    maxLength = length
                    dp[(i, j)] = 1
                    start = i
                i += 1
        return s[start:start+maxLength]

import heapq

class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        answer = [0 for _ in range(len(temperatures))]
        h = []
        for idx, temp in enumerate(temperatures):
            while h and h[0][0] < temp:
                prevTemp, prevIdx = heapq.heappop(h)
                answer[prevIdx] = idx - prevIdx
            heapq.heappush(h, [temp, idx])
        return answer

class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        for ast in asteroids:
            if ast > 0:
                stack.append(ast)
            else:
                while stack and stack[-1] > 0:
                    newAst = stack.pop()
                    if newAst + ast == 0:
                        break
                    elif newAst + ast > 0:
                        stack.append(newAst)
                        break
                else:
                    stack.append(ast)
        return stack 