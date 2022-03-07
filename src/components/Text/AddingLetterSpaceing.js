import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingLetterSpacing = () => {
    const letterSpacing = useSelector((state) => state.data.properties.text.LetterSpacing);
    const [count, setCount] = useState(letterSpacing);
    const [quantity, setQuantity] = useState(letterSpacing);
    const adding = () => {
        changeCountBy(1);
        setQuantity(count)
    }
    const subtracting = () => {
        changeCountBy(-1);
        setQuantity(count);
    }
    const changeCountBy = (num) => {
        setCount(count => Math.max(0, count + num));
    }

    return (
        <div>
            <div className="slidecontainer">
                <input type="range" min="1" max="100" value={quantity} /> {quantity}
            </div>

            <button onClick={subtracting}>-</button>
            {/* <input type="text" value={quantity} /> */}
            <button onClick={adding}>+</button>
        </div >
    );
};
