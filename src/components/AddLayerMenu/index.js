import React from "react"
import { useDispatch } from "react-redux"
import { EFFECTS, IMG_LAYER, TEXT_LAYER, VECTOR } from "../../config/Constants"
import { addLayerAction } from "../../store/actions/actions"
import * as Styled from "./styled"

export const AddLayerMenu = () => {
  const dispatch = useDispatch()
  const AddToData = (layerType) => dispatch(addLayerAction(layerType))

  return (
    <Styled.ToolsContainer>
      <div onClick={() => AddToData(IMG_LAYER)}>Img</div>
      <div onClick={() => AddToData(TEXT_LAYER)}>Text</div>
      <div onClick={() => AddToData(EFFECTS)}>Effects</div>
      <div onClick={() => AddToData(VECTOR)}>Vectors</div>
    </Styled.ToolsContainer>
  )
}
