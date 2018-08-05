/**
 *
 * @desc 防抖
 * @param {function} fn
 * @param {number} wait //间隔时间
 *
 */

function debounce(fn, wait) {
  let timeout = null;
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
 * @param {function} fn
 * @param {number} wait //间隔时间
 *
 */
function throttle(fn, wait) {
  let prev = Date.now();
  return function() {
    let now = Date.now();
    if (now - prev >= wait) {
      fn();
      prev = Date.now();
    }
  };
}
