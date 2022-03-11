import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import "../../Main.css"
import * as Styled from "./styled"
import { SHAPE_LAYER, TEXT_LAYER } from "../Constants"
import ShapeComponent from "../ShapeComponent"

const multiply = (num1) => (num2) => {
  // TODO: add implementation for both cases, with % and with Pixels
  return num2
}

export const Canvas = ({ layers, selected, canvasNodes, setId }) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const canvasZoom = useSelector((state) => state.ui.canvasZoom)
  const _multiply = multiply(canvasZoom)

  const { width, height } = useSelector((state) => state.data.cavasSize)

  const selectLayer = (index) => {
    dispatch({ type: "SET_SELECTED", value: [index] })
    dispatch({ type: "SET_PROPERTY_VISIBILITY", value: true })
    setId(layers[index].type)
  }
  const setText = (index, value) => {
    dispatch({ type: "CHANGE_TEXT", index, value })
  }

  useEffect(() => {
    if (canvasNodes.current.children.length) {
      canvasNodes.current.children[selected[0]].focus()
    }
  }, [selected])

  return (
    <Styled.Container>
      <Styled.Canvas
        ref={canvasNodes}
        width={_multiply(width)}
        height={_multiply(height)}
      >
        {data.layers.map((layer, index) =>
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
