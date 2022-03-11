const uiState = {
  propertyVisibility: true,
  selected: [0],
  toolsVisibility: false,
};
export const uiReducer = (state = uiState, action) => {
  switch (action.type) {
    case "SET_PROPERTY_VISIBILITY": {
      return {
        ...state,
        visibility: action.value,
      };
    }
    case "SET_SELECTED": {
      return {
        ...state,
        selected: action.value,
      };
    }
    case "SET_TOOLS_VISIBILITY": {
        return{
            ...state,
            toolsVisibility:action.value
        }
    }
    default:
      return state;
  }
};
