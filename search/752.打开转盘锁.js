/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 * bfs
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
 var openLock = function(deadends, target) {
  const queue = ['0000'], vis = {}
  let count = 0
  vis['0000'] = true

  while(queue.length) {
      const size = queue.length
      for(let i = 0; i < size; i++) {
          const cur = queue.shift()

          if(deadends.includes(cur)) continue
          if(cur === target) return count

          for(j = 0; j < 4; j++) {
              const up = rotateUp(cur, j)
              if(!vis[up]) {
                  vis[up] = true
                  queue.push(up)
              }
              const down = rotateDown(cur, j)
              if(!vis[down]) {
                  vis[down] = true
                  queue.push(down)
              }
          }
      }
      count++
  }
  return -1
};

var rotateUp = (str, j) => {
  str = str.split('')
  if(str[j] == '0') str[j] = '9'
  else str[j] = +str[j] - 1 + ''
  return str.join('')
}

var rotateDown = (str, j) => {
  str = str.split('')
  if(str[j] == '9') str[j] = '0'
  else str[j] = +str[j] + 1 + ''
  return str.join('')
}
// @lc code=end

