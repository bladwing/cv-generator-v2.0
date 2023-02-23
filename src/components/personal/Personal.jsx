import React from 'react';
import Inputs from './PerInputs';
import Preview from './PerPreview';
import "../components.scss"


const Personal = () => {
    return (
        <div className='Side-Container'>
            <Inputs/>
            <Preview/>
        </div>
    );
};

export default Personal;