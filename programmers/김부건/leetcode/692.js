// 692. Top K Frequent Words
var topKFrequent = function (words, k) {
  const wordsMap = words.reduce((result, word) => {
    result[word] = (result[word] || 0) + 1;

    return result;
  }, {});

  const answer = Object.keys(wordsMap).sort((a, b) => {
    if (wordsMap[a] === wordsMap[b]) return a.localeCompare(b);

    return wordsMap[b] - wordsMap[a];
  });

  return answer.slice(0, k);
};
