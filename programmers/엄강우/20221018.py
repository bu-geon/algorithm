class Solution:
    def __init__(self):
        self.dp = {1: "1"}
        self.lastIdx = 1
        
    def makeSequence(self, sequence):
        res, char = "",""
        idx, cnt = 0, 0
        while idx <= len(sequence):
            if idx == len(sequence):
                res += str(cnt)
                res += char
                break
            elif char == '':
                char = sequence[idx]
                cnt = 1
            elif char == sequence[idx]:
                cnt += 1
            elif char != sequence[idx]:
                res += str(cnt)
                res += char
                char = sequence[idx]
                cnt = 1
            idx += 1
        return res
            
    def countAndSay(self, n: int) -> str:
        if n in self.dp: return self.dp[n]
        
        sequence = self.dp[self.lastIdx]
        target = self.lastIdx + 1
        while target <= n:
            sequence = self.makeSequence(sequence)
            target += 1
        self.lastIdx = n
        return sequence