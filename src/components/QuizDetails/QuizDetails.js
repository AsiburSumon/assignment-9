import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizDetails.css'

const QuizDetails = () => {
    const perQuiz = useLoaderData();
    const {questions} = perQuiz.data;
    console.log(perQuiz.data.questions);
    return (
        <div>
            <h2>{perQuiz.data.name}</h2>
        <div className='questions'>
            {
                questions.map(perQuestion=><Question key={perQuestion.id} perQuestion={perQuestion}></Question>)
            }
        </div>
        </div>
    );
};

export default QuizDetails;