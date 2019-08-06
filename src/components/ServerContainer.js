import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ServerContainer(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch({ type: screenResize(window.innerWidth) });
    });
  }, []);
  return <div>TEST</div>;
}
