import React from 'react';
import '../Main.css';
import { TxtFeatures } from '../components/TxtFeatures';
import { ImgFeatures } from './ImgFeatures';

export const Properties = ({id}) => {
    return (
        <div id='propertiesContainer' >
            <div id='properties'>
            {id === "TEXT" && <TxtFeatures />}
            {id === "IMG" && <ImgFeatures />}
            </div>
        </div>
    );
}
