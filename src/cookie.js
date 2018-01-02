/**
 * 
 * @desc 写入cookies
 * @param {String} name 
 * @param {String} value 
 * @param {Number} days
 */
function setCookie(name, value, days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + "=" + value + ";expires=" + date;
}
/**
 * 
 * @desc 读取cookies
 * @param {String} name 
 * @returns 
 */
function getCookie(name) {
  var arr = document.cookie.replace(/\s/g, "").split(";");
  for (var i = 0; i < arr.length; i++) {
    var tempArr = arr[i].split("=");
    if (tempArr[0] == name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return "";
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
