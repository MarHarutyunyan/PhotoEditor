import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const ChangeDefaultHeight = ({ selected, layers }) => {
  const dispatch = useDispatch()
  // const adding = () => {
  //     changeCountBy(1);
  // }
  // const subtracting = () => {
  //     changeCountBy(-1);
  // }
  const changeCountBy = (e) => {
    dispatch({
      type: "CHANGE_HEIGHT",
      height: Number(e.target.value),
      selected,
    })
    e.target.value = layers[selected[0]].meta.height
  }
  return (
    <div className="textSizeProp">
      {/* <div className="slidecontainer">
                <input type="range" min="1" max="100" value={layers[selected[0]].meta.letterSpacing} /> {layers[selected[0]].meta.letterSpacing}
            </div> */}
      <input
        type="number"
        value={layers[selected[0]].meta.height}
        onChange={changeCountBy}
      />
    </div>
  )
}
