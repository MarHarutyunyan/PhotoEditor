import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddingColor } from "./AddingColor";
import { AddingFonts } from "./AddingFonts";

export const TxtFeatures = () => {
  const features = useSelector((state) => state.data.properties.text);
  const txtFeatures = Object.keys(features);
  const [OpenFeature, setOpenFeature] = useState(false);
  const [a, setCount] = useState(" ");
  let component;
  const openFeaturesProperties = (Feature) => {
    setCount(Feature);
    setOpenFeature(true);
  };
  const open = () => {
    return component;
  };
  return (
    <div id="txtFeautures">
      <ul>
        {txtFeatures.map((Feature, i) => (
          <li
            id={Feature}
            onClick={() => openFeaturesProperties(Feature)}
            key={i}
            className={a === Feature ? null : 'a'}
          >
            {Feature}
            {a === "Fonts" && OpenFeature ? (
              <AddingFonts />
            ) : a === "Colors" && OpenFeature ? (
              <AddingColor />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};
