import * as Styled from "./styled";
import { useSelector } from "react-redux";
import { getLayers } from "../../store/selectors";

const ShapeComponent = ({ onSelect, index }) => {
  const layers = useSelector(getLayers);
  const layer = layers[index];

  if (!layer) {
    return null;
  }
  return (
    <Styled.Shape
      onClick={onSelect}
      width={layer.width}
      height={layer.height}
      x={layer.coords.x}
      y={layer.coords.y}
      backgroundColor={layer.meta.backgroundColor}
    />
  );
};

export default ShapeComponent;
