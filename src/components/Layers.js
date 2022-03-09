import React, { useState, useContext } from "react";
import { Tools } from "./Tools";
import { NumberContext } from "./Main";
export const Layers = ({ setId, layers, selected, setSelected }) => {
  const [OpenTools, setOpenTools] = useState(false);
  const show = () => setOpenTools(true);
  const context = useContext(NumberContext);
  function selectLayer(index) {
    if (context.textDom) {
      setSelected([index]);
      context.textDom.current.children[index].focus();
    }
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
        {OpenTools ? <Tools setId={setId} /> : null}
      </div>
    </div>
  );
};