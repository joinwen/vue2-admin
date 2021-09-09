import enquire from "enquire.js";
const enquireUtil = function (cb) {
  enquire.register("screen and (max-width: 768px)", {
    match: function () {
      cb("xs");
    },
  });
  enquire.register("screen and (min-width: 768px) and (max-width: 992px)", {
    match: function () {
      cb("sm");
    },
  });

  enquire.register("screen and (min-width: 992px) and (max-width: 1200px)", {
    match: function () {
      cb("md");
    },
  });

  enquire.register("screen and (min-width: 1200px) and (max-width: 1920px)", {
    match: function () {
      cb("lg");
    },
  });

  enquire.register("screen and (min-width: 1920px)", {
    match: function () {
      cb("xl");
    },
  });
};
export default enquireUtil;
