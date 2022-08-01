def solution(number):
    answer = 0
    for i in range(len(number)-2):
        num_dict = {}
        for j in range(i+1, len(number)):
            if -number[j] in num_dict:
                answer += num_dict[-number[j]]
            if number[i] + number[j] not in num_dict:
                num_dict[number[i]+number[j]] = 0
            num_dict[number[i]+number[j]] += 1

    return answer