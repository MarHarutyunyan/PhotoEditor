import React from "react";
import "../Main.css";
import { TxtFeatures } from "./Text/TxtFeatures";
import { ImgFeatures } from "./ImgFeatures";
import { IMG, TEXT } from "./Constants";

export const Properties = ({ id,layers, selected, setSelected }) => {
// layers[selected]
  return (
    <div className="propertiesContainer">
      <div className="properties">
        {/* {console.log(layers[selected])
        } */}
        {id === TEXT && <TxtFeatures selected={selected} />}
        {id === IMG && <ImgFeatures />}
      </div>
    </div>
  );
};
