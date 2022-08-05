def solution(n, cores):
    start_time = 0
    end_time = n * 50000
    target = 0
    
    while target > n or end_time - start_time != 1:
        operation_cnt = 0
        mid_time = (start_time + end_time) // 2
        last_idx = -1
        last_time = 0
        for idx, core in enumerate(cores):
            cnt = (mid_time // core) + 1
            time = (cnt - 1) * core
            if last_time <= time:
                last_time = time
                last_idx = idx
    
            operation_cnt += cnt
            if operation_cnt > n:
                break
        if operation_cnt > n:
            end_time = mid_time
        elif operation_cnt < n:
            start_time = mid_time
        else:
            return last_idx + 1
        target = operation_cnt

    start_time += 1
    for idx in range(len(cores)):
            if start_time % cores[idx] == 0:
                target += 1
            if target == n:
                return idx + 1