import React from "react"
import "../Main.css"
import { useDispatch } from "react-redux"
import { EFFECTS, IMG_LAYER, TEXT_LAYER, VECTOR } from "../Constants"

export const Tools = ({ index }) => {
  const dispatch = useDispatch()

  const AddToData = (layerType) => {
    dispatch({ type: "ADD_LAYER", value: layerType })
  }

  return (
    <div className="toolsContainer">
      <div onClick={() => AddToData(IMG_LAYER)}>Img</div>
      <div onClick={() => AddToData(TEXT_LAYER)}>Text</div>
      <div onClick={() => AddToData(EFFECTS)}>Effects</div>
      <div onClick={() => AddToData(VECTOR)}>Vectors</div>
    </div>
  )
}
