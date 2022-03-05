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
  return (
    <div className="container">
      <Layers
        setId={setId}
        layers={layers}
        setLayers={setLayers}
        selected={selected}
      />
      <Canvas layers={layers} setLayers={setLayers} setSelected={setSelected} />
      <Properties id={id} selected={selected} />
    </div>
  );
}
