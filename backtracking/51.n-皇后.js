/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
  const res = []
  const board = Array(n).fill().map(() => Array(n).fill('.'))

  function isValid(board, row, col) {
      for(let i = 0; i < row; i++) {
          if(board[i][col] == 'Q') return false
      }

      for(let i = row - 1, j = col + 1; i >=0 && j < n; i--, j++) {
          if(board[i][j] == 'Q') return false
      }
      for(let i = row - 1, j = col - 1; i >=0 && j >=0; i--, j--) {
          if(board[i][j] == 'Q') return false
      }
      return true
  }

  function traverse(board, row) {
      if(row === n) {
          const stringBoard = board.slice()
          stringBoard.forEach((row, i) => {
              stringBoard[i] = row.join('')
          })
          res.push(stringBoard)
          return
      }

      for(let i = 0; i < n; i++) {
          if(!isValid(board, row, i)) continue
          board[row][i] = 'Q'
          traverse(board, row + 1)
          board[row][i] = '.' 
      }
  }

  traverse(board, 0)
  return res
};
// @lc code=end

