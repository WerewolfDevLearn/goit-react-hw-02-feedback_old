import React from 'react';
import Proptypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
};

export default Section;
