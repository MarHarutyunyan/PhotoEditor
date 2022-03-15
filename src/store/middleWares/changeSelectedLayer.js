import { getLayers } from "../selectors"

const actionsToReact = ["ADD_LAYER"]

const changeSelectedLayer =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    const result = next(action)

    if (~actionsToReact.indexOf(action.type)) {
      const layers = getLayers(getState())
      const lastLayerIndex = layers.length - 1

      dispatch({ type: "SET_SELECTED", value: [lastLayerIndex] })
    }

    return result
  }

export default changeSelectedLayer
