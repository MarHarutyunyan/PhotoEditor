import { ActionButton } from "../CommonStyles";
import styled from "styled-components";
export const LayerButton = styled.button`
  width: 90%;
  padding: 15px 0;
  border-radius: 30px;
  cursor: pointer;
  border-color: transparent;
  position: relative;
`;
export const LayersContainer = styled.div`
  width: 20%;
  height: 90vh;
  overflow-y: auto;
`;
export const Layers = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  ul {
    width: 90%;
    height: 90%;
    overflow-y: auto;
    margin: 0 0 10px 0;
    li {
      margin: 0 10px 10px 10px;
      padding: 15px 0;
      background-color: #2b2b2b;
      color: #fff;
      cursor: pointer;
      border-radius: 30px;
      text-align: center;
    }
    .selected {
      background-color: #ff0000;
      color: #fff;
    }
    ::-webkit-scrollbar {
      width: 5px;
      cursor: pointer;
    }
    ::-webkit-scrollbar-thumb {
      background: #8f8e92;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;
