import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizDetails.css'

const QuizDetails = () => {
    const perQuiz = useLoaderData();
    const {questions} = perQuiz.data;
    return (
        <div className='quiz-details'>
            <div className='quiz-details-info'>
            <h2>{perQuiz.data.name}</h2>
            <img src={perQuiz.data.logo} alt="" />
            </div>
        <div className='questions'>
            {
                questions.map(perQuestion=><Question key={perQuestion.id} perQuestion={perQuestion}></Question>)
            }
        </div>
        </div>
    );
};

export default QuizDetails;