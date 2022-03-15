import React from "react"
import "../Main.css"
import { TxtFeatures } from "./Text/TxtFeatures"
import { IMG_LAYER, SHAPE_LAYER, TEXT_LAYER } from "../Constants"
import { MainFeatures } from "./DefaultLayer/DefaultLayerFeatures"

export const Properties = ({ id, selected, layers, propertyVisibility }) => {
  return (
    <div className="propertiesContainer">
      <div className="properties">
        {id === SHAPE_LAYER && propertyVisibility && (
          <MainFeatures selected={selected} layers={layers} />
        )}
        {id === TEXT_LAYER && propertyVisibility && (
          <TxtFeatures selected={selected} layers={layers} />
        )}
      </div>
    </div>
  )
}
