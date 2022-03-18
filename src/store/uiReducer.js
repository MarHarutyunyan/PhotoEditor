import produce from "immer";
const uiState = {
  canvasZoom: 1,
  selectedLayerIndex: [0],
  properties: {
    text: {
      Fonts: [
        "Sans-serif",
        "Georgia, serif",
        "Cursive",
        "System-Ui",
        "Monospace",
        "Fantasy",
      ],
      Size: 11,
      Color: "#000000",
      HighlightColor: "#fff",
      LineHeight: 0,
      LetterSpacing: 0,
    },
    img: {
      Color: [],
      Width: [],
    },
  },
};

export const uiReducer = (state = uiState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "SET_SELECTED": {
        draft.selectedLayerIndex = action.value;
      }
      default:
        break;
    }
  });
};
