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
    margin: 0;
    padding: 0;
    padding-inline-start: 0;

    li {
      list-style-type: none;
      margin: 10px 0;
      padding: 8px 0;
      background-color: #2b2b2b;
      color: #fff;
      cursor: pointer;
      border-radius: 8px;
      text-align: center;
    }

    .selected {
      background-color: #ff0000;
      color: #fff;
    }
  }
`;
