class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        rows = []
        for row in bank:
            result = 0
            for device in row:
                if device == '1':
                    result += 1
            if result:
                rows.append(result)
                
        if len(rows) < 2: return 0
        
        answer = 0
        for idx in range(len(rows)-1):
            answer += rows[idx] * rows[idx+1]
        
        return answer