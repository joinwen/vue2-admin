import router from "./router";
import { setDocumentTitle, domTitle } from "@/tools/domUtil";

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  setDocumentTitle(to.meta ? `${to.meta.title || "☹"}-${domTitle}` : domTitle);
  next();
});
