export default function screenResize(width) {
  return dispatch = () => {
    dispatch({
    type: "SCREEN_RESIZE",
    screenWidth: width
  };)
  }
}
