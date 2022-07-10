import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import { Feedback } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onClick }) {
  return (
    <Feedback>
      <ul>
        {options.map(option => (
          <li key={option}>
            <Button name={option} handlerButtonClick={onClick} />
          </li>
        ))}
      </ul>
    </Feedback>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
