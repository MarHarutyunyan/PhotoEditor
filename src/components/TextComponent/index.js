import * as Styled from "./styled"

const TextComponent = (props) => {
  return (
    <Styled.Textarea
      placeholder="Edit Text"
      onChange={(event) => props.changeText(event.target.value)}
      onClick={props.onSelect}
    />
  )
}

export default TextComponent
