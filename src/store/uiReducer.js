const uiState = {
  canvasZoom: 1,
  selected: [0],
}

export const uiReducer = (state = uiState, action) => {
  switch (action.type) {
    case "SET_SELECTED": {
      return {
        ...state,
        selected: action.value,
      }
    }
    default:
      return state
  }
}
