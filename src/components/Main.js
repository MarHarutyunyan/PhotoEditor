import React, { useState,useRef } from "react";
import { useSelector } from "react-redux";
import { Canvas } from "./Canvas";
import { Layers } from "./Layers";
import "../Main.css";
import { Properties } from "./Properties";
export const NumberContext = React.createContext();
export default function Main() {
  const [id, setId] = useState("");
  const data = useSelector((state) => state.data);
  const [layers, setLayers] = useState(data.layers);
  const [selected, setSelected] = useState([]);
  const [textDom, setTextDom] = useState(useRef(null));
  return (
      <div className="container">
        <Layers
          setId={setId}
          layers={layers}
          selected={selected}
          setSelected={setSelected}
        />
        <Canvas
          layers={layers}
          setSelected={setSelected}
          selected={selected}
          textDom={textDom}
        />
        <Properties id={id} selected={selected} layers={layers} />
      </div>
  );
}