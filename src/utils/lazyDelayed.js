import { lazy } from "react";

const lazyDelayed = (path, delay = 3000) => {
    return lazy(() => Promise.all([
      import(path),
      new Promise((resolve) => setTimeout(resolve, delay)) // ensures minimal delay
    ]).then(([module]) => module));
  }
  export default  lazyDelayed;  