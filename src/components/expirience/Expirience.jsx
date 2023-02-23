import React from 'react';
import ExpInputs from './ExpInputs';
import ExpPreview from './ExpPreview';

const expirience = () => {
    return (
        <div className='Side-Container'>
            <h1>Expirience</h1>
           <ExpInputs/>
           <ExpPreview/> 
        </div>
    );
};

export default expirience;