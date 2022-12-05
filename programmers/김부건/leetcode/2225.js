// 2225. Find Players With Zero or One Losses
var findWinners = function (matches) {
  const players = {};

  matches.forEach((match) => {
    const [winner, loser] = match;

    players[winner] = { ...players[winner], win: (players[winner]?.win || 0) + 1 };
    players[loser] = { ...players[loser], lose: (players[loser]?.lose || 0) + 1 };
  });

  const answer = [[], []];
  for (const [player, result] of Object.entries(players)) {
    if (result.lose === undefined) {
      answer[0].push(player);
    } else if (result.lose === 1) {
      answer[1].push(player);
    }
  }

  return answer;
};
