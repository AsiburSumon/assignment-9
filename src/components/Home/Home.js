import React from 'react';
import img from '../../image/img1.jpg';
import Quizzes from '../Quizzes/Quizzes';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='home-info'>
                <img src={img} alt="" />
                <p>There are some quiz here. Go and enjoy it.</p>
            </div>
            <Quizzes></Quizzes>
            
        </div>
    );
};

export default Home;