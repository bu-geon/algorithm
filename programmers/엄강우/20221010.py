class MyCalendarThree:

    def __init__(self):
        self.starts = [0,10**9+1]
        self.ends = [0,10**9+1]
        self.maxBooks = 0

    def bisect(self, target, num):
        s, e = 0, len(target)-1
        while s < e:
            mid = (s+e)//2+1
            if target[mid] >= num:
                e = mid - 1
            else:
                s = mid
        return s
        
    def book(self, start: int, end: int) -> int:
        self.starts.append(start)
        self.starts.sort()
        self.ends.append(end)
        self.ends.sort()
        
        s_s = self.bisect(self.starts, start)
        e_s = self.bisect(self.ends, start)
        self.maxBooks = max(self.maxBooks, s_s - e_s)
        
        while self.starts[s_s] < end and s_s < len(self.starts):
            if self.starts[s_s] < self.ends[e_s]:
                s_s += 1
            else:
                e_s += 1
            self.maxBooks = max(self.maxBooks, s_s - e_s)
        
        return self.maxBooks