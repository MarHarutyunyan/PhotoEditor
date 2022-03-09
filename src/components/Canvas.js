import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Main.css";
export const Canvas = ({ layers, setSelected, selected, textDom }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const selectLayer = (index) => {
    setSelected([index]);
  };
  const setText = (index, value) => {
    dispatch({ type: "CHANGE_TEXT", index, value });
  };
  const getStyle = (i) => {
    const layer = layers[i].meta.TxtMeta;
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
    if (textDom.current.children.length) {
      textDom.current.children[selected[0]].focus();
    }
  }, [selected]);
  return (
    <div className="canvaContainer" ref={textDom}>
      {data.layers.map((layer, index) =>
        layer.type === "TEXT" ? (
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
  );
};
