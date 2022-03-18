import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  COLOR,
  FONT,
  HIGHLIGHTCOLOR,
  LETTERSPACING,
  LINEHEIGHT,
  SIZE,
} from "../../config/Constants";
import { AddingColor } from "./AddingColor";
import { AddingFonts } from "./AddingFonts";
import { AddingHighlightColor } from "./AddingHighlightColor";
import { AddingLetterSpacing } from "./AddingLetterSpaceing";
import { AddingLineHeight } from "./AddingLineHeight";
import { AddingSize } from "./AddingSize";
import * as Styled from "./styled";

export const TxtFeatures = ({ selected, layers }) => {
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
            <AddingFonts selected={selected} layers={layers} />
          ) : selectedFeature === SIZE && OpenFeature ? (
            <AddingSize selected={selected} layers={layers} />
          ) : selectedFeature === COLOR && OpenFeature ? (
            <AddingColor selected={selected} layers={layers} />
          ) : selectedFeature === HIGHLIGHTCOLOR && OpenFeature ? (
            <AddingHighlightColor selected={selected} layers={layers} />
          ) : selectedFeature === LINEHEIGHT && OpenFeature ? (
            <AddingLineHeight selected={selected} layers={layers} />
          ) : selectedFeature === LETTERSPACING && OpenFeature ? (
            <AddingLetterSpacing selected={selected} layers={layers} />
          ) : null}
        </Styled.TxtFeaturesList>
      ))}
    </Styled.TxtFeatures>
  );
};
