import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFontAction } from "../../store/actions/actions";
import { getSelectedLayerIndex } from "../../store/selectors";

export const AddingFonts = ({ layers }) => {
  const fonts = useSelector((state) => state.data.properties.text.Fonts);
  const selected = useSelector(getSelectedLayerIndex);

  const dispatch = useDispatch();

  const changeFont = (font) => dispatch(changeFontAction(font));

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
            onClick={() => changeFont(font)}
          >
            {font}
          </li>
        ))}
      </ul>
    </div>
  );
};
