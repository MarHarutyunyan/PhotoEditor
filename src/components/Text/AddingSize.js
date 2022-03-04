import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingSize = () => {
    const size = useSelector((state) => state.data.properties.text.Size);
    const [count, setCount] = useState(size);
    const [quantity, setQuantity] = useState(size);
    const adding = () => {
        handleAddOne();
        setQuantity(count)
    }
    const subtracting = () => {
        handleSubtractOne();
        setQuantity(count);
    }
    const handleSubtractOne = () => {
        setCount(count - 1);
    }
    const handleAddOne = () => {
        setCount(count + 1);
    }

    return (
        <div id="size">
            <button onClick={subtracting}>-</button>
            <input type="text" value={quantity}  />
            <button onClick={adding}>+</button>
        </div>
    );
};
