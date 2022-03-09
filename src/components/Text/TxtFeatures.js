import React, { useState } from "react";
import { useSelector } from "react-redux";
import { COLOR, FONT, HIGHLIGHTCOLOR, LETTERSPACING, LINEHEIGHT, SIZE } from "../Constants";
import { AddingColor } from "./AddingColor";
import { AddingFonts } from "./AddingFonts";
import { AddingHighlightColor } from "./AddingHighlightColor";
import { AddingLetterSpacing } from "./AddingLetterSpaceing";
import { AddingLineHeights } from "./AddingLineHeight";
import { AddingSize } from "./AddingSize";
export const TxtFeatures = ({selected,layers}) => {
  const features = useSelector((state) => state.data.properties.text);
  const txtFeatures = Object.keys(features);
  const [OpenFeature, setOpenFeature] = useState(false);
  const [selectedFeature, setFeature] = useState("");
  const openFeaturesProperties = (Feature) => {
    setFeature(Feature);
    setOpenFeature(true);
  };
  return (
    <div>
      <ul>
        {txtFeatures.map((Feature, i) => (
          <li
            onClick={() => openFeaturesProperties(Feature)}
            key={i}
            className={selectedFeature === Feature ? null : "hiddenChild"}
          >
            {Feature}
            {selectedFeature === FONT && OpenFeature ? (
              <AddingFonts selected={selected} layers={layers} />
            ) : selectedFeature === SIZE && OpenFeature ? (
              <AddingSize selected={selected} />
            ) : selectedFeature === COLOR && OpenFeature ? (
              <AddingColor selected={selected} />
            ) : selectedFeature === HIGHLIGHTCOLOR && OpenFeature ? (
              <AddingHighlightColor selected={selected} />
            ) : selectedFeature === LINEHEIGHT && OpenFeature ? (
              <AddingLineHeights selected={selected} />
            ) : selectedFeature === LETTERSPACING && OpenFeature ? (
              <AddingLetterSpacing selected={selected} />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};
