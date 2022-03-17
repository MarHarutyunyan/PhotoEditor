import styled from "styled-components";

export const TxtFeaturesList = styled.li`
  > div {
    display: ${(props) =>
      props.selectedFeature === props.Feature ? "inherit" : "none"};
  }
  margin: 0 5px 10px 5px;
  padding: 15px 0;
  background-color: #2b2b2b;
  color: #fff;
  cursor: pointer;
  border-radius: 30px;
  text-align: center;
  list-style: none;
`;
export const TxtFeatures = styled.ul`
  margin: 0 10px 10px 10px;
  padding: 15px 0;
  color: #fff;
  cursor: pointer;
  list-style: none;
`;
