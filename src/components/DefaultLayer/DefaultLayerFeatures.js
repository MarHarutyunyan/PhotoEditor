import React, { useState } from "react"
import { useSelector } from "react-redux"
import { AddingHighlightColor } from "../Text/AddingHighlightColor"
import { ChangeDefaultHeight } from "./ChangeDefaultHeight"
import { ChangeDefaultWidth } from "./ChangeDefaultWidth"

export const MainFeatures = ({ selected, layers }) => {
  const features = useSelector((state) => state.data.layers[0].meta)
  const mainFeatures = Object.keys(features)
  const [OpenFeature, setOpenFeature] = useState(false)
  const [selectedFeature, setFeature] = useState("")

  const openFeaturesProperties = (Feature) => {
    setFeature(Feature)
    setOpenFeature(true)
  }

  return (
    <ul>
      {mainFeatures.map((Feature, i) => (
        <li
          onClick={() => openFeaturesProperties(Feature)}
          key={i}
          className={selectedFeature === Feature ? null : "hiddenChild"}
        >
          {Feature}
          {selectedFeature === "width" && OpenFeature ? (
            <ChangeDefaultWidth selected={selected} layers={layers} />
          ) : selectedFeature === "height" && OpenFeature ? (
            <ChangeDefaultHeight selected={selected} layers={layers} />
          ) : selectedFeature === "highlightColor" && OpenFeature ? (
            <AddingHighlightColor selected={selected} layers={layers} />
          ) : null}
        </li>
      ))}
    </ul>
  )
}
