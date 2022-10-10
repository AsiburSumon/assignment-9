import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {name, logo, total} = quiz
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-info'>
                <p>{name}</p>
                <p>Total-quiz: <small>{total}</small></p>
                <button>Start Now</button>
            </div>
        </div>
    );
};

export default Quiz;