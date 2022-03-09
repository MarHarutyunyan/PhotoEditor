import React from "react";
import "../Main.css";
import { useDispatch } from "react-redux";
import { EFFECTS, IMG, TEXT, VECTOR } from "./Constants";

export const Tools = ({ setId,setSelected,index }) => {
  const dispatch = useDispatch();

  const AddToData = (id,index) => {
    dispatch({ type: "ADD_LAYER", id }); 
    setId(id);
    setSelected([index]);
  };
  

  return (
    <div className="toolsContainer">
      <div className="tools">
        <div onClick={() => AddToData(IMG)}>Img</div>
        <div onClick={() => AddToData(TEXT,index)}>Text</div>
        <div onClick={() => AddToData(EFFECTS)}>Effects</div>
        <div onClick={() => AddToData(VECTOR)}>Vectors</div>
      </div>
    </div>
  );
};
