export const scaleHtmlElementSize = (size, factor) => {
  if (typeof size === "string") {
    const number = size.substring(0, size.length - 1)
    return `${number * factor}%`
  }
  return `${size * factor}px`
}
