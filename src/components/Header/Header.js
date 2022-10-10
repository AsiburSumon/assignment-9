import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2><small>Quiz</small> Panther</h2>
            <div className='link'>
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/analysis'>Analysis</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header;