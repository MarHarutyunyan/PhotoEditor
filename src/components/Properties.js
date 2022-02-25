import React, { useEffect, useState } from 'react';
import '../Main.css';
import { useDispatch, useSelector } from 'react-redux';
import { TxtFeatures } from '../components/TxtFeatures';

export const Properties = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    
    const AddToData = (id) => {
        console.log(id);
        dispatch({ type: 'SET_LAYER', id: id });
        // if (id === 'TEXT') {
        //     dispatch({ type: 'ADD_TXT_TOOLS' });
        // }
    }

    const [showFeatures, setShowFeatures] = React.useState(false)
    const show = () => setShowFeatures(true)

    return (
        <div id='toolsContainer' >
            <div id='tools'>
                <div id='IMG' onClick={() => AddToData('IMG')}>Img</div>
                <div id='TEXT' onClick={() => AddToData('TEXT'), show}>Text</div>
                {showFeatures ? <TxtFeatures /> : null}
                <div id='EFFECTS' onClick={() => AddToData('EFFECTS')}>Effects</div>
                <div id='VECTOR' onClick={() => AddToData('VECTOR')} >Vectors</div>
            </div>
        </div>
    );
}
