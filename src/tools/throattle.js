const throttle = (fn, wait, options) => {
  let flag = true,
    leading = options.leading,
    context = this || null;
  return function () {
    let args = Array.prototype.slice.call(arguments);
    if (leading && wait) {
      callFn(context, fn, args);
    }
    if (flag) {
      flag = false;
      setTimeout(() => {
        callFn(context, fn, args);
        flag = true;
      }, wait);
    }
  };
};
const callFn = (context, fn, args) => {
  fn.apply(context, args);
};
export default throttle;
