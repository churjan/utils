/**
 * 
 * @desc 将一维数组变成二维数组
 * @param {A} arr 
 * @param {number} [len=2] 每组数组的长度
 * @returns 返回一个二维数组
 */
function oneArrToTwoArr(arr, len = 2) {
  let oneArr = arr;
  let twoArr = [];
  let arrIdx = -1;
  oneArr.forEach((el, i) => {
    if (i % len == 0) {
      arrIdx += 1;
      twoArr[arrIdx] = [];
    }
    twoArr[arrIdx][i % len] = el;
  });
  return twoArr;
}
/**
 * 
 * @desc 数组去重
 * @param {Array} arr 
 * @returns 
 */
function removeRepeatArray(arr) {
  return Array.from(new Set(arr))
}
