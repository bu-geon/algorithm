def solution(order):
    stack = []
    answer = 0
    order_idx = 0

    for i in range(1, len(order)+1):
        if order[order_idx] == i:
            order_idx += 1
            answer += 1
        else:
            if order[order_idx] < i:
                break
            stack.append(i)
        
        while stack and order[order_idx] == stack[-1]:
            stack.pop()
            order_idx += 1
            answer += 1

    return answer