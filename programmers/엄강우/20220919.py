## 첫번째
class Solution:
    def twoEggDrop(self, n: int) -> int:
        dp_arr = [0 for _ in range(n+1)]
        def dp(stairs, eggs):
            if dp_arr[stairs] != 0: return dp_arr[stairs]
            if eggs == 1 or stairs <= 1: return stairs
            res = float('inf')
            for i in range(1, stairs+1):
                res = min(res, 1 + max(i-1, dp(stairs-i, eggs)))
            dp_arr[stairs] = res
            return res
        
        return dp(n, 2)

## 두번째
class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visit = [0 for _ in range(len(rooms))]
        visit[0] = 1
        que = [0]
        
        answer = 1
        while que and answer != len(rooms):
            room = que.pop(0)
            for next_room in rooms[room]:
                if not visit[next_room]:
                    visit[next_room] = 1
                    que.append(next_room)
                    answer += 1
                    
        return answer == len(rooms)