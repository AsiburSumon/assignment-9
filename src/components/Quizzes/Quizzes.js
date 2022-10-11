import React, { useEffect, useState } from 'react';
import Toastify from '../Toastify/Toastify';
import Quiz from '../Quiz/Quiz';
import './Quizzes.css'

const Quizzes = () => {
    const [quizzes, setQuizzes] = useState([]);
    
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res=>res.json())
        .then(data=>setQuizzes(data.data))
    },[]);
    
    return (
        <div>
            <div className='quizzes'>
                {
                    quizzes.map(quiz => <Quiz quiz={quiz} key={quiz.id}></Quiz>)
                }
            </div>
            <Toastify></Toastify>
            
        </div>
    );
};

export default Quizzes;