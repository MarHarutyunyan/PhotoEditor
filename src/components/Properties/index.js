import React from "react"
import { TxtFeatures } from "../Text/TxtFeatures"
import { IMG_LAYER, SHAPE_LAYER, TEXT_LAYER } from "../../config/Constants"
import { MainFeatures } from "../DefaultLayer/DefaultLayerFeatures"
import * as Styled from "./styled"

export const Properties = ({ selected, layers, propertyVisibility }) => {
  if (selected.length > 1) {
    return <div>Multiple Layers Seleted</div>
  }

  const selectedLayerType = layers[selected[0]].type

  return (
    <Styled.PropertiesContainer>
      {selectedLayerType === SHAPE_LAYER && propertyVisibility && (
        <MainFeatures selected={selected} layers={layers} />
      )}
      {selectedLayerType === TEXT_LAYER && propertyVisibility && (
        <TxtFeatures selected={selected} layers={layers} />
      )}
      {selectedLayerType === IMG_LAYER && <div>Image Props</div>}
    </Styled.PropertiesContainer>
  )
}
