def make_num(sum_num, cnt, target, arr):
    result = 0
    if cnt == len(arr):
        if target == sum_num:
            return 1
        return 0 
    result += make_num(sum_num - arr[cnt], cnt + 1, target, arr)
    result += make_num(sum_num + arr[cnt], cnt + 1, target, arr)
    return result
    
def solution(numbers, target):
    answer = make_num(0, 0, target, numbers)
    return answer