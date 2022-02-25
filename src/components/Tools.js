import React, { useState, useEffect,useRef } from "react";
import '../Main.css';
import { useDispatch, useSelector } from 'react-redux';
export const Tools = ({ classname}) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

    const AddToData = (id) => {
        dispatch({ type: "ADD_LAYER" });
        dispatch({ type: 'SET_LAYER', id: id });
    }

    return (
        <div id='toolsContainer'>
            <div id='tools'>
                <div onClick={() => AddToData('IMG')}>Img</div>
                <div id='TEXT' onClick={() => AddToData('TEXT')}>Text</div>
                <div onClick={() => AddToData('EFFECTS')}>Effects</div>
                <div onClick={() => AddToData('VECTOR')} >Vectors</div>
            </div>
        </div>
    );
}
