/**
 * @desc 阶乘
 * @param {number} n
 * @returns {number}
 */
function factorial(n, p = 1) {
  if (n <= 1) {
    return 1 * p;
  } else {
    let result = n * p;
    // 被优化
    return factorial(n - 1, result);
  }
}
