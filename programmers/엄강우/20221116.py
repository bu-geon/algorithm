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

class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        if not root: return 0
        def dfs(node, h, treeH, isEnd):
            deleted = 0
            if isEnd:
                return 0, treeH, isEnd 
            if h + 1 == treeH:
                if node.right: return 0, treeH, True
                if node.left: return 1, treeH, True
                return 2, treeH, False
            if node.right:
                deletedSubtree, treeH, isEnd = dfs(node.right, h+1, treeH, isEnd)
                deleted += deletedSubtree
            else:
                if node.left:
                    return 1, h+1, True
                else:
                    return 2, h+1, False

            if node.left:
                deletedSubtree, treeH, isEnd = dfs(node.left, h+1, treeH, isEnd)
                deleted += deletedSubtree

            return deleted , treeH, isEnd 
            
        deleted, h, _ = dfs(root, 0, 20, False)
        return 2 ** (h+1) - 1 - deleted