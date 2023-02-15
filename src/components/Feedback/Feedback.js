import React, {Component} from "react";
import './Feedback.css';
import FeedbackOptions  from "./FeedbackOptions";
import Statistics from './Statistics';
import Dropdown from './Section';
// import PropTypes from 'prop-types';

class Feddback extends Component{

    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0
    };
    // static PropTypes = {};
    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
    };
    handleClickGood = event => {
        // const target = event.target;
        // const { target } = event;
        console.log('click on button Good')
        console.log(event.target)

        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
    };

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

  


    countPositiveFeedbackPercentage = () => {
      return Math.floor(this.state.good/(this.state.good + this.state.neutral + this.state.bad))
    } ;
    

    render() {

    //     countTotalFeedback = () => {
    //     return this.state.good + this.state.neutral + this.state.bad
    // };
    
        let total = this.state.good + this.state.neutral + this.state.bad;
        let positivePercentage = Math.floor(total/(this.state.good))
        

        return (
            <div className="container">
                <h1 className="title">Please leave feedback</h1>
                <FeedbackOptions
                    onClickGood={this.handleClickGood}
                    onClickNeutral={this.handleClickNeutral}
                    onClickBad={this.handleClickBad}
                />
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total ={total}
                    positivePercentage={positivePercentage}
                />
                <Dropdown/>
        </div> )
    }
}
export default Feddback;