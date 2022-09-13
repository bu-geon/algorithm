class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        ans, prev = 0, 0
        for idx in range(len(bank)):
            result = bank[idx].count("1")
            if result == 0: continue
            ans += result * prev
            prev = result
            
        return ans