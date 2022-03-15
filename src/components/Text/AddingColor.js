import React from "react"
import { useDispatch } from "react-redux"

export const AddingColor = ({ selected, layers }) => {
  const dispatch = useDispatch()
  const handleOnChange = (e) => {
    dispatch({ type: "CHANGE_COLOR", color: e.target.value, selected })
  }

  return (
    <div>
      <input
        type="color"
        value={layers[selected[0]].meta.color}
        onChange={handleOnChange}
      />{" "}
      {layers[selected[0]].meta.color}
    </div>
  )
}
