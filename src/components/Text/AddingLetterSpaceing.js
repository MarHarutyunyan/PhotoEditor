import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Counting } from "../../functions/Counting";
export const AddingLetterSpacing = ({ selected, layers }) => {
    const dispatch = useDispatch();
    const adding = () => {
        changeCountBy(1);
    }
    const subtracting = () => {
        changeCountBy(-1);
    }
    const changeCountBy = (num) => {
        console.log(layers[selected[0]].meta.TxtMeta.letterSpacing);
        dispatch({ type: "CHANGE_LETTER_SPACING", letterSpacing: Math.max(0, layers[selected[0]].meta.TxtMeta.letterSpacing + num), selected });
    }
    const Change = (e) => {
        console.log(layers[selected[0]].meta.TxtMeta.letterSpacing.toString());
        layers[selected[0]].meta.TxtMeta.letterSpacing = parseInt(e.target.value)
        e.target.value = layers[selected[0]].meta.TxtMeta.letterSpacing.toString();
        console.log(e.target.value);
    }
    return (
        <div  className="textLineProp">
            {/* <div className="slidecontainer">
                <input type="range" min="1" max="100" value={layers[selected[0]].meta.TxtMeta.letterSpacing} /> {layers[selected[0]].meta.TxtMeta.letterSpacing}
            </div> */}
            <button className="leftMinusButton" onClick={subtracting}>-</button>
            <input type="number" value={Number(layers[selected[0]].meta.TxtMeta.letterSpacing)} onChange={changeCountBy} />
            <button className="rightPlusButton" onClick={adding}>+</button>
        </div >
    );
};