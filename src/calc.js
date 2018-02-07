/**
 * @desc 阶乘
 * @param {number} n 
 * @returns {number}
 */
function factorial(n) {
    if(!parseInt(n)) return;
    return n<=1?1:n*factorial(n-1);
}