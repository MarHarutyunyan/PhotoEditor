import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingColor = ({ selected, layers }) => {
  // const colors = useSelector((state) => state.data.layer.meta.TxtMeta.color);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    dispatch({ type: "CHANGE_COLOR", color: e.target.value, selected });
  };
  return (
    <div>
      <input type="color" value={layers[selected[0]].meta.TxtMeta.color} onChange={handleOnChange} /> {layers[selected[0]].meta.TxtMeta.color}
    </div>
  );
};
