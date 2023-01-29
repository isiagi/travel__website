import { useEffect } from "react";

function scrollToTop():void {
  return useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export default scrollToTop;
