import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import { countTotalFeedback } from 'utils/countTotalFeedback';
import { countPositiveFeedbackPercentage } from 'utils/countPositiveFeedbackPercentage';
import { Container } from './App.styled';
import { capitalizeName } from 'utils/capitalizeName';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerButtonClick = event => {
    this.setState(prevState => {
      let name = event.target.name.toLowerCase();
      return { [name]: prevState[name] + 1 };
    });
  };

  getKeysInLoweCase() {
    const keysOriginalCase = Object.keys(this.state);
    return keysOriginalCase.map(key => capitalizeName(key));
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        React homework template
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={this.getKeysInLoweCase()}
              onClick={this.handlerButtonClick}
            />
          }
        />
        <Section
          title="Statistics"
          children={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback(this.state)}
              positivePercentage={countPositiveFeedbackPercentage(this.state)}
            />
          }
        />
      </Container>
    );
  }
}
