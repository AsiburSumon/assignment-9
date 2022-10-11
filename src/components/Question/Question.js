import React from 'react';
import './Question.css'

const Question = ({perQuestion}) => {
    const {question, options} = perQuestion;
    return (
        <div className='perQuestion'>
            <p>Quiz: {question}</p>
            <p>{options}</p>
        </div>
    );
};

export default Question;