import re

class Solution:
    def breakPalindrome(self, palindrome: str) -> str:
        N = len(palindrome)
        if N == 1: return ""
        first = palindrome[:N//2]
        second = palindrome[N//2:]
        replaced_first = re.sub("[b-z]", "a", first, 1)
        
        if replaced_first == first:
            return first + second[:-1] + "b"
        return replaced_first + second