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
    // setCount(Feature);
    setOpenFeature(true);

    setCount(Feature);
    if (Feature === "Fonts") {
      component = <AddingFonts />
    } else if (Feature === "Colors") {
      component = <AddingColor />
    }

  }

  return (
    <div id="txtFeautures">
      <ul>
        {txtFeatures.map((Feature, i) => (
          <li id={Feature} onClick={(() => openFeaturesProperties(Feature))} key={i}>
            {Feature}
            {console.log(a)}
            <div>{component}</div>


            {/* {(a === "Fonts" && OpenFeature) ? (
              <AddingFonts className={a === Feature ? 'a' : 'b'} />

            ) : (a === "Colors" && OpenFeature) ? (
              <AddingColor className={a === Feature ? 'a' : 'b'} />
            ) : (
              null
            )} */}

            {/* {Features === "Font" ? <AddingFonts /> : Features === "Color",

              <AddingColor />} */}
            {/* {openPressed} */}
            {/* <openPressed/> */}
            {/* {OpenTools ? (Features === "Font" && OpenTools && <AddingFonts />) : (Features === "Color" && OpenTools && <AddingColor />)} */}
            {/* {Feature === "Fonts" && OpenFeature && <AddingFonts />}
            {Feature === "Colors" && OpenFeature && <AddingColor />} */}

          </li>

        ))}
      </ul>
    </div>
  );
};