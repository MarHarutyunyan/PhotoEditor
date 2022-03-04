import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Tools } from "./Tools";
export const Layers = ({ setId, layers, setLayers }) => {
  const [OpenTools, setOpenTools] = useState(false);
  const show = () => setOpenTools(true);
  return (
    <div id="layersContainer">
      <div id="layers">
        <ul>
          {layers.map((_, i) => (
            <li className={layers[i].selected ? "selected" : ""} id={i} key={i}>
              Layer {i + 1}
            </li>
          ))}
        </ul>
        <button id="layer" onClick={() => show()}>
          Add Layer
        </button>
        {OpenTools ? <Tools setId={setId} /> : null}
      </div>
    </div>
  );
};