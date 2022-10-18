class Solution:
    def minimizeXor(self, num1: int, num2: int) -> int:
        temp1 = num1
        temp2 = num2
        num2_one = 0
        num1_one = 0
        while temp2 > 0:
            if temp2 % 2:
                num2_one += 1
            temp2 //= 2
        
        num1_bi = []
        while temp1 > 0:
            if temp1 % 2:
                num1_one += 1
            num1_bi.append(temp1%2)
            temp1 //= 2
        
        if num2_one == num1_one: return num1
        cnt = num2_one - num1_one
        
        answer = 0
        pos = 0
        for bit in num1_bi:
            if bit == 0 and cnt > 0:
                answer += 2 ** pos
                cnt -= 1
            elif bit == 1:
                if cnt < 0:
                    cnt += 1
                else:
                    answer += 2 ** pos
                    
            pos += 1
        
        while cnt > 0:
            answer += 2 ** pos
            pos += 1
            cnt -= 1
        
        return answer

class Solution:
  def minimizeXor(self, num1: int, num2: int) -> int:
      num2_one = num2.bit_count()
      num1_one = num1.bit_count()
      
      ans = num1
      for i in range(30):
          if num2_one > num1_one and not (num1 & 1 << i):
              ans ^= 1 << i
              num2_one -= 1
          if num2_one < num1_one and (num1 & 1 << i):
              ans ^= 1 << i
              num2_one += 1
      
      return ans