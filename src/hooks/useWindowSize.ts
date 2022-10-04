import { useState, useEffect } from "react";

import { ISize } from "@/interfaces";

export function useWindowSize(): ISize {
  const [windowSize, setWindowSize] = useState<ISize>({} as ISize);
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
