import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Main.css";
import { DEFAULTLAYER, TEXT } from "./Constants";
export const Canvas = ({ layers, selected, canvaNodes, setId }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const selectLayer = (index) => {
    dispatch({ type: "SET_SELECTED", value: [index] });
    dispatch({ type: "SET_PROPERTY_VISIBILITY", value: true });
    setId(layers[index].type);
  };
  const setText = (index, value) => {
    dispatch({ type: "CHANGE_TEXT", index, value });
  };
  const getStyle = (i) => {
    const layer = layers[i].meta;
    return {
      width: layer.width,
      height: layer.height,
      color: layer.color,
      fontSize: layer.fontSize,
      fontFamily: layer.fontFamily,
      backgroundColor: layer.highlightColor,
      letterSpacing: layer.letterSpacing,
      lineHeight: layer.lineHeight,
    };
  };
  useEffect(() => {
    if (canvaNodes.current.children.length) {
      canvaNodes.current.children[selected[0]].focus();
    }
  }, [selected]);

  return (
    <div className="canvasContainer">
      <div
        className=" canvas"
        ref={canvaNodes}
        style={{
          width: layers[0].meta.width,
          height: layers[0].meta.height
        }}
      >
        {data.layers.map((layer, index) =>
          layer.type === DEFAULTLAYER ? (
            <div
              style={getStyle(index)}
              onClick={() => selectLayer(index)}
              key={index}
              className="defaultLayer"
            ></div>
          ) : layer.type === TEXT ? (
            <textarea
              style={getStyle(index)}
              key={index}
              type="text"
              placeholder="Edit Text"
              onChange={(event) => setText(index, event.target.value)}
              onClick={() => selectLayer(index)}
            />
          ) : (
            <div key={index}>Not Text</div>
          )
        )}
      </div>
    </div>
  );
};
