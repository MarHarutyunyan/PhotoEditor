import React from "react";
import { Html } from "react-konva-utils";

function getStyle(width, height,fontFamily,fontSize) {
  const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  const baseStyle = {
    width: `${width}px`,
    height: `${height}px`,
    border: "none",
    padding: "0px",
    margin: "0px",
    background: "none",
    outline: "none",
    resize: "none",
    colour: "black",
    fontSize: `${fontSize}`,
    fontFamily: `${fontFamily}`,
  };
  if (isFirefox) {
    return baseStyle;
  }
  return {
    ...baseStyle,
    margintop: "-4px",
  };
}

export function EditableTextInput({
  x,
  y,
  width,
  height,
  value,
  onChange,
  onKeyDown,
  fontSize,
  fontFamily,
}) {
  const style = getStyle(width, height, fontFamily, fontSize);
  return (
    <Html groupProps={{ x, y }}>
      <textarea
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        style={style}
      />
    </Html>
  );
}
