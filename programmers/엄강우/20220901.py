import heapq

class Solution:
    def isPossible(self, nums: List[int]) -> bool:
        
        h = []
        for num in nums:
            if not h:
                heapq.heappush(h, [num, 1])
            else:
                while h and num - 1 > h[0][0]:
                    prev_num, length = heapq.heappop(h)
                    
                    if length < 3:
                        return False
                if not h or h[0][0] == num:
                    heapq.heappush(h, [num, 1])
                else:
                    _, length = heapq.heappop(h)
                    heapq.heappush(h, [num, length + 1])
        
        while h:
            _, length = heapq.heappop(h)
            if length < 3:
                return False
            
        return True