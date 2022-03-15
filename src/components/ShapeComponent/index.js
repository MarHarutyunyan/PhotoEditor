import * as Styled from "./styled"
import { useSelector } from "react-redux"
import { getLayers } from "../../store/selectors"

const ShapeComponent = ({ onSelect, index }) => {
  const layers = useSelector(getLayers)
  const layer = layers[index]

  if (!layer) {
    return null
  }

  console.log("layer.meta.backgroundColor", layer.meta.backgroundColor)

  return (
    <Styled.Shape
      onClick={onSelect}
      width={layer.width}
      height={layer.height}
      backgroundColor={layer.meta.backgroundColor}
      x={layer.coords.x}
      y={layer.coords.y}
    />
  )
}

export default ShapeComponent
