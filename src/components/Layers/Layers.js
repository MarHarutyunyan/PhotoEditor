import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { AddLayerMenu } from "../AddLayerMenu"
import * as Styled from "./styled"

export const Layers = ({ layers, selected }) => {
  const dispatch = useDispatch()

  const [menuVisible, setMenuVisibility] = useState(false)

  const toggleMenu = () => setMenuVisibility((prevState) => !prevState)

  const selectLayer = (index) => {
    dispatch({ type: "SET_SELECTED", value: [index] })
    dispatch({ type: "SET_PROPERTY_VISIBILITY", value: true })
  }

  return (
    <Styled.LayersContainer>
      <Styled.Layers>
        <ul>
          {layers.map((_, index) => (
            <li
              className={selected.includes(index) ? "selected" : null}
              key={index}
              onClick={() => selectLayer(index)}
            >
              {index + 1}) {layers[index].title}
            </li>
          ))}
        </ul>
        <Styled.LayerButton onClick={toggleMenu}>
          Add Layer
          {menuVisible ? <AddLayerMenu index={layers.length} /> : null}
        </Styled.LayerButton>
      </Styled.Layers>
    </Styled.LayersContainer>
  )
}
