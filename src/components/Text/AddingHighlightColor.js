import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingHighlightColor = () => {
    const highlightColors = useSelector((state) => state.data.properties.text.HighlightColor);
    const [highlightColor, setHighlightColors] = useState(highlightColors);
    const handleOnChange = (e) => {
        setHighlightColors(e.target.value);
     }
    return (
        <div>
            <input type="color"  value={highlightColor} onChange={handleOnChange} /> {highlightColor}
        </div>
    );
};
