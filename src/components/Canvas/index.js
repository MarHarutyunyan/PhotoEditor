import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SHAPE_LAYER, TEXT_LAYER } from "../../config/Constants";
import ShapeComponent from "../ShapeComponent";
import { getLayers, getCanvasSize } from "../../store/selectors";
import TextComponent from "../TextComponent";
import { selectedLayerAction } from "../../store/actions/actions";
import * as Styled from "./styled";

export const Canvas = () => {
  const canvasNode = useRef();
  const dispatch = useDispatch();
  const layers = useSelector(getLayers);

  const { width, height } = useSelector(getCanvasSize);

  const selectLayer = (index) => dispatch(selectedLayerAction(index));

  return (
    <Styled.Container>
      <Styled.Canvas width={width} height={height} ref={canvasNode}>
        {layers.map((layer, index) => (
          <Styled.CanvasItemWrapper
            key={index}
            width={layer.width}
            height={layer.height}
            x={layer.coords.x}
            y={layer.coords.y}
            layer={layer}
            onSelect={() => selectLayer(index)}
          >
            {layer.type === SHAPE_LAYER && <ShapeComponent index={index} />}
            {layer.type === TEXT_LAYER && <TextComponent index={index} />}
          </Styled.CanvasItemWrapper>
        ))}
      </Styled.Canvas>
    </Styled.Container>
  );
};
