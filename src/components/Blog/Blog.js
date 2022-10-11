import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className='question'>
                <h3>Q.1: What is the purpose of React-Router?</h3>
                <h5>Ans: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. </h5>
            </div>
            
            <div className='question'>
                <h3>Q.2: How does Context API works?</h3>
                <h5>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. </h5>
            </div>
            
            <div className='question'>
                <h3>Q.3: What is useRef?</h3>
                <h5>Ans: The useRef Hook allow us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. </h5>
            </div>
            
        </div>
    );
};

export default Blog;