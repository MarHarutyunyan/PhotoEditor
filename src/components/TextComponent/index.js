import React, { useEffect, useRef, useCallback, useState } from "react";
import * as Styled from "./styled";
import { getLayers, getSelectedLayerIndex, getTxtCoords } from "../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import { changeTextAction, changeTxtCoordsAction } from "../../store/actions/actions";

const TextComponent = ({ index }) => {
  const dispatch = useDispatch();
  const layers = useSelector(getLayers);
  const setText = (value) => dispatch(changeTextAction(index, value));
  const textNode = useRef(null);
  const selected = useSelector(getSelectedLayerIndex);
  const coords = useSelector(getTxtCoords)

  // const [ref, mousePosition] = useMousePosition();

  // const moveTxt = (mousePosition) => {
  //   console.log();
  //   changeTxtCoordsAction({ x: mousePosition.x, y: mousePosition.y })
  // }

  // useEffect(() => {
  //   // do something with the mouse position values here
  //   console.log(mousePosition);
  //   changeTxtCoordsAction({ x: mousePosition.x, y: mousePosition.y })
  //   moveTxt(mousePosition)
  // }, [mousePosition]);


  // useEffect(() => {
  //   window.addEventListener("mousemove", logMousePosition(e));
  //   return () => {
  //     window.removeEventListener("mousemove", logMousePosition(e));
  //   };
  // }, [])

  // const logMousePosition = e => {
  //   changeTxtCoordsAction({ x: e.clientX, y: e.clientY })
  //   console.log(coords);
  // };


  // const reactOnKeyboard = () => {
  //   switch (direction.code) {
  //     case "ArrowLeft":
  //       changeTxtCoordsAction({ x: coords.x - delta, y: coords.y })
  //       break;
  //     case "ArrowRight":
  //       changeTxtCoordsAction({ x: coords.x + delta, y: coords.y })
  //       break;
  //     case "ArrowUp":
  //       changeTxtCoordsAction({ x: coords.x, y: coords.y - delta })
  //       break;
  //     case "ArrowDown":
  //       changeTxtCoordsAction({ x: coords.x, y: coords.y + delta })
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // const moveTitleToDown = () => changeTxtCoordsAction({ x: coords.x, y: coords.y + delta })

  // const moveTitleToRight = () => changeTxtCoordsAction({ x: coords.x + delta, y: coords.y })

  // const moveTitleToLeft = () => changeTxtCoordsAction({ x: coords.x - delta, y: coords.y })

  // const moveTitleToUp = () => changeTxtCoordsAction({ x: coords.x, y: coords.y - delta })

  useEffect(() => {
    if (selected.includes(index)) {
      textNode.current.focus();
      console.log(textNode.current);
    }
  }, [selected]);

  return (
    <Styled.Textarea
      placeholder="Edit Text"
      onChange={(event) => setText(event.target.value)}
      // onDoubleClick={moveTxt}
      onClick={onselect}
      layer={layers[index]}
      ref={textNode}
    />
  );
};

export default TextComponent;
