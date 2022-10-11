import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Analysis.css';

const Analysis = ({quizzes}) => {
    const [allQuizzes, setAllQuizzes] = useState([]);
    
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res=>res.json())
        .then(data=>setAllQuizzes(data.data))
    },[]);
    return (
        <div>
           <LineChart width={500} height={400} data={allQuizzes}>
            <Line type="monotype" dataKey="total" stroke="#82ca9d"/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip/>
            </LineChart>
        </div>
    );
};

export default Analysis;