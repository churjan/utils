/**
 * @desc 时间戳转换成日期格式
 * @param  {number} timestamp
 * @returns {string}
 */
function timestampToTime(timestamp) {
  if(timestamp.length==10){
    let date = new Date(timestamp*1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  }else{
    let date = new Date(timestamp);
  }

  Y = date.getFullYear() + '-';
  M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  D = date.getDate() + ' ';
  h = date.getHours() + ':';
  m = date.getMinutes() + ':';
  s = date.getSeconds();
  return Y+M+D+h+m+s;
}
