// 1328. Break a Palindrome
var breakPalindrome = function (palindrome) {
	if (palindrome.length === 1) return '';

	if (/[^a]/.test(palindrome.substring(0, Math.floor(palindrome.length / 2))))
		return palindrome.replace(/[^a]/, 'a');

	return palindrome.replace(/[a-z]$/, 'b');
};
