import React, {Component} from "react";
import './Feedback.css';
import Counter from "./Counter";
import Statistics from './Statistics';
// import PropTypes from 'prop-types';

class Feddback extends Component{
    // static PropTypes = {};
      state = {
    good: 0,
    neutral: 0,
    bad: 0
}
    handleClickGood = event => {
        // const target = event.target;
        // const { target } = event;
        console.log('click on button Good')
        console.log(event.target)

        this.setState(prevState => ({
                good: prevState.good + 1,
            }))
        }

    handleClickNeutral = event => {
        this.setState(prevState => ({
           neutral: prevState.neutral +1,
       }))
    };

    handleClickBad = event => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
    };

    countTotalFeedback = event => {
        console.log('total')
    };
    countPositiveFeedbackPercentage = event => {
        console.log('persent')
    } ;
    
    render() {
        return (
            <div className="container">
                <h1 className="title">Please leave feedback</h1>
                <Counter
                    onClickGood={this.handleClickGood}
                    onClickNeutral={this.handleClickNeutral}
                    onClickBad={this.handleClickBad}
                />
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                />
        </div> )
    }
}
export default Feddback;