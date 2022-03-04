import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingColor = () => {
    const colors = useSelector((state) => state.data.properties.text.Colors);
    const [color, setColor] = useState(colors);
    const handleOnChange = (e) => {
        setColor(e.target.value);
     }
    return (
        <div id="txtColor">
            <input type="color"  value={color} onChange={handleOnChange} /> {color}
        </div>
    );
};
