import React from "react"
import { TxtFeatures } from "../Text/TxtFeatures"
import { IMG_LAYER, SHAPE_LAYER, TEXT_LAYER } from "../../config/Constants"
import ShapeProps from "../ShapeProps"
import ImgProps from "../ImgProps"
import * as Styled from "./styled"

export const Properties = ({ selected, layers }) => {
  if (selected.length > 1) {
    return (
      <Styled.MultipleLayersSelected>
        Multiple Layers Seleted
      </Styled.MultipleLayersSelected>
    )
  }

  const selectedLayerType = layers[selected[0]].type

  return (
    <Styled.PropertiesContainer>
      {selectedLayerType === SHAPE_LAYER && <ShapeProps />}
      {selectedLayerType === TEXT_LAYER && <TxtFeatures />}
      {selectedLayerType === IMG_LAYER && <ImgProps />}
    </Styled.PropertiesContainer>
  )
}
