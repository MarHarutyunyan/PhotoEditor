import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Canvas = styled.div`
  > * {
    position: absolute;
  }
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;
  overflow: hidden;
`;

export const CanvasItemWrapper = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
`;
