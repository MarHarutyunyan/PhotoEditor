import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingFonts = ({ selected }) => {
  const fonts = useSelector((state) => state.data.properties.text.Fonts);
  const dispatch = useDispatch();

  const changeFont = (font, selected) => {
    dispatch({ type: "CHANGE_FONT", font: font, selected: selected });
  };
  return (
    <div>
      <ul>
        {fonts.map((font, i) => (
          <li key={i} onClick={() => changeFont(font, selected)}>
            {font}
          </li>
        ))}
      </ul>
    </div>
  );
};
