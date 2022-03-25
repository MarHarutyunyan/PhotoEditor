import {
  getDefaultLayerData,
  getCanvasFirstLayerData,
} from "../functions/layers";

import produce from "immer";

const defaultState = {
  layers: [getCanvasFirstLayerData()],
  cavasSize: {
    width: 1000,
    height: 500,
  },
};

export const dataReducer = (state = defaultState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_LAYER": {
        draft.layers.push(getDefaultLayerData(action.value));
        break;
      }
      case "CHANGE_HEIGHT": {
        const [selected] = action.__selectedLyers;
        draft.layers[selected].meta.height = action.height;
      }
      case "CHANGE_WIDTH": {
        const [selected] = action.__selectedLyers;
        draft.layers[selected].meta.width = action.width;
      }
      case "CHANGE_TEXT": {
        const index = action.index;
        draft.layers[index].meta.text = action.value;
        break;
      }
      case "CHANGE_FONT": {
        const [selected] = action.__selectedLyers;
        draft.layers[selected].meta.fontFamily = action.font;
        break;
      }
      case "CHANGE_COLOR": {
        const [selected] = action.__selectedLyers;
        draft.layers[selected].meta.color = action.color;
        break;
      }
      case "CHANGE_HIGHLIGHT_COLOR": {
        const [selected] = action.__selectedLyers;
        draft.layers[selected].meta.highlightColor = action.highlightColor;
        break;
      }
      case "CHANGE_FONT_SIZE": {
        const [selected] = action.__selectedLyers;
        draft.layers[selected].meta.fontSize = action.fontSize;
        break;
      }
      case "CHANGE_LETTER_SPACING": {
        const [selected] = action.__selectedLyers;
        draft.layers[selected].meta.letterSpacing = action.letterSpacing;
        break;
      }
      case "CHANGE_LINE_HEIGHT": {
        const [selected] = action.__selectedLyers;
        draft.layers[selected].meta.lineHeight = action.lineHeight;
        break;
      }
      case "CHANGE_TXT_COORDS": {
        const [selected] = action.__selectedLyers;
        draft.layers[selected].coords = action.coords;
        break;
      }
      case "CHANGE_LAYERS_ORDER": {
        const dragItemContent = draft.layers[action.dragItem];
        draft.layers.splice(action.dragItem, 1);
        draft.layers.splice(action.dragOverItem, 0, dragItemContent);
        break;
      }
      default:
        return draft;
    }
  });
};
