import React from "react"
import { useDispatch } from "react-redux"
import { changeColorAction } from "../../store/actions/actions"

export const AddingColor = ({ selected, layers }) => {
  const dispatch = useDispatch()
  const handleOnChange = (e) => dispatch(changeColorAction(e.target.value, selected))

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
