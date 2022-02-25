import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export const ImgFeatures = () => {
    const features = useSelector((state) => state.data.layer.meta.ImgMeta);
    const ImgFeatures = Object.keys(features);
    return (
        <div id="IMG_FEATURES" >
            <ul>
                {ImgFeatures.map((_, i) => (
                    <li key={i}> {ImgFeatures[i]}</li>
                ))}
            </ul>
        </div>
    )
}