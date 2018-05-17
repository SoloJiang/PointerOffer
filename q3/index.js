const target = [];
// 产生一个符合条件的随机二维数组
for (let i = 0; i < 4; i++) {
  target[i] = [];
  for (let j = 0; j < 4; j++) {
    if (i === 0 && j === 0) {
      target[i][j] = Math.floor(Math.random() * 10);
    } else if (i === 0 && j !== 0) {
      target[i][j] = target[i][j - 1] + Math.floor(Math.random() * 10 + 1);
    } else if (i !== 0 && j === 0) {
      target[i][j] = target[i - 1][j] + Math.floor(Math.random() * 10 + 1);
    } else if (i !== 0 && j !== 0) {
      do {
        target[i][j] = target[i][j - 1] + Math.floor(Math.random() * 10 + 1);
      } while (target[i][j] <= target[i - 1][j]);
    }
  }
}

console.log(target);

/**
 * 1  2  3  4
 * 3  5  7  8
 * 4  6  9  10
 * 8  9  10 11
 */
/**
 * 以右上角或者左下角的点作为起点
 * 缩小行范围或者缩小列范围
 */
function whetherHaveTheNumber(number, target) {
  const rowLength = target.length;
  const colLength = target[0] && target[0].length;

  for (let i = rowLength - 1; i > -1; i--) {
    for (let j = 0; j < colLength; j++) {
      if (target[i][j] === number) {
        return true;
      }
      if (target[i][j] > number) {
        continue;
      }
    }
  }
  return false;
}

console.log(whetherHaveTheNumber(20, target))
