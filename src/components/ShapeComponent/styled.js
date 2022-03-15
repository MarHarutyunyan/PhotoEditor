import styled from "styled-components"

export const Shape = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: ${(props) => props.backgroundColor};
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
`
