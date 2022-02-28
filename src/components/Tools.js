import React from "react";
import "../Main.css";
import { useDispatch, useSelector } from "react-redux";

export const Tools = ({setId}) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const AddToData = (id) => {
    dispatch({ type: "ADD_LAYER" });
    dispatch({ type: "SET_LAYER", id: id });
    setId(id);
    dispatch({ type: "ADD_TEXT" });
  };

  return (
    <div id="toolsContainer">
      <div id="tools">
        <div id="IMG" onClick={() => AddToData("IMG")}>
          Img
        </div>
        <div id="TEXT" onClick={(() => AddToData("TEXT"))}>
          Text
        </div>
        <div id="EFFECTS" onClick={() => AddToData("EFFECTS")}>
          Effects
        </div>
        <div id="VECTOR" onClick={() => AddToData("VECTOR")}>
          Vectors
        </div>
      </div>
    </div>
  );
};
