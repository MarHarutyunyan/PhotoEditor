import React, { useEffect, useRef, useCallback, useState } from "react";
import * as Styled from "./styled";
import {
  getLayers,
  getSelectedLayerIndex,
  getTxtCoords,
} from "../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTextAction,
  changeTxtCoordsAction,
} from "../../store/actions/actions";

const TextComponent = ({ index }) => {
  const dispatch = useDispatch();
  const layers = useSelector(getLayers);
  const setText = (value) => dispatch(changeTextAction(index, value));
  const textNode = useRef(null);
  const selected = useSelector(getSelectedLayerIndex);
  const coords = useSelector(getTxtCoords);
  
  useEffect(() => {
    if (selected.includes(index)) {
      textNode.current.focus();
    }
  }, [selected]);

  return (
    <Styled.Textarea
      placeholder="Edit Text"
      onChange={(event) => setText(event.target.value)}
      // onDoubleClick={moveTxt}
      value={layers[index].meta.text}
      onClick={onselect}
      layer={layers[index]}
      ref={textNode}
    />
  );
};

export default TextComponent;
