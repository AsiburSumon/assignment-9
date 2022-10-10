import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../../image/img1.jpg';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizzes = useLoaderData();
    // console.log(quizzes.data[0])
    return (
        <div>
            <div className='home-info'>
                <img src={img} alt="" />
                <p>There are some quiz here. Go and enjoy it.</p>
            </div>
            <div className='quizzes'>
                {
                    quizzes.data.map(quiz => <Quiz quiz={quiz} key={quiz.id}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;