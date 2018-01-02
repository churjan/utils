/**
 * 
 * @desc 写入cookies
 * @param {any} name 
 * @param {any} value 
 * @param {any} day 
 */
function setCookie(name, value, day) {
  //设置cookie
  var day = typeof day == "undefined" || !day ? 1 : day; //时间,默认存储1天
  var d = new Date();
  d.setHours(d.getHours() + 24 * day);
  document.cookie =
    name + "=" + encodeURI(value) + ";expires=" + d.toUTCString();
}
/**
 * 
 * @desc 读取cookies
 * @param {any} name 
 * @returns 
 */
function getCookie(name) {
  //取cookie
  var results = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]*)(;|$)")
  );
  if (results) {
    return decodeURI(results[2]);
  } else {
    return null;
  }
}
/**
 * @desc 删除cookies
 * @param {any} name 
 */
function clearCookie(name) {
  //删除cookie
  this.setCookie(name, "", -1);
}
/**
 * @desc 检测cookie是否存在
 * @param {any} name 
 * @returns Boolean
 */
function checkCookie(name) {
  var resultes = this.getCookie(name);
  if (resultes != "" && resultes != null) {
    return true;
  } else {
    return false;
  }
}
