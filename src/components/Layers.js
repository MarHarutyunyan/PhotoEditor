import React, { useState } from "react";
import { Tools } from "./Tools";

export const Layers = ({ setId, layers, selected, setSelected, textarea1 }) => {
  const [OpenTools, setOpenTools] = useState(false);
  const show = () => setOpenTools(true);

  function selectLayer(index) {
    if (textarea1) {
      setSelected([index]);
      textarea1.current.children[index].focus();
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
