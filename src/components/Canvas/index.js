import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SHAPE_LAYER, TEXT_LAYER } from "../../config/Constants";
import ShapeComponent from "../ShapeComponent";
import { getLayers, getCanvasSize, getTxtCoords } from "../../store/selectors";
import TextComponent from "../TextComponent";
import { changeTxtCoordsAction, selectedLayerAction } from "../../store/actions/actions";
import * as Styled from "./styled";
export const Canvas = () => {
  const canvasNode = useRef();
  const dispatch = useDispatch();
  const layers = useSelector(getLayers);
  const { width, height } = useSelector(getCanvasSize);
  const selectLayer = (index) => dispatch(selectedLayerAction([index]));
  const coords = useSelector(getTxtCoords)
  var mousePosition;

  var offset = [coords.x, coords.y];
  var isDown = false;
  const myTextInput = useRef(null);

  const moveTxt = () => {
    myTextInput.current.addEventListener('mousedown', function (e) {
      isDown = true;
      offset = [
        myTextInput.current.offsetLeft - e.clientX,
        myTextInput.current.offsetTop - e.clientY
      ];
    }, true);
    canvasNode.current.addEventListener('mouseup', function () {
      isDown = false;
    }, true);
    canvasNode.current.addEventListener('mousemove', function (event) {
      event.preventDefault();
      if (isDown) {
        mousePosition = {
          x: event.clientX,
          y: event.clientY
        };
        dispatch(changeTxtCoordsAction({ x: mousePosition.x + offset[0], y: mousePosition.y + offset[1] }))
      }
    }, true);
  }

  return (
    <Styled.Container>
      <Styled.Canvas width={width} height={height} ref={canvasNode} >
        {layers.map((layer, index) => (
          <Styled.CanvasItemWrapper
            ref={myTextInput}
            key={index}
            width={layer.width}
            height={layer.height}
            x={layer.coords.x}
            y={layer.coords.y}
            layer={layer}
            onClick={() => selectLayer(index)}
            onDoubleClick={moveTxt}
          >
            {layer.type === SHAPE_LAYER && <ShapeComponent index={index} />}
            {layer.type === TEXT_LAYER && <TextComponent index={index} />}
          </Styled.CanvasItemWrapper>
        ))}
      </Styled.Canvas>
    </Styled.Container>
  );
};
