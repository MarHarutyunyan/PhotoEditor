import { createSelector } from "reselect";
import { convertPercentToPixel } from "./utils";

export const getData = (state) => state.data;
export const getUi = (state) => state.ui;

const _getCanvasOriginalSize = (state) => getData(state).cavasSize;
const _getLayersPure = (state) => getData(state).layers;

export const getCanvasZoom = (state) => getUi(state).canvasZoom;

export const getCanvasSize = createSelector(
  _getCanvasOriginalSize,
  getCanvasZoom,
  (cavasSize, zoom) => {
    const { width, height } = cavasSize;
    return {
      width: width * zoom,
      height: height * zoom,
    };
  }
);

export const getSelectedLayerIndex = (state) => getUi(state).selectedLayerIndex;

export const getLayers = createSelector(
  getCanvasSize,
  _getLayersPure,
  (cavasSize, layers) => layers.map(convertPercentToPixel(cavasSize))
);

export const getTxtCoords = (state) => {
  if (getSelectedLayerIndex(state).length === 1) {
    return _getLayersPure(state)[getSelectedLayerIndex(state)].coords

  } else {
    return { x: 0, y: 0 }

    // console.log(getSelectedLayerIndex(state));
    // getSelectedLayerIndex(state).map((_, index) => {
    //   console.log(index);
    //   console.log(_getLayersPure(state)[index].coords);
    //   return _getLayersPure(state)[index].coords
    // })
  }
}
