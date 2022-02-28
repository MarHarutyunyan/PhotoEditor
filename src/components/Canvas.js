import React, { useState, useRef } from "react";
import { render } from "react-dom";
import { Stage, Layer } from "react-konva";
import { StickyNote } from "./Text/StickyNote";
import "../Main.css";

export const Canvas = ({ layers}) => {

  const [text, setText] = useState("Click to resize. Double click to edit.");
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [selected, setSelected] = useState(false);
  // const data = useSelector((state) => state.data);
  // const [layers, setLayers] = useState(data.layers);
  return (
    <Stage
      width={900}
      height={700}
      onClick={(e) => {
        if (e.currentTarget._id === e.target._id) {
          setSelected(false);
        }
      }}
    >
      <Layer background="#fff">
        {layers.map((layer) =>
          layer.type === "TEXT" ? (
            <StickyNote
              x={50}
              y={50}
              text={text}
              colour="transparent"
              onTextChange={(value) => setText(value)}
              width={width}
              height={height}
              selected={selected}
              onTextResize={(newWidth, newHeight) => {
                setWidth(newWidth);
                setHeight(newHeight);
              }}
              onClick={() => {
                setSelected(!selected);
              }}
              onTextClick={(newSelected) => {
                setSelected(newSelected);
              }}
            />
          ) : (
            <StickyNote
              x={50}
              y={50}
              text={text}
              colour="black"
              onTextChange={(value) => setText(value)}
              width={width}
              height={height}
              selected={selected}
              onTextResize={(newWidth, newHeight) => {
                setWidth(newWidth);
                setHeight(newHeight);
              }}
              onClick={() => {
                setSelected(!selected);
              }}
              onTextClick={(newSelected) => {
                setSelected(newSelected);
              }}
            />
          )
        )}
      </Layer>
    </Stage>
  );
};
