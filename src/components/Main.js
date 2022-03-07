import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Canvas } from "./Canvas";
import { Layers } from "./Layers";
import "../Main.css";
import { Properties } from "./Properties";
export default function Main() {
  const [id, setId] = useState("");
  const data = useSelector((state) => state.data);
  const [layers, setLayers] = useState(data.layers);
  const [selected, setSelected] = useState([]);
  const [textarea1, setTextarea] = useState(null);
  return (
    <div className="container">
      <Layers
        setId={setId}
        layers={layers}
        setLayers={setLayers}
        selected={selected}
        setSelected={setSelected}
        textarea1={textarea1}
      />
      <Canvas
        layers={layers}
        setSelected={setSelected}
        textarea1={textarea1}
        setTextarea={setTextarea}
      />
      <Properties id={id} selected={selected} />
    </div>
  );
}
