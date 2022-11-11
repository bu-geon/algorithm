import collections

class Solution:
    def makeDummies(self, s):
        dummies = []
        dummy = ''
        for aOrB in s:
            if not dummy:
                dummy += aOrB
            elif dummy[0] != aOrB:
                dummies.append(dummy)
                dummy = aOrB
            else:
                dummy += aOrB
        dummies.append(dummy)
        return dummies

    def minimumDeletions(self, s: str) -> int:
        if len(s) < 2: return 0
        ans = len(s) - max(s.count('a'), s.count('b'))
        aOrBDict = collections.Counter(s)
        dummies = self.makeDummies(s)
        deleted = 0
        for dummy in dummies:
            if dummy[0] == 'b':
                ans = min(deleted+aOrBDict['a'], ans)
                deleted += len(dummy)
            else:
                aOrBDict['a'] -= len(dummy)
        return ans

## DP 
class Solution:
    def minimumDeletions(self, s: str) -> int:
        endA, endB = 0, 0
        for alpha in s:
            if alpha == 'a':
                endB += 1
            else:
                endA, endB = endA + 1, min(endA, endB)
    
        return min(endA, endB)
