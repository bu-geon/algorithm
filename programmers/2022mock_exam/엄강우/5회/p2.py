def isBurger(ings):
    if ings[-1] != 1: return False
    if ings[-2] != 3: return False
    if ings[-3] != 2: return False
    if ings[-4] != 1: return False
    return True

def solution(ingredient):
    answer = 0
    isStart = 0
    stack = []
    for ing in ingredient:
        stack.append(ing)
        if len(stack) >=4 and isBurger(stack):
            answer += 1
            stack.pop()
            stack.pop()
            stack.pop()
            stack.pop()
    
    return answer