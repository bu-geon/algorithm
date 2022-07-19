def solution(X, Y):
    answer = ''
    sorted_X = sorted(X, reverse=True)
    sorted_Y = sorted(Y, reverse=True)
    
    start_x = 0
    start_y = 0
    while start_x < len(X) and start_y < len(Y):
        if sorted_X[start_x] == sorted_Y[start_y]:
            answer += sorted_X[start_x]
            start_x += 1
            start_y += 1
            if answer == '0':
                break
        else:
            if sorted_X[start_x] < sorted_Y[start_y]:
                start_y += 1
            else:
                start_x += 1
    

    return answer if answer !=  '' else '-1'