import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingLetterSpacing = () => {
    const letterSpacing = useSelector((state) => state.data.properties.text.LetterSpacing);
    const [count, setCount] = useState(letterSpacing);
    const [quantity, setQuantity] = useState(letterSpacing);
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
        <div id="letterSpacing">
            <div class="slidecontainer">
                <input type="range" min="1" max="100" value={quantity} /> {quantity}
            </div>

            <button onClick={subtracting}>-</button>
            {/* <input type="text" value={quantity} /> */}
            <button onClick={adding}>+</button>
        </div >
    );
};
