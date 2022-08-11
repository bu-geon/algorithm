def solution(distance, scope, times):
    answer = distance
    for idx in range(len(scope)):
        start = min(scope[idx])
        end = max(scope[idx])
        for i in range(start, end+1):
            if 0 < i % sum(times[idx]) <= times[idx][0]:
                answer = min(answer, i)

    return answer