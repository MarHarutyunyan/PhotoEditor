import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Counting } from "../../functions/Counting";
export const AddingSize = ({ selected, layers }) => {
    const dispatch = useDispatch();
    // const adding = () => {
    //     changeCountBy(1);
    // }
    // const subtracting = () => {
    //     changeCountBy(-1);
    // }
    const changeCountBy = (e) => {
        dispatch({ type: "CHANGE_FONT_SIZE", fontSize: Number(e.target.value), selected });
        e.target.value = layers[selected[0]].meta.TxtMeta.fontSize;
    }
    return (
        <div className="textSizeProp">
            {/* <div className="slidecontainer">
                <input type="range" min="1" max="100" value={layers[selected[0]].meta.TxtMeta.letterSpacing} /> {layers[selected[0]].meta.TxtMeta.letterSpacing}
            </div> */}
            <input type="number" value={layers[selected[0]].meta.TxtMeta.fontSize} onChange={changeCountBy} />
        </div >
    );
};