import React from 'react';
import './Quiz.css';
import {ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const Quiz = ({quiz}) => {
    const {name, logo, total, id} = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-info'>
                <p>{name}</p>
                <p>Total-quiz: <small>{total}</small></p>
                <button><Link to={`/topics/quiz/${id}`}>Start Now</Link> <ArrowRightIcon className="icon"/>
                </button>
            </div>
        </div>
    );
};

export default Quiz;