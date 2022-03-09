import React, { useState } from "react";
import "../Main.css";
import { useDispatch } from "react-redux";
import { EFFECTS, IMG, TEXT, VECTOR } from "./Constants";

export const Tools = ({ setId, setSelected, index ,isOpen,setIsOpen}) => {
  const dispatch = useDispatch();
  const AddToData = (id, index) => {
    dispatch({ type: "ADD_LAYER", id });
    setId(id);
    setSelected([index]);
    setIsOpen(false);
  };

  return (
    <div className="toolsContainer">
      <div className={isOpen ? null : "hidden"}>
        <div onClick={() => AddToData(IMG)}>Img</div>
        <div onClick={() => AddToData(TEXT, index)}>Text</div>
        <div onClick={() => AddToData(EFFECTS)}>Effects</div>
        <div onClick={() => AddToData(VECTOR)}>Vectors</div>
      </div>
    </div>
  );
};
