// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { adding, subtracting } from "../../functions/Counting";
// export const AddingSize = ({ selected }) => {
//     const size = useSelector((state) => state.data.properties.text.Size);
//     const dispatch = useDispatch();
//     const changeSize = (value, selected) => {
//         dispatch({ type: "CHANGE_SIZE", size: value, selected: selected });
//     };
//     const data = useSelector((state) => state.data);
//     const [layers, setLayers] = useState(data.layers);
//     // return (
//     //     <div>
//     //         {Counting(size)}
//     //     </div>
//     // );
//     const [quantity, setQuantity] = useState(size);

//     const adding = () => {
//         changeCountBy(1);
//         changeSize(quantity, selected) ;
//     }
//     const subtracting = () => {
//         changeCountBy(-1);
//     }
//     const changeCountBy = (num) => {
//         setQuantity(count => Math.max(0, count + num))
//     }

//     return (
//         <div>
//             <button onClick={subtracting}>-</button>
//             <textarea
//                 type="text"
//                 onChange={(event) => changeSize(event.target.value, selected)}
//                 value={quantity}
//             />
//             {console.log(quantity)}
//             <button onClick={adding}>+</button>
//         </div>
//     );
// };
