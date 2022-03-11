import { createSelector } from "reselect"
import { scaleHtmlElementSize } from "../../functions/scaleHtmlElementSize"

export const getData = (state) => state.data

export const getUi = (state) => state.ui
export const getCanvasZoom = (state) => getUi(state).canvasZoom

const _getCanvasOriginalSize = (state) => getData(state).cavasSize

export const getCanvasSize = createSelector(
  _getCanvasOriginalSize,
  getCanvasZoom,
  (cavasSize, zoom) => {
    const { width, height } = cavasSize
    return {
      width: scaleHtmlElementSize(width, zoom),
      height: scaleHtmlElementSize(height, zoom),
    }
  }
)

export const getSelectedLayerIndex = (state) => {
  return getUi(state).selectedLayerIndex
}

export const getLayers = (state) => getData(state).layers
