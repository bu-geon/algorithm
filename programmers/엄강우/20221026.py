class Solution:
    def minPathCost(self, grid: List[List[int]], moveCost: List[List[int]]) -> int:
        N, M = len(grid), len(grid[0])
        path = [[float('inf') for _ in range(M)] for _ in range(N)]
        
        for i in range(M):
            path[0][i] = grid[0][i]
        
        for i in range(N-1):
            for j in range(M):
                for k in range(M):
                    path[i+1][k] = min(path[i][j] + grid[i+1][k] + moveCost[grid[i][j]][k], path[i+1][k])
        
        return min(path[N-1])
            