import collections


## 큐 이용
class Solution:
    def maxDistance(self, nums1: List[int], nums2: List[int]) -> int:
        i, j = 0, 0 
        answer = 0
        que = collections.deque()
        
        while j < len(nums2):
            if i < len(nums1):
                que.append([nums1[i], i])
            while que and que[0][0] > nums2[j]:
                que.popleft()
            if que:
                answer = max(answer, j - que[0][1])
            i += 1
            j += 1
        
        return answer

## 그냥 인덱스로만 
class Solution:
    def maxDistance(self, nums1: List[int], nums2: List[int]) -> int:
        i, j = 0, 0 
        answer = 0
        
        while j < len(nums2) and i < len(nums1):
            if j < i:
                j += 1
            elif nums1[i] > nums2[j]:
                i += 1
            elif nums2[j] >= nums1[i]:
                answer = max(answer, j-i)
                j += 1
        
        return answer