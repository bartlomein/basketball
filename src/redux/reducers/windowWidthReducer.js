const initialState = {
  screenWidth: typeof window === "object" ? window.innerWidth : null
};

export default function windowWidthReducer(state = initialState, action) {
  switch (action.type) {
    case "SCREEN_RESIZE":
      return Object.assign({}, state, {
        screenWidth: action.screenWidth
      });
  }
  return state;
}
