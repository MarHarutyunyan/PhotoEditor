import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddingSize = () => {
    const size = useSelector((state) => state.data.properties.text.Size);
    const [count, setCount] = useState(size);
    const [quantity, setQuantity] = useState(size);
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
            <button onClick={subtracting}>-</button>
            <input type="text" value={quantity} />
            {console.log(quantity)}
            <button onClick={adding}>+</button>
        </div>
    );
};
