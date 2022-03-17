export const convertPercentToPixel = (cSize) => (layer) => {
  let { width, height } = layer;

  if (typeof width === "string" && width.substr(-1, 1)) {
    width = parseInt(width.substr(0, width.length - 1));
    height = parseInt(height.substr(0, height.length - 1));
  }
  return {
    ...layer,
    width: (width * cSize.width) / 100,
    height: (height * cSize.height) / 100,
  };
};
