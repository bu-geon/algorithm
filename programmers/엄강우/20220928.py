class Solution:
    def maximumGroups(self, grades: List[int]) -> int:
        return (-1 + int((8 * len(grades) + 1) ** (1/2))) // 2

## 1 ~ n 까지 합이 x <= (n+1)n / 2  2x <= n^2 + n => n^2 + n + 1/4 >= 2x + 1/4 -> (n+1/2)^2 >= 2x + 1/4 -> n+1/2 => (2x + 1/4)^(1/2) => n >= 루트(2x + 1/4) - 1/2
## 1/2 * (루트(8x + 1) - 1) <= n