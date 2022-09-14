def solution(topping):
    answer = 0
    first_toppings = 0    
    first_topping_dict = {}
    back_toppings = 0
    back_topping_dict = {}

    for tp in topping:
        if tp not in back_topping_dict:
            back_toppings += 1
            back_topping_dict[tp] = 0
            first_topping_dict[tp] = 0
        back_topping_dict[tp] += 1
    
    for tp in topping:
        if first_topping_dict[tp] == 0:
            first_topping_dict[tp] += 1
            first_toppings += 1
        back_topping_dict[tp] -= 1
        if back_topping_dict[tp] == 0:
            back_toppings -= 1
        if first_toppings == back_toppings:
            answer += 1
            
    return answer