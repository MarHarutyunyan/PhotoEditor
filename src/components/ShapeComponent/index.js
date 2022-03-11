import * as Styled from "./styled"

const ShapeComponent = (props) => {
  return <Styled.Shape onClick={props.onSelect}></Styled.Shape>
}

export default ShapeComponent

/*
  const getStyle = (i) => {
    const layer = layers[i].meta
    return {
      width: layer.width,
      height: layer.height,
      color: layer.color,
      fontSize: layer.fontSize,
      fontFamily: layer.fontFamily,
      backgroundColor: layer.highlightColor,
      letterSpacing: layer.letterSpacing,
      lineHeight: layer.lineHeight,
    }
  }
*/
