// 1894. Find the Student that Will Replace the Chalk
var chalkReplacer = function (chalk, k) {
  const totalChalk = chalk.reduce((sum, c) => sum + c, 0);

  k %= totalChalk;

  let student = 0;
  while (k >= 0) {
    k -= chalk[student];

    if (k < 0) return student;

    student = (student + 1) % chalk.length;
  }

  return student;
};
