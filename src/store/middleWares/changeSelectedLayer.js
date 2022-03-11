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
      dispatch({ type: "SET_PROPERTY_VISIBILITY", value: true })
      dispatch({ type: "SET_TOOLS_VISIBILITY", value: false })
    }

    return result
  }

export default changeSelectedLayer
