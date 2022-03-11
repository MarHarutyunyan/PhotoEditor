import React from "react";
import "../Main.css";
import { useDispatch } from "react-redux";
import { EFFECTS, IMG, TEXT, VECTOR } from "./Constants";

export const Tools = ({ setId, index }) => {
  const dispatch = useDispatch();
  const AddToData = (id, index) => {
    dispatch({ type: "ADD_LAYER", id });
    setId(id);
    dispatch({ type: "SET_SELECTED", value: [index] });
    dispatch({ type: "SET_PROPERTY_VISIBILITY", value: true });
    dispatch({ type: "SET_TOOLS_VISIBILITY", value: false });
  };

  return (
    <div className="toolsContainer">
      <div onClick={() => AddToData(IMG)}>Img</div>
      <div onClick={() => AddToData(TEXT, index)}>Text</div>
      <div onClick={() => AddToData(EFFECTS)}>Effects</div>
      <div onClick={() => AddToData(VECTOR)}>Vectors</div>
    </div>
  );
};
