import React from "react"
import { useSelector } from "react-redux"
import { Canvas } from "./components/Canvas/Canvas"
import { Layers } from "./components/Layers/Layers"
import { Properties } from "./components/Properties"
import * as Styled from "./Container-Main.styled"

const ContainerMain = () => {
  const data = useSelector((state) => state.data)
  const uiData = useSelector((state) => state.ui)
  const layers = data.layers
  const { selected } = uiData

  return (
    <Styled.Container>
      <Layers layers={layers} selected={selected} />
      <Canvas selected={selected} />
      <Properties selected={selected} layers={layers} />
    </Styled.Container>
  )
}

export default ContainerMain
