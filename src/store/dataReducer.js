import { addLayer, checkForEmptyLayer, setLayerType } from "../functions/utils";

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
        fontSize: 16,
        highlightColor: "",
        outWidth: 250,
        outHeight: 50,
        color: "black",
        lineHeight: 0,
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
      Colors: ["Black", "White", "Red", "Yellow", "Pink", "Green", "Blue"],
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
      if (checkForEmptyLayer(state.layers)) {
        const CopyLayer = JSON.parse(JSON.stringify(state.layer));
        addLayer(state.layers, CopyLayer);
      }
      return state;
    }
    case "SET_LAYER": {
      setLayerType(state.layers, action.id);
      return {
        ...state,
      };
    }
    case "CHANGE_FONT": {
      debugger
      const font = action.font;
      const index = action.index;
      state.layers[index].meta.TxtMeta.fontFamily = font;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
