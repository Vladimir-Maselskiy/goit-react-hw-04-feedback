import { countTotalFeedback } from './countTotalFeedback';

export function countPositiveFeedbackPercentage(state) {
  const keys = Object.keys(state);
  const countPositiveFeedbacks = keys.reduce((acc, key) => {
    if (key !== 'bad') {
      return (acc += state[key]);
    }
    return acc;
  }, 0);
  const countTotalFeedbacks = countTotalFeedback(state);
  return ((countPositiveFeedbacks / countTotalFeedbacks) * 100).toFixed(0);
}
