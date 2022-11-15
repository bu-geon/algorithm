## 222
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        if not root: return 0
        def dfs(node):
            cnt = 1
            if node.left: cnt += dfs(node.left)
            if node.right: cnt += dfs(node.right)
            return cnt
        
        return dfs(root)

## 547
class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        cities = {i for i in range(len(isConnected))}
        def grouping(city):
            cities.discard(city)
            for nextCity in range(len(isConnected)):
                if nextCity in cities and isConnected[city][nextCity]:
                    grouping(nextCity)

        ans = 0
        for city in range(len(isConnected)):
            if city in cities:
                grouping(city)
                ans += 1
        
        return ans
