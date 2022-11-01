class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        if len(fruits) < 2: return len(fruits)
        start = 0
        bucket = [fruits[0]]
        targetIdx = 0
        
        ans = 0
        for end in range(1, len(fruits)):
            fruit = fruits[end]
            if len(bucket) == 1:
                if bucket[-1] != fruit:
                    bucket.append(fruit)
                    targetIdx = end
            else:
                if bucket[-1] != fruit and bucket[0] == fruit:
                    bucket[0], bucket[1] = bucket[1], bucket[0]
                    targetIdx = end
                elif fruit not in bucket:
                    bucket.pop(0)
                    bucket.append(fruit)
                    start = targetIdx
                    targetIdx = end
            
            ans = max(ans, end - start + 1)
        return ans
                    