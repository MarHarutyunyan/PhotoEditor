import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addLetterSpacingAction } from "../../store/actions/actions"
import { getSelectedLayerIndex } from "../../store/selectors"

export const AddingLetterSpacing = ({ layers }) => {
  const dispatch = useDispatch()
  const selected = useSelector(getSelectedLayerIndex);
  const adding = () => {
    changeCountBy(1)
  }
  const subtracting = () => {
    changeCountBy(-1)
  }
  const changeCountBy = (num) => {
    dispatch(addLetterSpacingAction(Math.max(0, layers[selected[0]].meta.letterSpacing + num)))
  }

  return (
    <div className="textLineProp">
      {/* <div className="slidecontainer">
                <input type="range" min="1" max="100" value={layers[selected[0]].meta.letterSpacing} /> {layers[selected[0]].meta.letterSpacing}
            </div> */}
      <button className="leftMinusButton" onClick={subtracting}>
        -
      </button>
      <input
        type="number"
        value={Number(layers[selected[0]].meta.letterSpacing)}
        onChange={changeCountBy}
      />
      <button className="rightPlusButton" onClick={adding}>
        +
      </button>
    </div>
  )
}
