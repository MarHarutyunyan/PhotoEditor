const defaultState = {
  layers: [],
  layer: {
    type: "LayerType",
    coords: {
      left: 0,
      top: 0,
    },
    rotation: 0,
    meta: objectMeta,
  },
  objectMeta: {
    ImgMeta,
    TxtMeta,
    SvgMeta,
  },
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
    text: "text",
    fontFamily: "Sans-serif",
    fontSize: 0,
    highlightColor: "color",
    outWidth: 0,
    outHeight: 0,
    color: "color",
    lineHeight: 0,
    letterSpacing: 0,
    shadow: "shadow",
  },
  SvgMeta: {
    data: "data",
    width: 0,
    height: 0,
    color: [],
    type: [],
  },
};

export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CREATING_BOARD": {
    }
    default:
      return state;
  }
};
