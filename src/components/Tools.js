import React from "react";
import "../Main.css";
import { useDispatch } from "react-redux";

export const Tools = ({ setId }) => {
  const dispatch = useDispatch();

  const AddToData = (id) => {
    dispatch({ type: "ADD_LAYER" });
    dispatch({ type: "SET_LAYER", id: id });
    setId(id);
  };

  return (
    <div id="toolsContainer">
      <div id="tools">
        <div onClick={() => AddToData("IMG")}>Img</div>
        <div onClick={() => AddToData("TEXT")}>Text</div>
        <div onClick={() => AddToData("EFFECTS")}>Effects</div>
        <div onClick={() => AddToData("VECTOR")}>Vectors</div>
      </div>
    </div>
  );
};
