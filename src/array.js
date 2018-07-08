/**
 * @desc 将一维数组变成二维数组
 * @param {Array} arr
 * @param {number} [len=2] 每组数组的长度
 * @returns {Array} 返回一个二维数组
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
 * @desc 数组去重
 * @param {Array} arr
 * @returns
 */
function removeRepeatArray(arr) {
  return Array.from(new Set(arr));
  // return [...new Set(arr)]; //第二种写法
}

/**
 * @desc 计数数组中值的出现次数
 * @param {Array} arr
 * @param {number} value
 * @returns {number} 返回值出现的次数
 * @example countOccurrences([1,1,1,2,3,4,5],1) -> 3
 */
function countOccurrences (arr,value) {
  return arr.reduce((sum,v)=>v===value?sum+1:sum+0,0);
}

/**
 * @desc 使用reduce（）来获取数组中的所有元素，并使用concat（）来使它们flatten
 * @param {Array} arr
 * @returns
 * @example flatten([1,[2],3,4]) -> [1,2,3,4]
 */
function flatten(arr) {
  return arr.reduce((sum, v) => sum.concat(v), []);
}
