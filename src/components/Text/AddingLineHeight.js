import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addLineHeightAction } from "../../store/actions/actions"
import { getSelectedLayerIndex } from "../../store/selectors"

export const AddingLineHeight = ({ layers }) => {
  const dispatch = useDispatch()
  const selected = useSelector(getSelectedLayerIndex);
  const adding = () => {
    changeCountBy(1)
  }
  const subtracting = () => {
    changeCountBy(-1)
  }
  const changeCountBy = (num) => {
    dispatch(addLineHeightAction(Math.max(0, layers[selected[0]].meta.lineHeight + num)))
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
        value={layers[selected[0]].meta.lineHeight}
        onChange={changeCountBy}
      />
      <button className="rightPlusButton" onClick={adding}>
        +
      </button>
    </div>
  )
}
