import {
  getDefaultLayerData,
  getCanvasFirstLayerData,
} from "../functions/layers"

const defaultState = {
  layers: [getCanvasFirstLayerData()],
  cavasSize: {
    width: 1000,
    height: 500,
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
}

export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_LAYER": {
      return {
        ...state,
        layers: [...state.layers, getDefaultLayerData(action.value)],
      }
    }
    case "CHANGE_HEIGHT": {
      const height = action.height
      const selected = action.selected[0]
      state.layers[selected].meta.height = height
      return {
        ...state,
        layers: [...state.layers]
      }
    }
    case "CHANGE_WIDTH": {
      const width = action.width
      const selected = action.selected[0]
      state.layers[selected].meta.width = width
      return {
        ...state,
        layers: [...state.layers]
      }
    }
    case "CHANGE_TEXT": {
      const value = action.value
      const index = action.index
      state.layers[index].meta.text = value
      return {
        ...state,
        layers: [...state.layers]
      }
    }
    case "CHANGE_FONT": {
      const font = action.font
      const selected = action.selected[0]
      state.layers[selected].meta.fontFamily = font
      return {
        ...state,
        layers: [...state.layers]
      }
    }
    case "CHANGE_COLOR": {
      const color = action.color
      const selected = action.selected[0]
      state.layers[selected].meta.color = color
      return {
        ...state,
        layers: [...state.layers]
      }
    }
    case "CHANGE_HIGHLIGHT_COLOR": {
      const highlightColor = action.highlightColor
      const selected = action.selected[0]
      state.layers[selected].meta.highlightColor = highlightColor
      return {
        ...state,
        layers: [...state.layers]
      }
    }
    case "CHANGE_FONT_SIZE": {
      const fontSize = action.fontSize
      const selected = action.selected[0]
      state.layers[selected].meta.fontSize = fontSize
      return {
        ...state,
        layers: [...state.layers]
      }
    }
    case "CHANGE_LETTER_SPACING": {
      const letterSpacing = action.letterSpacing
      const selected = action.selected[0]
      state.layers[selected].meta.letterSpacing = letterSpacing
      return {
        ...state,
        layers: [...state.layers]
      }
    }
    case "CHANGE_LINE_HEIGHT": {
      const lineHeight = action.lineHeight
      const selected = action.selected[0]
      state.layers[selected].meta.lineHeight = lineHeight
      return {
        ...state,
        layers: [...state.layers]
      }
    }

    default:
      return state
  }
}
