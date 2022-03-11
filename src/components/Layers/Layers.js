import React, { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { Tools } from "../Tools"
import * as Styled from "./styled"
export const Layers = ({ setId, layers, selected, toolsVisibility }) => {
  const layersNode = useRef()
  const dispatch = useDispatch()
  const show = () => {
    dispatch({ type: "SET_TOOLS_VISIBILITY", value: true })
  }
  const selectLayer = (index) => {
    dispatch({ type: "SET_SELECTED", value: [index] })
    dispatch({ type: "SET_PROPERTY_VISIBILITY", value: true })
    setId(layers[index].type)
  }

  return (
    <div className="layersContainer">
      <div className="layers" ref={layersNode}>
        <ul>
          {layers.map((_, index) => (
            <li
              className={selected.includes(index) ? "selected" : null}
              key={index}
              onClick={() => selectLayer(index)}
            >
              Layer {index + 1}
            </li>
          ))}
        </ul>
        <Styled.LayerButton onClick={show}>Add Layer</Styled.LayerButton>
        {toolsVisibility ? <Tools setId={setId} index={layers.length} /> : null}
      </div>
    </div>
  )
}
