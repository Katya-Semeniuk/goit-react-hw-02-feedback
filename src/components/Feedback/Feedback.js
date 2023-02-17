import React, {Component} from "react";
import './Feedback.css';
import FeedbackOptions  from "./FeedbackOptions";
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';


class Feddback extends Component{

    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0
    };
   
    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
    };

    handleLeaveFeedback = option => {
        this.setState({
           [option] : this.state[option] + 1,
       })
    };


    render() {
        const { good, neutral, bad } = this.state;

     let total = good + neutral + bad;
    let positivePercentage = Math.floor((good * 100) / total);
        
    return (
        <div className="container">
            <Section title="Please leave feedback">

                 <FeedbackOptions
                 options={Object.keys(this.state)}
                  onLeaveFeedback={this.handleLeaveFeedback} />
            </Section>

            
            <Section title="Statistics">
                {total > 0
                    ? <Statistics
                 good={this.state.good}
                 neutral={this.state.neutral}
                 bad={this.state.bad}
                 total ={total}
                 positivePercentage={positivePercentage}
                    />
                    : <Notification message="There is no feedback" />
                }  
            </Section>
                 
                
                    
        </div> )
    }
}
export default Feddback;