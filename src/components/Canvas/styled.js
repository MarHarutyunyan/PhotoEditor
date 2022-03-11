import styled from "styled-components"

export const Container = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
`

export const Canvas = styled.div`
  > * {
    position: absolute;
  }
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  overflow: hidden;
`
