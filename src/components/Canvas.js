import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { render } from "react-dom";
import { Stage, Layer } from "react-konva";
import { StickyNote } from "./Text/StickyNote";
import "../Main.css";

export const Canvas = () => {
  const [text, setText] = useState("not text");
  const [width, setWidth] = useState(250);
  const [height, setHeight] = useState(50);
  const [selected, setSelected] = useState(false);

  const data = useSelector((state) => state.data);
  const [layers, setLayers] = useState(data.layers);

  const changeLayerText = (index, value) => {
    data.layers[index].meta.TxtMeta.text = value;
    setLayers(data.layers[index].meta.TxtMeta.text);
  };

  const changeLayerSize = (newWidth, newHeight, index) => {
    data.layers[index].meta.TxtMeta.outWidth = newWidth;
    data.layers[index].meta.TxtMeta.outHeight = newHeight;
    setWidth(layers[index].meta.TxtMeta.width);
    setHeight(layers[index].meta.TxtMeta.height);
  };

  return (
    <div id="canvaContainer">
      {data.layers.map((layer, index) =>
        layer.type === "TEXT" ? (
          <input key={index} type="text" placeholder="Edit Text" id={index} />
        ) : (
          <div key={index}>Not Text</div>
        )
      )}
    </div>
  );
};

// <Stage
//   width={900}
//   height={700}
//   onClick={(e) => {
//     if (e.currentTarget._id === e.target._id) {
//       setSelected(false);
//     }
//   }}
// >
//   <Layer background="#fff">
//     {data.layers.map((layer, index) =>
//       layer.type === "TEXT" ? (
//         // <StickyNote
//         //   key={index}
//         //   x={data.layers[index].coords.x}
//         //   y={data.layers[index].coords.y}
//         //   text={layer.meta.TxtMeta.text}
//         //   colour="transparent"
//         //   onTextChange={(value) => changeLayerText(index, value)}
//         //   width={width}
//         //   height={height}
//         //   selected={selected}
//         //   onTextResize={(newWidth, newHeight) =>
//         //     changeLayerSize(newWidth, newHeight,index)
//         //   }
//         //   onClick={() => {
//         //     setSelected(!selected);
//         //   }}
//         //   onTextClick={(newSelected) => {
//         //     setSelected(newSelected);
//         //   }}
//         //   fontSize={layer.meta.TxtMeta.fontSize}
//         //   fontFamily={layer.meta.TxtMeta.fontFamily}
//         // />
//         <div contenteditable="true">masha</div>
//       ) : (
//         <StickyNote
//           x={50}
//           y={50}
//           text={text}
//           colour="transparent"
//           onTextChange={(value) => setText(value)}
//           width={width}
//           height={height}
//           selected={selected}
//           onTextResize={(newWidth, newHeight) => {
//             setWidth(newWidth);
//             setHeight(newHeight);
//           }}
//           onClick={() => {
//             setSelected(!selected);
//           }}
//           onTextClick={(newSelected) => {
//             setSelected(newSelected);
//           }}
//         />
//       )
//     )}
//   </Layer>
// </Stage>
