import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TxtFeatures = () => {
  const features = useSelector((state) => state.data.layer.meta.TxtMeta);
  const txtFeatures = Object.keys(features);
txtFeatures.shift();
  return (
    <div id="txtFeautures">
      <ul>
        {txtFeatures.map((_, i) => (
          <li key={i}> {txtFeatures[i]}</li>
        ))}
      </ul>
    </div>
  );
};
