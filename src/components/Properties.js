import React from "react";
import "../Main.css";
import { TxtFeatures } from "./Text/TxtFeatures";
import { ImgFeatures } from "./ImgFeatures";
import { IMG, TEXT } from "./Constants";

export const Properties = ({ id, selected, layers}) => {
  return (
    <div className="propertiesContainer">
      <div className="properties">
        {id === TEXT && <TxtFeatures selected={selected} layers={layers} />}
        {id === IMG && <ImgFeatures />}
      </div>
    </div>
  );
};
