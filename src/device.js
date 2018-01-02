/**
 * 
 * @desc 判断是否iPhoneX
 * @returns Boolean
 */
function isIphoneX() {
  return (
    /iphone/gi.test(navigator.userAgent) &&
    (screen.height == 812 && screen.width == 375)
  );
}
/**
 * 
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
