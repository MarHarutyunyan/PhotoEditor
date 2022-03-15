import React from "react"
import { useSelector } from "react-redux"
import { TxtFeatures } from "../Text/TxtFeatures"
import { IMG_LAYER, SHAPE_LAYER, TEXT_LAYER } from "../../config/Constants"
import ShapeProps from "../ShapeProps"
import ImgProps from "../ImgProps"
import * as Styled from "./styled"
import { getLayers, getSelectedLayerIndex } from "../../store/selectors"

export const Properties = () => {
  const layers = useSelector(getLayers)
  const selected = useSelector(getSelectedLayerIndex)

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
