const uiState = {
  canvasZoom: 1,
  selectedLayerIndex: [0],
}

export const uiReducer = (state = uiState, action) => {
  switch (action.type) {
    case "SET_SELECTED": {
      return {
        ...state,
        selectedLayerIndex: action.value,
      }
    }
    default:
      return state
  }
}
