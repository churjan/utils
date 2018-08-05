/**
 * @desc 判断是否iPhoneX
 * @returns boolean
 */
function isIphoneX() {
  return (
    /iphone/gi.test(navigator.userAgent) &&
    (screen.height == 812 && screen.width == 375)
  );
}

/**
 * @desc 判断移动设备
 * @returns
 */
function getOS() {
  const ua = navigator.userAgent;
  if (/(iPhone\sOS)\s([\d_]+)/.test(ua)) {
    return "iPhone";
  } else if (/(Android)\s+([\d.]+)/.test(ua)) {
    return "android";
  } else if (/(iPad).*OS\s([\d_]+)/.test(ua)) {
    return "iPad";
  } else if (/MicroMessenger/.test(ua)) {
    return "MicroMessenger";
  } else {
    return "otherOS";
  }
}

/**
 * @desc 轻松监听任何App自带返回键
 */
var hiddenProperty = 'hidden' in document ? 'hidden' :    
    'webkitHidden' in document ? 'webkitHidden' :    
    'mozHidden' in document ? 'mozHidden' :    
    null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
var onVisibilityChange = function(){
    if (!document[hiddenProperty]) {    
        console.log('页面非激活');
    }else{
        console.log('页面激活')
    }
}
document.addEventListener(visibilityChangeEvent, onVisibilityChange);
