def solution(want, number, discount):
    answer = 0
    want_dict = {}
    sale_dict = {}
    for idx in range(len(want)):
        sale_dict[want[idx]] = 0
        want_dict[want[idx]] = number[idx]
    
    bucket = 0
    for i in range(10):
        if discount[i] in sale_dict:
            if want_dict[discount[i]] > sale_dict[discount[i]]:
                bucket += 1 
            sale_dict[discount[i]] += 1
    
    if bucket == 10:
        answer += 1

    for i in range(10, len(discount)):
        if discount[i-10] in sale_dict:
            sale_dict[discount[i-10]] -= 1
            if sale_dict[discount[i-10]] < want_dict[discount[i-10]]:
                bucket -= 1

        if discount[i] in sale_dict:
            if want_dict[discount[i]] > sale_dict[discount[i]]:
                bucket += 1 
            sale_dict[discount[i]] += 1
            
        if bucket == 10:
            answer += 1

    return answer