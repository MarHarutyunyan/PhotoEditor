import React from 'react';
import { Canvas } from './Canvas';
import { Layers } from './Layers';
import '../Main.css';
import { Tools } from './Tools';

export default function Main() {
    return <div className='container'>
        <Layers />
        <Canvas />
        <Tools />
    </div>;
}
