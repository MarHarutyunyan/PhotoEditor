import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Counting } from "../../functions/Counting";

export const AddingLineHeight = ({ selected, layers }) => {
  const dispatch = useDispatch();
  const adding = () => {
    changeCountBy(1);
  };
  const subtracting = () => {
    changeCountBy(-1);
  };
  const changeCountBy = (num) => {
    dispatch({
      type: "CHANGE_LINE_HEIGHT",
      lineHeight: Math.max(
        0,
        layers[selected[0]].meta.TxtMeta.lineHeight + num
      ),
      selected,
    });
  };

  return (
    <div className="textLineProp">
      {/* <div className="slidecontainer">
                <input type="range" min="1" max="100" value={layers[selected[0]].meta.TxtMeta.letterSpacing} /> {layers[selected[0]].meta.TxtMeta.letterSpacing}
            </div> */}
      <button className="leftMinusButton" onClick={subtracting}>
        -
      </button>
      <input
        type="number"
        value={layers[selected[0]].meta.TxtMeta.lineHeight}
        onChange={changeCountBy}
      />
      <button className="rightPlusButton" onClick={adding}>
        +
      </button>
    </div>
  );
};
