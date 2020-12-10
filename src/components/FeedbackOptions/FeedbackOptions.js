import { v4 } from 'uuid';
import Proptypes from 'prop-types';
import FeedbackOptionsStl from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const arrOfOptions = Object.keys(options);

  return (
    <div>
      {arrOfOptions.map(option => (
        <button
          type="button"
          key={v4()}
          className={FeedbackOptionsStl.button}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  option: Proptypes.exact({
    good: Proptypes.number.isRequired,
    neutral: Proptypes.number.isRequired,
    bad: Proptypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: Proptypes.func.isRequired,
};

export default FeedbackOptions;
