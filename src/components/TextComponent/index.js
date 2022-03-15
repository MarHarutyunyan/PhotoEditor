import * as Styled from "./styled"
import { useDispatch } from "react-redux"

const TextComponent = ({ onSelect, index }) => {
  const dispatch = useDispatch()
  const setText = (value) => dispatch({ type: "CHANGE_TEXT", index, value })

  return (
    <Styled.Textarea
      placeholder="Edit Text"
      onChange={(event) => setText(event.target.value)}
      onClick={onSelect}
    />
  )
}

export default TextComponent
