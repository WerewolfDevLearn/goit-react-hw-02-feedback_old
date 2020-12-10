import Proptypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
      </ul>

      <div>
        <p>Total: {total}</p>
        {<p>Positive feedback: {positivePercentage + '%'}</p>}
      </div>
    </>
  );
}

Statistics.propTypes = {
  good: Proptypes.number.isRequired,
  neutral: Proptypes.number.isRequired,
  bad: Proptypes.number.isRequired,
  total: Proptypes.number.isRequired,
  positivePercentage: Proptypes.number.isRequired,
};

export default Statistics;
