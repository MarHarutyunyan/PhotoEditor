import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddingColor } from "./AddingColor";
import { AddingFonts } from "./AddingFonts";

export const TxtFeatures = () => {
  const features = useSelector((state) => state.data.properties.text);
  const txtFeatures = Object.keys(features);
  const [OpenFeature, setOpenFeature] = useState(false);
  const show = () => setOpenFeature(true);

  return (
    <div id="txtFeautures">
      <ul>
        {txtFeatures.map((Features, i) => (
          <li id={i} onClick={(() => show())} key={i}> {Features}
            {/* {Features === "Font" ? <AddingFonts /> : Features === "Color",

              <AddingColor />} */}

            {/* {OpenTools ? (Features === "Font" && OpenTools && <AddingFonts />) : (Features === "Color" && OpenTools && <AddingColor />)} */}

            {Features === "Font" && OpenFeature && <AddingFonts />}
            {Features === "Color" && OpenFeature && <AddingColor />}


          </li>
        ))}
      </ul>
    </div>
  );
};
