export const selectedLayerAction = (value) =>  {
    return { type: "SET_SELECTED", value }
}

export const addLayerAction = (layerType) => {
    return { type: "ADD_LAYER", value: layerType }
}

export const changeColorAction = (color, selected) => {
    return { type: "CHANGE_COLOR", color, selected }
}

export const changeFontAction = (font, selected) => {
    return { type: "CHANGE_FONT", font, selected }
}

export const addHighlightColorAction = (highlightColor, selected) => {
    return { type: "CHANGE_HIGHLIGHT_COLOR", highlightColor, selected }
}

export const addLetterSpacingAction = (letterSpacing, selected) => {
    return { type: "CHANGE_LETTER_SPACING", letterSpacing, selected }
}

export const addLineHeightAction = (lineHeight, selected) => {
    return { type: "CHANGE_LINE_HEIGHT", lineHeight, selected }
}

export const addSizeAction = ( fontSize, selected) => {
    return { type: "CHANGE_FONT_SIZE", fontSize, selected }
}

export const changeTextAction = (index, value) => {
return { type: "CHANGE_TEXT", index, value }
}