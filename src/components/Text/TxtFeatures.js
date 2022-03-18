import React, { useState } from "react";
import { useSelector } from "react-redux";
import {COLOR,FONT,HIGHLIGHTCOLOR,LETTERSPACING,LINEHEIGHT,SIZE} from "../../config/Constants";
import { AddingColor } from "./AddingColor";
import { AddingFonts } from "./AddingFonts";
import { AddingHighlightColor } from "./AddingHighlightColor";
import { AddingLetterSpacing } from "./AddingLetterSpaceing";
import { AddingLineHeight } from "./AddingLineHeight";
import { AddingSize } from "./AddingSize";
import * as Styled from "./styled";

export const TxtFeatures = ({ layers }) => {
  const features = useSelector((state) => state.ui.properties.text);
  const txtFeatures = Object.keys(features);
  const [OpenFeature, setOpenFeature] = useState(false);
  const [selectedFeature, setFeature] = useState("");

  const openFeaturesProperties = (Feature) => {
    setFeature(Feature);
    setOpenFeature(true);
  };

  return (
    <Styled.TxtFeatures>
      {txtFeatures.map((Feature, i) => (
        <Styled.TxtFeaturesList
          onClick={() => openFeaturesProperties(Feature)}
          key={i}
          Feature={Feature}
          selectedFeature={selectedFeature}
        >
          {Feature}
          {selectedFeature === FONT && OpenFeature ? (
            <AddingFonts layers={layers} />
          ) : selectedFeature === SIZE && OpenFeature ? (
            <AddingSize  layers={layers} />
          ) : selectedFeature === COLOR && OpenFeature ? (
            <AddingColor  layers={layers} />
          ) : selectedFeature === HIGHLIGHTCOLOR && OpenFeature ? (
            <AddingHighlightColor  layers={layers} />
          ) : selectedFeature === LINEHEIGHT && OpenFeature ? (
            <AddingLineHeight  layers={layers} />
          ) : selectedFeature === LETTERSPACING && OpenFeature ? (
            <AddingLetterSpacing  layers={layers} />
          ) : null}
        </Styled.TxtFeaturesList>
      ))}
    </Styled.TxtFeatures>
  );
};
