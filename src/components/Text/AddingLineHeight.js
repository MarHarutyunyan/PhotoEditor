import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingLineHeights = () => {
    const lineHeight = useSelector((state) => state.data.properties.text.LineHeight);
    const [count, setCount] = useState(lineHeight);
    const [quantity, setQuantity] = useState(lineHeight);
    const adding = () => {
        handleAddOne();
        setQuantity(count)
    }
    const subtracting = () => {
        handleSubtractOne();
        setQuantity(count);
    }
    const handleSubtractOne = () => {
        if (count >= 0) setCount(count - 1);
    }
    const handleAddOne = () => {
        setCount(count + 1);
    }

    return (
        <div id="lineHeight">
            <div class="slidecontainer">
                <input type="range" min="1" max="100" value={quantity} /> {quantity}
            </div>

            <button onClick={subtracting}>-</button>
            {/* <input type="text" value={quantity} /> */}
            <button onClick={adding}>+</button>
        </div >
    );
};
