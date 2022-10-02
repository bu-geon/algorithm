class Solution:
    def regionsBySlashes(self, grid: List[str]) -> int:
        N = len(grid)
        visit = [[[0 for _ in range(4)] for _ in range(N)] for _ in range(N)]
        
        def dfs(i, j, k):
            visit[i][j][k] = 1
            if k == 0 and 0 <= i - 1 and not visit[i-1][j][2]:
                dfs(i-1, j, 2)
            elif k == 1 and j + 1 < N and not visit[i][j+1][3]:
                dfs(i, j+1, 3)
            elif k == 2 and i + 1 < N and not visit[i+1][j][0]:
                dfs(i+1, j, 0)
            elif k == 3 and j - 1 >= 0 and not visit[i][j-1][1]:
                dfs(i, j-1, 1)
            
            if grid[i][j] != "/":
                if k == 0 and not visit[i][j][1]:
                    dfs(i, j, 1)
                elif k == 1 and not visit[i][j][0]:
                    dfs(i, j, 0)
                elif k == 2 and not visit[i][j][3]:
                    dfs(i, j, 3)
                elif k == 3 and not visit[i][j][2]:
                    dfs(i, j, 2)
            
            if grid[i][j] != "\\":
                if k == 0 and not visit[i][j][3]:
                    dfs(i, j, 3)
                elif k == 1 and not visit[i][j][2]:
                    dfs(i, j, 2)
                elif k == 2 and not visit[i][j][1]:
                    dfs(i, j, 1)
                elif k == 3 and not visit[i][j][0]:
                    dfs(i, j, 0)
        
        
        ans = 0
        for i in range(N):
            for j in range(N):
                for k in range(4):
                    if not visit[i][j][k]:
                        ans += 1
                        dfs(i, j, k)
                    
        return ans