import React from "react";

const FeedbackOptions  = ({onClickGood, onClickNeutral, onClickBad}) => (
    <div className="container_btn">
        <button type="button" onClick={onClickGood} className="button">Good</button>
        <button type="button" onClick={onClickNeutral} className="button">Neutral</button>
        <button type="button" onClick={onClickBad} className="button">Bad</button>
    </div>);
        
    

export default FeedbackOptions;
