import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addSizeAction } from "../../store/actions/actions"

export const AddingSize = ({ selected, layers }) => {
  const dispatch = useDispatch()
  // const adding = () => {
  //     changeCountBy(1);
  // }
  // const subtracting = () => {
  //     changeCountBy(-1);
  // }
  const changeCountBy = (e) => {
    //debugger
    dispatch(addSizeAction(Number(e.target.value),selected))
    
    e.target.value = layers[selected[0]].meta.fontSize
  }

  return (
    <div className="textSizeProp">
      {/* <div className="slidecontainer">
                <input type="range" min="1" max="100" value={layers[selected[0]].meta.letterSpacing} /> {layers[selected[0]].meta.letterSpacing}
            </div> */}
      <input
        type="number"
        value={layers[selected[0]].meta.fontSize}
        onChange={changeCountBy}
      />
    </div>
  )
}
