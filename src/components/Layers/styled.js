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
  height: 100%;
  width:20%;
`;
export const Layers = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  > ul {
    overflow-y: auto;
    margin: 10px;
    padding: 0;
    padding-inline-start: 0;
    li {
      margin: 0 5px 10px 5px;
      padding: 15px 0;
      background-color: #2B2B2B;
      color: #fff;
      cursor: pointer;
      border-radius: 30px;
      text-align: center;
    }
    .selected {
      background-color: #FF0000;
      color: #fff;
    }
  }
`;