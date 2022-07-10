import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export default function Button({ name, handlerButtonClick }) {
  return (
    <ButtonStyled name={name} onClick={handlerButtonClick}>
      {name}
    </ButtonStyled>
  );
}

Button.prototype = {
  name: PropTypes.string.isRequired,
  handlerButtonClick: PropTypes.func.isRequired,
};
