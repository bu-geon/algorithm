class Solution:
    def findBall(self, grid: List[List[int]]) -> List[int]:
        N = len(grid[0])
        M = len(grid)
        
        ans = []
        for i in range(N):
            x, y = 0, i
            while x != M:
                if y + 1 < N and grid[x][y+1] == 1 and grid[x][y] == 1:
                    y += 1
                    x += 1
                elif y - 1 >= 0 and grid[x][y-1] == -1 and grid[x][y] == -1:
                    y -= 1
                    x += 1
                else:
                    ans.append(-1)
                    break
            else:
                ans.append(y)
        return ans