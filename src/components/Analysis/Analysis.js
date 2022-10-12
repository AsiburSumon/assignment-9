import React, { useEffect, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Analysis.css';

const Analysis = ({quizzes}) => {
    const [allQuizzes, setAllQuizzes] = useState([]);
    
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res=>res.json())
        .then(data=>setAllQuizzes(data.data))
    },[]);
    return (
        <div className='rechart'>
            <h3>Topics are analysis by a chart</h3>
           <div  className='line-chart'>
                <ResponsiveContainer width={'99%'} height={400}>
                    <LineChart width={500}  data={allQuizzes}>
                        <Line type="monotype" dataKey="total" stroke="#82ca9d"/>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
           </div>
            
        </div>
    );
};

export default Analysis;