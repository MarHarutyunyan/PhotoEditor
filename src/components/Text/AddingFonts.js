import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingFonts = () => {
  const fonts = useSelector((state) => state.data.properties.text.Fonts);
  const dispatch = useDispatch();
  // const changeFont = (font, index) => {
  //   console.log(index);
  //   dispatch({ type: "CHANGE_FONT", font: font, index: index });
  // };
  return (
    <div id="txtFonts">
      <ul>
        {fonts.map((font, i) => (
          <li id={i} key={i}>
             {/* onClick={() => changeFont(font)} */}
            {font}
          </li>
        ))}
      </ul>
    </div>
  );
};
