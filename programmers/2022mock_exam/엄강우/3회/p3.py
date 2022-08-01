import collections

def solution(n, roads, sources, destination):
    answer = [-1 for _ in range(len(sources))]
    visit = [0 for _ in range(n+1)]

    departure = len(sources)

    road_dict = {}
    for i in range(len(sources)):
        road_dict[sources[i]] = i
    
    road_to_road = [[] for _ in range(n+1)]
    for x, y in roads:
        road_to_road[x].append(y)
        road_to_road[y].append(x)

    que = collections.deque([[destination, 0]])
    visit[destination] = 1

    while que:
        num, cnt = que.popleft()
        if num in road_dict:
            departure -= 1
            answer[road_dict[num]] = cnt
        
        if departure == 0:
            return answer

        for nextLoca in road_to_road[num]:
            if visit[nextLoca] == 0:
                visit[nextLoca] = 1
                que.append([nextLoca, cnt+1])

    return answer