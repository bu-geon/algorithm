import collections

def solution(priorities, location):
    n = len(priorities)
    sorted_priorities = sorted(priorities, reverse=True)
    sorted_idx = 0
    
    que = collections.deque([[priorities[i], i] for i in range(n)])
    while sorted_idx < n:
        num, idx = que.popleft()
        if num >= sorted_priorities[sorted_idx]:
            if idx == location:
                return sorted_idx + 1
            sorted_idx += 1
        else:
            que.append([num, idx])
    
    return n