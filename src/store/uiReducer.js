const uiState = {
  canvasZoom: 1,
  selected: [0],
  propertyVisibility: true,
  toolsVisibility: false,
}
export const uiReducer = (state = uiState, action) => {
  switch (action.type) {
    case "SET_PROPERTY_VISIBILITY": {
      return {
        ...state,
        visibility: action.value,
      }
    }
    case "SET_SELECTED": {
      return {
        ...state,
        selected: action.value,
      }
    }
    case "SET_TOOLS_VISIBILITY": {
      return {
        ...state,
        toolsVisibility: action.value,
      }
    }
    default:
      return state
  }
}
