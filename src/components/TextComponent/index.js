import React, { useEffect, useRef } from "react";
import * as Styled from "./styled";
import { getLayers, getSelectedLayerIndex } from "../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import { changeTextAction } from "../../store/actions/actions";

const TextComponent = ({ index }) => {
  const dispatch = useDispatch();
  const layers = useSelector(getLayers);
  const setText = (value) => dispatch(changeTextAction(index, value));
  const textNode = useRef(null);
  const selected = useSelector(getSelectedLayerIndex);

  useEffect(() => {
    if (selected.includes(index)) {
      textNode.current.focus();
      console.log(textNode);
    }
  }, [selected]);

  return (
    <Styled.Textarea
      placeholder="Edit Text"
      onChange={(event) => setText(event.target.value)}
      value={layers[index].meta.text}
      onClick={onselect}
      layer={layers[index]}
      ref={textNode}
    />
  );
};

export default TextComponent;
