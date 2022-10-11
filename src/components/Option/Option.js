import React from 'react';
import './Option.css'

const Option = ({option}) => {
    return (
        <div className='option'>
            <ul>
                <button>{option}</button>
            </ul>
        </div>
    );
};

export default Option;