/**
 * 
 * @desc 写入cookies
 * @param {string} name 
 * @param {string} value 
 * @param {number} days
 */
function setCookie(name, value, days) {
  let date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + "=" + value + ";expires=" + date;
}
/**
 * 
 * @desc 读取cookies
 * @param {string} name 
 * @returns 
 */
function getCookie(name) {
  let arr = document.cookie.replace(/\s/g, "").split(";");
  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr[i].split("=");
    if (tempArr[0] == name) {
      return decodeURIComponent(tempArr[1]);
    }
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
 * @returns boolean
 */
function checkCookie(name) {
  let result = this.getCookie(name);
  console.log(result,123);
  if (result !== undefined) {
    return true;
  } else {
    return false;
  }
}
