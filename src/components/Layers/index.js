import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddLayerMenu } from "../AddLayerMenu";
import * as Styled from "./styled";
import { getLayers, getSelectedLayerIndex } from "../../store/selectors";
import { changeLayersOrder, selectedLayerAction } from "../../store/actions/actions";

export const Layers = () => {
  const layers = useSelector(getLayers);
  const selected = useSelector(getSelectedLayerIndex);
  const dispatch = useDispatch();
  const [menuVisible, setMenuVisibility] = useState(false);
  const toggleMenu = () => setMenuVisibility((prevState) => !prevState);
  let dragItem, dragOverItem;

  const dragStart = (position) => {
    dragItem = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem = position;
    e.target.style.border = "2px solid red"; //<=
  };

  const dragLeave = (e) => {
    e.target.style.border = null;
  };

  const drop = () => {
    if (dragOverItem) {
      dispatch(changeLayersOrder((dragItem, dragOverItem)));
      dispatch(selectedLayerAction([dragOverItem]));
    }
  };

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
              onDragStart={() => dragStart(index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              onDragLeave={(e) => dragLeave(e)}
              draggable={index ? true : false}
              className={selected.includes(index) ? "selected" : ""}
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
