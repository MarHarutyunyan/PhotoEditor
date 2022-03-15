import { IMG_LAYER, TEXT_LAYER, SHAPE_LAYER } from "../config/Constants"

const isEven = (num) => parseInt(num) % 2 === 0
const getRandomSign = () => (isEven(Math.random() * 10) ? 1 : -1)

const getLayerTitle = (name, template = "%s layer") =>
  template.replace("%s", name)

const getTextMeta = (width = 0, height = 0) => {
  return {
    title: getLayerTitle("text"),
    type: TEXT_LAYER,
    width,
    height,
    coords: {
      x: 300 + Math.random() * 10 * getRandomSign(),
      y: 250 + Math.random() * 10 * getRandomSign(),
    },
    rotation: 0,
    meta: {
      text: "Click to edit",
      fontFamily: "Sans-serif",
      fontSize: 24,
      highlightColor: "#ffffff",
      color: "#000000",
      lineHeight: 1,
      letterSpacing: 0,
      shadow: "",
    },
  }
}

const getImageMeta = (width = 0, height = 0) => ({
  title: getLayerTitle("image"),
  type: IMG_LAYER,
  width,
  height,
  coords: {
    x: 300,
    y: 250,
  },
  rotation: 0,
  meta: {
    OrgWidth: 0,
    OrgHeight: 0,
    type: "ImgType",
    url: "ImgUrl",
    colorAdjustments: {
      exposure: 0,
      brilliance: 0,
      highlights: 0,
      shadows: 0,
      contrast: 0,
      brightness: 0,
      blackPoint: 0,
      saturation: 0,
      warmth: 0,
    },
  },
})

const getShapeMeta = (width = 0, height = 0) => ({
  title: getLayerTitle("shape"),
  type: SHAPE_LAYER,
  width,
  height,
  coords: {
    x: width === "100%" ? 0 : 300,
    y: height === "100%" ? 0 : 250,
  },
  rotation: 0,
  meta: {
    backgroundColor: "#ffffff",
  },
})

export const getDefaultLayerData = (type) => {
  switch (type) {
    case TEXT_LAYER: {
      return getTextMeta()
    }
    case IMG_LAYER: {
      return getImageMeta()
    }
    case SHAPE_LAYER: {
      return getShapeMeta()
    }
    default: {
      return null
    }
  }
}

export const getCanvasFirstLayerData = () => {
  return getShapeMeta("100%", "100%")
}
