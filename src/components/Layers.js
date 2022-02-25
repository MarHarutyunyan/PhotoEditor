import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Tools } from "./Tools";


export const Layers = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [layers, setLayers] = useState(data.layers);

  const addLayer = () => {
    setLayers([...data.layers]);
  };

  const [OpenTools, setOpenTools] = React.useState(false);
  const show = () => setOpenTools(true);

  return (
    <div id="layersContainer">
      <div id="layers">
        <ul>
          {layers.map((_, i) => (
            <li key={i}>Layer {i + 1}</li>
          ))}
        </ul>
        <button
          id="layer"
          onClick={
            (() => addLayer(), show)
          }
        >
          Add Layer
        </button>
        {OpenTools ? <Tools /> : null}
      </div>
    </div>
  );
};
