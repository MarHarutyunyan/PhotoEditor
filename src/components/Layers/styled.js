import { ActionButton } from "../CommonStyles"
import styled from "styled-components"

export const LayerButton = ActionButton

export const LayersContainer = styled.div`
  height: 100%;
`

export const Layers = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  > ul {
    width: 90%;
    height: 90%;
    overflow-y: auto;
    margin: 0 0 10px 0;

    li {
      margin: 0 5px 10px 5px;
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
  }
`
