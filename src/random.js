/**
 *
 * @desc 生成指定范围[min, max]的随机数
 * @param  {Number} min
 * @param  {Number} max
 * @returns {Number}
 */
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * 
 * @desc 生成随机颜色
 * @returns {String}
 */
function randomColor() {
  return (
    "#" + ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
  );
}
//第二种写法
function randomColor() {
  var color = "#"
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16).toString(16)
  }
  return color;
}
