import styled from "styled-components";

export const PropertiesContainer = styled.div`
  width: 20%;
  height: 90vh;
  overflow-y: auto;
  ul {
    min-height: 100%;
    margin: 0 10px 10px 10px;
    padding: 15px 0;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      margin: 0 10px 10px 10px;
      padding: 15px 0;
      background-color: #2b2b2b;
      color: #fff;
      cursor: pointer;
      border-radius: 30px;
    }
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
`;

export const MultipleLayersSelected = styled.div`
  background: red;
`;
