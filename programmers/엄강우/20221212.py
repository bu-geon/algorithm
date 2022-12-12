class Solution:
    def maximumBobPoints(self, numArrows: int, aliceArrows: List[int]) -> List[int]:
        def dfs(idx, bobArrows, aliceArrows, score, numArrows):
            if idx == 0:
                bobArrows.append(numArrows)
                return score, bobArrows
            
            newArray = [arrow for arrow in bobArrows]
            newArray.append(0)
            res = dfs(idx-1, newArray, aliceArrows, score, numArrows)
            if numArrows > aliceArrows[idx]:
                newArray = [arrow for arrow in bobArrows]
                newArray.append(aliceArrows[idx]+1)
                newScore = score + idx
                newNumArrows = numArrows - aliceArrows[idx] - 1
                res2 = dfs(idx-1, newArray, aliceArrows, newScore, newNumArrows)
                if res2[0] > res[0]:
                    res = res2
            return res
        N = len(aliceArrows)
        _, answer = dfs(N-1, [], aliceArrows, 0, numArrows)
        return answer[::-1]

import heapq

class Solution:
    def totalCost(self, costs: List[int], k: int, candidates: int) -> int:
        N = len(costs)
        h = []
        l, r = 0, N - 1
        while l <= r and candidates > 0:
            heapq.heappush(h, [costs[l], l])
            if l != r:
                heapq.heappush(h, [costs[r], r])
            l += 1
            r -= 1
            candidates -= 1

        answer = 0
        for _ in range(k):
            cost, idx = heapq.heappop(h)
            answer += cost
            if l <= r:
                if abs(l - idx) <= abs(r-idx):
                    heapq.heappush(h, [costs[l], l])
                    l += 1
                else:
                    heapq.heappush(h, [costs[r], r])
                    r -= 1
        return answer