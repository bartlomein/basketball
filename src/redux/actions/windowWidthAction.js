export default function screenResize(width) {
  return {
    type: "SCREEN_RESIZE",
    screenWidth: width
  };
}
