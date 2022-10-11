import React from 'react';
import './Option.css';

const Option = ({option, correctAnswer}) => {

    const handleCorrectAnswer = (correctAnswer)=>{
        if(option === correctAnswer){
            return alert('Yes you are right');
        }
        else{
            alert( 'You are wrong')
        }        
    }

    return (
        <div className='option'>
            <ul>
                <button onClick={()=> handleCorrectAnswer(correctAnswer)}>{option}</button>
            </ul>
        </div>
    );
};

export default Option;