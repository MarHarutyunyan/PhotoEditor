export const convertPercentToPixel = (cSize) => (layer) => {
  const { width, height } = layer

  if (width.substr(-1, 1)) {
    const w = parseInt(width.substr(0, width.length - 1))
    const h = parseInt(height.substr(0, height.length - 1))

    return {
      ...layer,
      width: (w * cSize.width) / 100,
      height: (h * cSize.height) / 100,
    }
  }
}
