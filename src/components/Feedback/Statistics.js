import React from "react";


const Statistics = ({ good, neutral, bad , total, positivePercentage}) => (

      <div>
        <ul className="list">Statistics</ul>
        <li className="item">Good: {good}</li>
        <li className="item">Neutral: {neutral}</li>
        <li className="item">Bad: {bad}</li>
    <p className="total_counter">Total: {total}</p>
        <p className="positive_feedback">Positive feedback: {positivePercentage} </p>
    </div> 
)


export default Statistics;