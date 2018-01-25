/**
 * 
 * @desc 获取地址的query字段，并将它转成对象
 * @param {String} str 
 * @returns 
 */
function getUrlQuery(str) {
     str = str == null ? window.location.href : str;
     console.log(str);
    const arr = str.slice(str.lastIndexOf("?") + 1).split("&");
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let newArr = arr[i].split("=");
        obj[newArr[0]] = newArr[1];
    }
    return obj;
}