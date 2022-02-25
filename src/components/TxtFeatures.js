import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const TxtFeatures = () => {
    const features = useSelector((state) => state.data.layer.meta.TxtMeta);
    console.log(Object.keys(features));
    const txtFeatures = Object.keys(features);
    console.log(txtFeatures);
    // if (layers.length > 0) {
        return (
            <div id="txtFeautures">
                <ul>
                    {txtFeatures.map((_, i) => (
                        <li key={i}> {txtFeatures[i + 1]}</li>
                    ))}
                </ul>
            </div>
        )
    // }

}
