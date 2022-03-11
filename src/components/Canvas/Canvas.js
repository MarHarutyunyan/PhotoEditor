import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import "../../Main.css"
import * as Styled from "./styled"
import { SHAPE_LAYER, TEXT_LAYER } from "../Constants"
import ShapeComponent from "../ShapeComponent"
import { getLayers, getCanvasZoom, getCanvasSize } from "../../store/selectors"

export const Canvas = ({ selected, setId }) => {
  const dispatch = useDispatch()
  const layers = useSelector(getLayers)

  const { width, height } = useSelector(getCanvasSize)

  const selectLayer = (index) => {
    dispatch({ type: "SET_SELECTED", value: [index] })
    dispatch({ type: "SET_PROPERTY_VISIBILITY", value: true })
    setId(layers[index].type)
  }
  const setText = (index, value) => {
    dispatch({ type: "CHANGE_TEXT", index, value })
  }

  return (
    <Styled.Container>
      <Styled.Canvas width={width} height={height}>
        {layers.map((layer, index) =>
          layer.type === SHAPE_LAYER ? (
            <ShapeComponent
              onSelect={() => selectLayer(index)}
              key={index}
            ></ShapeComponent>
          ) : layer.type === TEXT_LAYER ? (
            <textarea
              key={index}
              type="text"
              placeholder="Edit Text"
              onChange={(event) => setText(index, event.target.value)}
              onClick={() => selectLayer(index)}
            />
          ) : (
            <div key={index}>Not Text</div>
          )
        )}
      </Styled.Canvas>
    </Styled.Container>
  )
}
