import { addLayer, setLayerType } from "../functions/utils";
const defaultState = {
  layers: [],
  layer: {
    type: "",
    coords: {
      x: 300,
      y: 250,
    },
    rotation: 0,
    meta: {
      ImgMeta: {
        width: 0,
        height: 0,
        OrgWidth: 0,
        OrgHeight: 0,
        type: "ImgType",
        url: "ImgUrl",
        colorAdjustments: {
          exposure: 0,
          brilliance: 0,
          highlights: 0,
          shadows: 0,
          contrast: 0,
          brightness: 0,
          blackPoint: 0,
          saturation: 0,
          warmth: 0,
        },
      },
      TxtMeta: {
        text: "Click to edit",
        fontFamily: "Sans-serif",
        fontSize: 24,
        highlightColor: "#ffffff",
        width: 250,
        height: 50,
        color: "#000000",
        lineHeight: 1,
        letterSpacing: 0,
        shadow: "",
      },
      SvgMeta: {
        data: "data",
        width: 0,
        height: 0,
        color: [],
        type: [],
      },
    },
  },
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
export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_LAYER": {
      const CopyLayer = JSON.parse(JSON.stringify(state.layer));
      addLayer(state.layers, CopyLayer);
      setLayerType(state.layers, action.id);
      return {
        ...state,
      };
    }
    case "CHANGE_TEXT": {
      const value = action.value;
      const index = action.index;
      state.layers[index].meta.TxtMeta.text = value;
      return {
        ...state,
      };
    }
    case "CHANGE_FONT": {
      const font = action.font;
      const selected = action.selected[0];
      state.layers[selected].meta.TxtMeta.fontFamily = font;
      return {
        ...state,
      };
    }
    case "CHANGE_COLOR": {
      const color = action.color;
      const selected = action.selected[0];
      state.layers[selected].meta.TxtMeta.color = color;
      return {
        ...state,
      };
    }
    case "CHANGE_HIGHLIGHT_COLOR": {
      const highlightColor = action.highlightColor;
      const selected = action.selected[0];
      state.layers[selected].meta.TxtMeta.highlightColor = highlightColor;
      return {
        ...state,
      };
    }
    case "CHANGE_FONT_SIZE": {
      const fontSize = action.fontSize;
      const selected = action.selected[0];
      state.layers[selected].meta.TxtMeta.fontSize = fontSize;
      return {
        ...state,
      };
    }
    case "CHANGE_LETTER_SPACING": {
      const letterSpacing = action.letterSpacing;
      const selected = action.selected[0];
      state.layers[selected].meta.TxtMeta.letterSpacing = letterSpacing;
      return {
        ...state,
      };
    }
    case "CHANGE_LINE_HEIGHT": {
      const lineHeight = action.lineHeight;
      const selected = action.selected[0];
      state.layers[selected].meta.TxtMeta.lineHeight = lineHeight;
      return {
        ...state,
      };
    }
    
    default:
      return state;
  }
};

