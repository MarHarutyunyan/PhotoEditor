import React, { useState, useContext,useEffect } from "react";
import { Tools } from "./Tools";
export const Layers = ({ setId, layers, selected, setSelected }) => {
  const [OpenTools, setOpenTools] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const show = () => {
    setOpenTools(true);
    setIsOpen(true);
  };
  function selectLayer(index) {
    setSelected([index]);
  }
  return (
    <div className="layersContainer">
      <div className="layers">
        <ul>
          {layers.map((_, index) => (
            <li
              className={selected.includes(index) ? "selected" : null}
              key={index}
              onClick={() => selectLayer(index)}
            >
              Layer {index + 1}
            </li>
          ))}
        </ul>
        <button className="layer" onClick={show}>
          Add Layer
        </button>
        {OpenTools ? (
          <Tools
            setId={setId}
            setSelected={setSelected}
            index={layers.length}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ) : null}
      </div>
    </div>
  );
};
