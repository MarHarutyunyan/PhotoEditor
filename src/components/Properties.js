import React from "react";
import "../Main.css";
import { TxtFeatures } from "./Text/TxtFeatures";
import { ImgFeatures } from "./ImgFeatures";

export const Properties = ({ id, selected }) => {
  return (
    <div className="propertiesContainer">
      <div className="properties">
        {id === "TEXT" && <TxtFeatures selected={selected} />}
        {id === "IMG" && <ImgFeatures />}
      </div>
    </div>
  );
};
