import React from 'react';
import Inputs from './PerInputs';
import Preview from './PerPreview';
import "../components.scss"


const Personal = () => {
    return (
        <div className='Side-Container'>
            <h1>Pesonal</h1>
            <Inputs/>
            <Preview/>
        </div>
    );
};

export default Personal;