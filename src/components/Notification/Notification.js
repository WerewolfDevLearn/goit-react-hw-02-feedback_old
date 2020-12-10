import Proptypes from 'prop-types';

function Noitfication({ massage }) {
  return <p>{massage}</p>;
}

Noitfication.porpTypes = {
  massega: Proptypes.string.isRequired,
};

export default Noitfication;
