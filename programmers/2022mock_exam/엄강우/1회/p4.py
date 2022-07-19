def checkTarget(rect, target):
    for i in range(len(rect)):
        if rect[i] != target[i]:
            return False
    
    return True

def operation(rect, idx, N, M):
    if idx < N:
        for i in range(M):
            if rect[idx] & (1 << i):
                rect[idx] -= 1 << i
            else:
                rect[idx] += 1 << i
        
    else:
        idx -= N
        for i in range(N):
            if rect[i] & (1 << idx):
                rect[i] -= 1 << idx
            else:
                rect[i] += 1 << idx
    
    return rect

def dfs(rect, target, cnt, idx, N, M):
    if checkTarget(rect, target):
        return cnt
    if idx == N + M:
        return N + M + 1
    result = N + M + 1
    result = min(result, dfs([x for x in rect], target, cnt, idx+1, N, M))
    result = min(result, dfs(operation([x for x in rect], idx, N, M), target, cnt+1, idx+1, N, M))

    return result

def solution(beginning, target):
    N = len(beginning)
    M = len(beginning[0])

    rect = [0 for _ in range(N)]
    newTarget = [0 for _ in range(N)]

    for i in range(N):
        for j in range(M):
            if beginning[i][j] == 1:
                rect[i] += 1 << j
            if target[i][j] == 1:
                newTarget[i] += 1 << j 

    answer = dfs(rect, newTarget, 0, 0, N, M)
    return answer if N + M + 1 > answer else -1