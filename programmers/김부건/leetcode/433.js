// 433. Minimum Genetic Mutation
var minMutation = function (start, end, bank) {
  const checked = new Array(bank.length).fill(false);
  const que = [[start, 0]];

  let index = 0;
  while (index < que.length) {
    const [gene, count] = que[index];

    if (gene === end) return count;

    for (let i = 0; i < bank.length; i++) {
      const candidate = bank[i];
      const differences = gene
        .split('')
        .reduce((total, g, j) => total + (g !== candidate[j] ? 1 : 0), 0);

      if (differences === 1 && checked[i] === false) {
        que.push([candidate, count + 1]);
        checked[i] = true;
      }
    }

    index++;
  }

  return -1;
};
