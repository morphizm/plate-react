import React from 'react';
import PropTypes from 'prop-types';
import dictonary from './dictionary.js';

const Icon = (props) => {
  const {
    name, width, height, style, ...rest
  } = props;
  const {
    viewBox, width: dictonaryWidth, height: dictonaryHeight, id,
  } = dictonary[name];
  const widthValue = width || dictonaryWidth;
  const heightValue = height || dictonaryHeight;

  return (
    <svg viewBox={viewBox} width={widthValue} height={heightValue} style={style} {...rest}>
      <use xlinkHref={id} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.shape(),
};

Icon.defaultProps = {
  height: 24,
  width: 24,
  style: {},
};

export default Icon;
