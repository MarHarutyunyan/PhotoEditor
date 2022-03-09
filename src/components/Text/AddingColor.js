import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingColor = ({ selected }) => {
  const colors = useSelector((state) => state.data.layer.meta.TxtMeta.color);
  const [color, setColor] = useState(colors);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    setColor(e.target.value);
    dispatch({ type: "CHANGE_COLOR", color:e.target.value, selected });
  };
  return (
    <div>
      <input type="color" value={color} onChange={handleOnChange} /> {color}
    </div>
  );
};
