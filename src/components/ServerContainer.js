import React, { useEffect } from "react";

export default function ServerContainer(props) {
  useEffect(() => {
    window.addEventListener("resize", () => {
      props.dispatch.screenResize(window.innerWidth);
    });
  }, []);
  return <div>TEST</div>;
}
