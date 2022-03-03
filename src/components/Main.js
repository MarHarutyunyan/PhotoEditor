import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Canvas } from "./Canvas";
import { Layers } from "./Layers";
import "../Main.css";
import { Properties } from "./Properties";

export default function Main() {
  const [id, setId] = useState("");
  return (
    <div className="container">
      <Layers setId={setId}/>
      <Canvas />
      <Properties id={id} />
    </div>
  );
}
