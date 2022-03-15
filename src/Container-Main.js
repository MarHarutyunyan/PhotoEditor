import React from "react"
import { Canvas } from "./components/Canvas"
import { Layers } from "./components/Layers"
import { Properties } from "./components/Properties"
import * as Styled from "./Container-Main.styled"

const ContainerMain = () => {
  return (
    <Styled.Container>
      <Layers />
      <Canvas />
      <Properties />
    </Styled.Container>
  )
}

export default ContainerMain
