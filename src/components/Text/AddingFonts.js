import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFontAction } from "../../store/actions/actions";

export const AddingFonts = ({ selected, layers }) => {
  const fonts = useSelector((state) => state.ui.properties.text.Fonts);
  const dispatch = useDispatch();

  const changeFont = (font, selected) => dispatch(changeFontAction(font, selected));

  return (
    <div>
      <ul>
        {fonts.map((font, i) => (
          <li
            className={
              layers[selected[0]].meta.fontFamily.includes(font)
                ? "selected"
                : null
            }
            key={i}
            onClick={() => changeFont(font, selected)}
          >
            {font}
          </li>
        ))}
      </ul>
    </div>
  );
};
