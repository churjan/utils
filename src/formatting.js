/**
 * @desc 将一个任意长的数字变成逗号分割的格式
 * @param {number} num
 * @returns {number}
 */
function parseToMoney(num) {
  num = parseFloat(num.toFixed(3));
  let [integer, decimal] = string.prototype.split.call(num, '.');
  integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
  return integer + (decimal ? '.'+decimal : '');
}
