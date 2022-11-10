class StockSpanner:

    def __init__(self):
        self.arr = []

    def next(self, price: int) -> int:
        cnt = 0
        while self.arr and self.arr[-1][0] <= price:
            _, prevCnt = self.arr.pop()
            cnt += prevCnt
        self.arr.append([price,cnt+1])
        return cnt + 1