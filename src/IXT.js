/**
 * 
 * @desc 验证是否在星途APP里面
 * @returns Boolean
 */function isIXTApp() {
  if (navigator.userAgent.indexOf("ixingtu.com") != -1) {
    return true;
  } else {
    return false;
  }
}
