import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Canvas } from './Canvas';
import { Layers } from './Layers';
import '../Main.css';
import { Tools } from './Tools';
import { Properties } from './Properties';

export default function Main() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    return <div className='container'>
        <Layers />
        <Canvas />
        <Properties/>
    </div>;
}
