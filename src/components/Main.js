import React, { useState, useRef } from "react"
import { useSelector } from "react-redux"
import { Canvas } from "./Canvas/Canvas"
import { Layers } from "./Layers/Layers"
import "../Main.css"
import { Properties } from "./Properties"
import { SHAPE_LAYER } from "./Constants"

export const NumberContext = React.createContext()

export default function Main() {
  const [id, setId] = useState(SHAPE_LAYER)
  const data = useSelector((state) => state.data)
  const uiData = useSelector((state) => state.ui)
  const layers = data.layers
  const selected = uiData.selected
  const propertyVisibility = uiData.propertyVisibility
  const toolsVisibility = uiData.toolsVisibility

  return (
    <div className="container">
      <Layers
        setId={setId}
        layers={layers}
        selected={selected}
        toolsVisibility={toolsVisibility}
      />
      <Canvas selected={selected} setId={setId} />
      <Properties
        id={id}
        selected={selected}
        layers={layers}
        propertyVisibility={propertyVisibility}
      />
    </div>
  )
}
