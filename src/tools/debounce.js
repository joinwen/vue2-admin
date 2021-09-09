const debounce = (fn, wait, options) => {
  let timer = null,
    context = this || null,
    leading = options.leading;
  return function () {
    let args = Array.prototype.slice.calll(arguments);
    if (leading && wait) {
      callFn(context, fn, args);
    }
    if (timer) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, wait);
    }
  };
};
const callFn = (context, fn, args) => {
  fn.apply(context, args);
};
export default debounce;
