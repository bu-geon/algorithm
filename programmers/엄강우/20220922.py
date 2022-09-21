class Solution:
    def numMatchingSubseq(self, s: str, words: List[str]) -> int:
        s_dict = {}
        words.sort()
        for idx, w in enumerate(s):
            if w not in s_dict:
                s_dict[w] = []
            s_dict[w].append(idx)
        
        prefix_word = {}
        ans = 0
        for word in words:
            min_idx = -1
            res_word = ''
            res = 0
            new_word = word
            for i in range(len(word), 0, -1):
                target = word[:i] 
                if target in prefix_word:
                    min_idx = prefix_word[target]
                    res_word = target
                    res = len(res_word)
                    new_word = word[i:]
                    break
            for w in new_word:
                if w not in s_dict:
                    break
                for idx in s_dict[w]:
                    if idx > min_idx:
                        res += 1
                        min_idx = idx
                        res_word += w
                        prefix_word[res_word] = min_idx
                        break
            if res == len(word): ans += 1
        return ans