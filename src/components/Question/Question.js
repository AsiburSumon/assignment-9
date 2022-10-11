import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Option from '../Option/Option';
import './Question.css'

const Question = ({perQuestion}) => {
    const {question, options, correctAnswer} = perQuestion;
    
    const handleEyeIcon= (correctAnswer) =>{
        return alert(correctAnswer)
    }
    return (
        <div className='perQuestion'>
            <div className='per-question-info'>
                <p>Quiz: {question}</p>
                <button onClick={()=>handleEyeIcon(correctAnswer)} className='eye-btn'><EyeIcon className='eye-icon'></EyeIcon></button>
            </div>
            {
                options.map(option=> <Option correctAnswer={correctAnswer} option={option} key={options.indexOf(option)}></Option>)
            }
        </div>
    );
};

export default Question;