import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addHighlightColorAction } from "../../store/actions/actions"
import { getSelectedLayerIndex } from "../../store/selectors"

export const AddingHighlightColor = ({ layers }) => {
  const dispatch = useDispatch()
  const selected = useSelector(getSelectedLayerIndex);
  const handleOnChange = (e) => {
    dispatch(addHighlightColorAction(e.target.value))
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
