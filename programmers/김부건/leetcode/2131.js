// 2131. Longest Palindrome by Concatenating Two Letter Words
var longestPalindrome = function (words) {
  const reverseWordsMap = {};

  const getReverseWord = (word) => word.split('').reverse().join('');

  let max = 0;
  for (let word of words) {
    if (reverseWordsMap[word]) {
      max += word.length * 2;
      reverseWordsMap[word]--;
      continue;
    }

    const reverseWord = getReverseWord(word);
    reverseWordsMap[reverseWord] = (reverseWordsMap[reverseWord] || 0) + 1;
  }

  for (let word of words) {
    const reverseWord = getReverseWord(word);

    if (word === getReverseWord(word) && reverseWordsMap[reverseWord]) {
      max += word.length;
      break;
    }
  }

  return max;
};
