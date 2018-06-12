/**
 *
 * @desc 防抖
 * @param {Function} fn
 * @param {number} wait //间隔时间
 *
 */

function debounce(fn, wait) {
  var timeout = null;
  return function() {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, wait);
  };
}

/**
 *
 * @desc 节流
 * @param {Function} fn
 * @param {number} wait //间隔时间
 *
 */
function throttle(fn, wait) {
  var prev = Date.now();
  return function() {
      let context = this;
      let args = arguments;
      let now = Date.now();
      if (now - prev >= wait) {
        fn.apply(context, args);
          prev = Date.now();
      }
  }
}
