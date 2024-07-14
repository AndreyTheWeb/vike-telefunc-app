import type { OnPageTransitionEndAsync } from "vike/types";

export const onPageTransitionEnd: OnPageTransitionEndAsync = async () => {
  console.log("Page transition end");
  setTimeout(() => {
    document.querySelector("body")?.classList.remove("page-is-transitioning");
  }, 1000);
};
