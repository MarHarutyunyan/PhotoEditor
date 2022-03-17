import React from "react"
import { useDispatch } from "react-redux"
import { addHighlightColorAction } from "../../store/actions/actions"

export const AddingHighlightColor = ({ selected, layers }) => {
  const dispatch = useDispatch()
  const handleOnChange = (e) => {
    dispatch(addHighlightColorAction(e.target.value, selected))
  }
  return (
    <div>
      <input
        type="color"
        value={layers[selected[0]].meta.highlightColor}
        onChange={handleOnChange}
      />{" "}
      {layers[selected[0]].meta.highlightColor}
    </div>
  )
}
