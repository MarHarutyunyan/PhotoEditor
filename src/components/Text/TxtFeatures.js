import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AddingColor } from "./AddingColor";
import { AddingFonts } from "./AddingFonts";
import { AddingHighlightColor } from "./AddingHighlightColor";
import { AddingLetterSpacing } from "./AddingLetterSpaceing";
import { AddingLineHeights } from "./AddingLineHeight";
import { AddingSize } from "./AddingSize";
export const TxtFeatures = () => {
  const features = useSelector((state) => state.data.properties.text);
  const txtFeatures = Object.keys(features);
  const [OpenFeature, setOpenFeature] = useState(false);
  const [selectedFeature, setFeature] = useState("");
  const openFeaturesProperties = (Feature) => {
    setFeature(Feature);
    setOpenFeature(true);
  };
  return (
    <div id="txtFeautures">
      <ul>
        {txtFeatures.map((Feature, i) => (
          <li
            id={Feature}
            onClick={() => openFeaturesProperties(Feature)}
            key={i}
            className={selectedFeature === Feature ? null : "hiddenChild"}
          >
            {Feature}
            {selectedFeature === "Fonts" && OpenFeature ? (
              <AddingFonts />
            ) : selectedFeature === "Size" && OpenFeature ? (
              <AddingSize />
            ) : selectedFeature === "Colors" && OpenFeature ? (
              <AddingColor />
            ) : selectedFeature === "HighlightColors" && OpenFeature ? (
              <AddingHighlightColor />
            ) : selectedFeature === "LineHeight" && OpenFeature ? (
              <AddingLineHeights />
            ) : selectedFeature === "LetterSpacing" && OpenFeature ? (
              <AddingLetterSpacing />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};
