class Solution:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        N, M = len(maze), len(maze[0])
        direction = [[0, 1], [1, 0], [-1, 0], [0, -1]]
        maze[entrance[0]][entrance[1]] = "+"
        que = [[entrance[0], entrance[1], 0]]
        while que:
            x, y, way = que.pop(0)
            for dx, dy in direction:
                if not (0 <= x+dx < N and 0 <= y+dy < M): continue
                if maze[x+dx][y+dy] == ".":
                    if x+dx == 0 or x+dx == N-1 or y+dy ==0 or y+dy == M-1:
                        return way + 1
                    else:
                        maze[x+dx][y+dy] = "+"
                        que.append([x+dx, y+dy, way+1])
        
        return -1
                    
