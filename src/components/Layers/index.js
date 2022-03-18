import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddLayerMenu } from "../AddLayerMenu";
import * as Styled from "./styled";
import { getLayers, getSelectedLayerIndex } from "../../store/selectors";
import { selectedLayerAction } from "../../store/actions/actions";

export const Layers = () => {
  const layers = useSelector(getLayers);
  const selected = useSelector(getSelectedLayerIndex);
  const dispatch = useDispatch();
  const [menuVisible, setMenuVisibility] = useState(false);
  const toggleMenu = () => setMenuVisibility((prevState) => !prevState);

  const selectLayer = (index) => (event) => {
    const arr = [...selected];
    if (event.shiftKey) {
      const layerIndex = arr.indexOf(index);
      if (layerIndex !== -1) {
        if (arr.length > 1) {
          arr.splice(layerIndex, 1);
        }
      } else {
        arr.push(index);
      }
      dispatch(selectedLayerAction(arr));
      return;
    }
    dispatch(selectedLayerAction([index]));
  };

  return (
    <Styled.LayersContainer>
      <Styled.Layers>
        <ul>
          {layers.map((_, index) => (
            <li
              className={selected.includes(index) ? "selected" : null}
              key={index}
              onClick={selectLayer(index)}
            >
              {index + 1}) {layers[index].title}
            </li>
          ))}
        </ul>
        <Styled.LayerButton onClick={toggleMenu}>
          Add Layer
          {menuVisible ? <AddLayerMenu index={layers.length} /> : null}
        </Styled.LayerButton>
      </Styled.Layers>
    </Styled.LayersContainer>
  );
};
