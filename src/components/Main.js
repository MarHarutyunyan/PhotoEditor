import React from "react"
import { useSelector } from "react-redux"
import { Canvas } from "./Canvas/Canvas"
import { Layers } from "./Layers/Layers"
import { Properties } from "./Properties"
import { SHAPE_LAYER } from "../Constants"
import "../Main.css"

const Main = () => {
  const data = useSelector((state) => state.data)
  const uiData = useSelector((state) => state.ui)
  const layers = data.layers
  const selected = uiData.selected
  const propertyVisibility = uiData.propertyVisibility
  const toolsVisibility = uiData.toolsVisibility

  return (
    <div className="container">
      <Layers
        layers={layers}
        selected={selected}
        toolsVisibility={toolsVisibility}
      />
      <Canvas selected={selected} />
      <Properties
        selected={selected}
        layers={layers}
        propertyVisibility={propertyVisibility}
      />
    </div>
  )
}

export default Main
