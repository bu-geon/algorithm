// 2212. Maximum Points in an Archery Competition
var maximumBobPoints = function (numArrows, aliceArrows) {
  let maxPoints = 0,
    answer;

  const findBobArrows = (arrows, index, bobScores, bobArrows) => {
    if (arrows === 0 || index === aliceArrows.length) {
      if (bobScores > maxPoints) {
        maxPoints = bobScores;
        answer = [...bobArrows];

        if (arrows > 0) answer[aliceArrows.length - 1] += arrows;
      }

      return;
    }

    findBobArrows(arrows, index + 1, bobScores, bobArrows);

    if (aliceArrows[index] + 1 <= arrows) {
      bobArrows[index] = aliceArrows[index] + 1;
      findBobArrows(arrows - bobArrows[index], index + 1, bobScores + index, bobArrows);
      bobArrows[index] = 0;
    }
  };

  findBobArrows(numArrows, 0, 0, Array(aliceArrows.length).fill(0));

  return answer;
};
