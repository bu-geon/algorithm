// 79. Word Search
var exist = function (board, word) {
  const canMove = (r, c) => {
    return r >= 0 && r < board.length && c >= 0 && c < board[0].length;
  };

  const searchDFS = (r, c, idx) => {
    if (word.length === idx) return true;

    if (!canMove(r, c) || board[r][c] !== word[idx]) return false;

    board[r][c] = '@';

    if (
      searchDFS(r + 1, c, idx + 1) ||
      searchDFS(r - 1, c, idx + 1) ||
      searchDFS(r, c + 1, idx + 1) ||
      searchDFS(r, c - 1, idx + 1)
    )
      return true;

    board[r][c] = word[idx];
  };

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === word[0] && searchDFS(r, c, 0)) return true;
    }
  }

  return false;
};
