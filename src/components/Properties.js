import React from "react";
import "../Main.css";
import { TxtFeatures } from "./Text/TxtFeatures";
import { ImgFeatures } from "./ImgFeatures";
import { IMG, DEFAULTLAYER, TEXT } from "./Constants";
import { MainFeatures } from "./DefaultLayer/DefaultLayerFeatures";

export const Properties = ({ id, selected, layers, propertyVisibility }) => {
  return (
    <div className="propertiesContainer">
      <div className="properties">
        {id === DEFAULTLAYER && propertyVisibility && (
          <MainFeatures selected={selected} layers={layers} />
        )}
        {id === TEXT && propertyVisibility && (
          <TxtFeatures selected={selected} layers={layers} />
        )}
        {/* {id === IMG && propertyVisibility && <ImgFeatures />} */}
      </div>
    </div>
  );
};
