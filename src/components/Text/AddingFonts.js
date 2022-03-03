import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingFonts = () => {
    const fonts = useSelector((state) => state.data.properties.text.Fonts);
    return (
        <div id="txtFonts">
            <ul>
                {fonts.map((font, i) => (
                    <li id={i} key={i}> {font}
                    </li>
                ))}
            </ul>
        </div>
    );
};
