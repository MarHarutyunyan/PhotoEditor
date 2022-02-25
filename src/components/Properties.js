import React, { useEffect, useState } from 'react';
import '../Main.css';
import { useDispatch, useSelector } from 'react-redux';
import { TxtFeatures } from '../components/TxtFeatures';
import { ImgFeatures } from './ImgFeatures';

export const Properties = ({id}) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    
    const AddToData = (id) => {
        dispatch({ type: 'SET_LAYER', id: id });
    }

    const [showFeatures, setShowFeatures] = React.useState(false)
    const show = () => setShowFeatures(true)

    return (
        <div id='propertiesContainer' >
            <div id='properties'>
            {id === "TEXT" && <TxtFeatures />}
            {id === "IMG" && <ImgFeatures />}

                {/* <div id='IMG' onClick={() => AddToData('IMG')}>Img</div>
                <div id='TEXT' onClick={() => AddToData('TEXT'), show}>Text</div>
                {showFeatures ? <TxtFeatures /> : null}
                <div id='EFFECTS' onClick={() => AddToData('EFFECTS')}>Effects</div>
                <div id='VECTOR' onClick={() => AddToData('VECTOR')} >Vectors</div> */}
            </div>
        </div>
    );
}
