import styled from "styled-components"

export const Shape = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.backgroundColor};
  top: ${(props) => props.y};
  left: ${(props) => props.x};
`
