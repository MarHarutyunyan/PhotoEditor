import React from 'react';

export const Layers = () => {
    console.log(5);

    return (
        <div id='layersContainer'>
            <h1>Layers</h1>
            <div id="layers">
                <ul>
                    <li className='layer'>layer 1</li>
                    <li className='layer'>layer 2</li>
                    <li className='layer'>layer 3</li>
                </ul>
                <button id='addLayer'>Add Layer</button>
            </div>

        </div>
    )
}