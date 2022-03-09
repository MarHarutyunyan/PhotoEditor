import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingHighlightColor = ({ selected, layers }) => {
    // const highlightColors = useSelector((state) => state.data.layer.meta.TxtMeta.highlightColor);
    const dispatch = useDispatch();
    const handleOnChange = (e) => {
        dispatch({ type: "CHANGE_HIGHLIGHT_COLOR", highlightColor: e.target.value, selected });
    }
    return (
        <div>
            <input type="color" value={layers[selected[0]].meta.TxtMeta.highlightColor} onChange={handleOnChange} /> {layers[selected[0]].meta.TxtMeta.highlightColor}
        </div>
    );
};
