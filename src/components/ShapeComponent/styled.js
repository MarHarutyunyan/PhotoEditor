import styled from "styled-components"

export const Shape = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
  width: 100%;
  height: 100%;
  position: absolute;
`
