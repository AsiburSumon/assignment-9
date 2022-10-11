import React from 'react';
import './Quiz.css';
import {ArrowRightIcon } from '@heroicons/react/24/solid'


const Quiz = ({quiz}) => {
    const {name, logo, total} = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-info'>
                <p>{name}</p>
                <p>Total-quiz: <small>{total}</small></p>
                <button>Start Now<ArrowRightIcon className="icon"/>
                </button>
            </div>
        </div>
    );
};

export default Quiz;