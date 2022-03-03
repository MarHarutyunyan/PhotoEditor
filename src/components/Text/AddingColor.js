import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingColor = () => {
    const colors = useSelector((state) => state.data.properties.text.Colors);
    return (
        <div id="txtFonts">
            <ul>
                {colors.map((color, i) => (
                    <li id={i} key={i}> {color}
                    </li>
                ))}
            </ul>
        </div>
    );
};
