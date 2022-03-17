import * as Styled from "./styled";
import { getLayers } from "../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import { changeTextAction } from "../../store/actions/actions";

const TextComponent = ({ onSelect, index }) => {
  const dispatch = useDispatch();
  const layers = useSelector(getLayers);
  const setText = (value) => dispatch(changeTextAction(index, value));

  return (
    <Styled.Textarea
      placeholder="Edit Text"
      onChange={(event) => setText(event.target.value)}
      onClick={onSelect}
      layer={layers[index]}
    />
  );
};

export default TextComponent;
