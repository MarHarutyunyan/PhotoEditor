import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingColor = ({ selected }) => {
  const colors = useSelector((state) => state.data.properties.text.Colors);
  const [color, setColor] = useState(colors);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    setColor(e.target.value);
    dispatch({ type: "CHANGE_COLOR", color: color, selected: selected });
  };
  return (
    <div id="txtColor">
      <input type="color" value={color} onChange={handleOnChange} /> {color}
    </div>
  );
};
