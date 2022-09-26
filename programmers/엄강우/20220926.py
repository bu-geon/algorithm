# 1
class Solution:
    def partitionString(self, s: str) -> int:
        ans = 1
        alpha_dict = {}
        for alpha in s:
            if alpha not in alpha_dict:
                alpha_dict[alpha] = 1
            else:
                alpha_dict = {}
                alpha_dict[alpha] = 1
                ans += 1
        
        return ans


# 2
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams_dict = {}
        ans = []
        for word in strs:
            res = ''.join(sorted(list(word)))
            if res in anagrams_dict:
                ans[anagrams_dict[res]].append(word)
            else:
                anagrams_dict[res] = len(ans)
                ans.append([word])
        return ans