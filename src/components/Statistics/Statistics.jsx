import PropTypes from 'prop-types';

import Notification from 'components/Notification/Notification';

export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return total > 0 ? (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedBack: {positivePercentage}%</li>
      </ul>
    </>
  ) : (
    <Notification text={'No feedback given'} />
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
