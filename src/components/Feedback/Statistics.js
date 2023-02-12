import React from "react";


const Statistics = ({good,neutral, bad}) => (
      <div>
        <ul className="list">Statistics</ul>
        <li className="item">Good: {good}</li>
        <li className="item">Neutral: {neutral}</li>
        <li className="item">Bad: {bad}</li>
        <p className="total_counter">Total: </p>
        <p className="positive_feedback">Positive feedback: </p>
    </div> 
)


export default Statistics;