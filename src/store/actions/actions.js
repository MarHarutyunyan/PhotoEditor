export const selectedLayerAction = (value) =>  {
    return { type: "SET_SELECTED", value }
}

export const addLayerAction = (layerType) => {
    return { type: "ADD_LAYER", value: layerType }
}

export const changeColorAction = (color) => {
    return { type: "CHANGE_COLOR", color }
}

export const changeFontAction = (font) => {
    return { type: "CHANGE_FONT", font }
}

export const addHighlightColorAction = (highlightColor) => {
    return { type: "CHANGE_HIGHLIGHT_COLOR", highlightColor }
}

export const addLetterSpacingAction = (letterSpacing) => {
    return { type: "CHANGE_LETTER_SPACING", letterSpacing }
}

export const addLineHeightAction = (lineHeight) => {
    return { type: "CHANGE_LINE_HEIGHT", lineHeight }
}

export const addSizeAction = (fontSize) => {
    return { type: "CHANGE_FONT_SIZE", fontSize }
}

export const changeTextAction = (index, value) => {
    return { type: "CHANGE_TEXT", index, value }
}