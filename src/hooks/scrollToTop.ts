import { useEffect } from "react";

function scrollToTop() {
  return useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export default scrollToTop;
