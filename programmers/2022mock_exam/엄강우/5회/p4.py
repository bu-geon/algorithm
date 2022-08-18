import sys
sys.setrecursionlimit(1000000)

def dfs(lighthouse_way, lh, visit):
    visit[lh] = 1
    on, off = 1, 0
    next_houses = [idx for idx in lighthouse_way[lh] if visit[idx] == 0]
    if not next_houses:
        return 1, 0
    for next_house in next_houses:
        next_on, next_off = dfs(lighthouse_way, next_house, visit)
        on += min(next_on, next_off)
        off += next_on
    
    return on, off

def solution(n, lighthouse):
    visit = [0 for _ in range(n+1)]
    lighthouse_way = [[] for _ in range(n+1)]

    for l1, l2 in lighthouse:
        lighthouse_way[l2].append(l1)
        lighthouse_way[l1].append(l2)

    return min(dfs(lighthouse_way, 1, visit))