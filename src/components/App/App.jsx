import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import { countTotalFeedback } from 'utils/countTotalFeedback';
import { countPositiveFeedbackPercentage } from 'utils/countPositiveFeedbackPercentage';
import { Container } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  function handlerButtonClick(event) {
    let name = event.target.name.toLowerCase();
    switch (name) {
      case 'good':
        return setGood(good + 1);

      case 'neutral':
        return setNeutral(neutral + 1);

      case 'bad':
        return setBad(bad + 1);

      default:
        return null;
    }
  }

  function getFeedbackValue() {
    return ['Good', 'Neutral', 'Bad'];
  }

  return (
    <Container>
      React homework template
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={getFeedbackValue()}
          onClick={handlerButtonClick}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback(options)}
          positivePercentage={countPositiveFeedbackPercentage(options)}
        />
      </Section>
    </Container>
  );
}
