import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Canvas } from "./Canvas";
import { Layers } from "./Layers";
import "../Main.css";
import { Properties } from "./Properties";
export default function Main() {
  const [id, setId] = useState("");
  const data = useSelector((state) => state.data);
  const [layers, setLayers] = useState(data.layers);
  return (
    <div className="container">
      <Layers setId={setId} layers={layers} setLayers={setLayers}/>
      <Canvas layers={layers} setLayers={setLayers} />
      <Properties id={id} />
    </div>
  );
}