import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeColorAction } from "../../store/actions/actions"
import { getSelectedLayerIndex } from "../../store/selectors"

export const AddingColor = ({ layers }) => {
  const dispatch = useDispatch()
  const selected = useSelector(getSelectedLayerIndex);
  const handleOnChange = (e) => dispatch(changeColorAction(e.target.value))

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
