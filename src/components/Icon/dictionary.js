import { takeLast } from 'ramda';

import fire from './images/fire.svg';

const getIconDimensions = (viewbox) => {
  const [width, height] = takeLast(2, viewbox.split(' '));

  return {
    width,
    height,
  };
};

const getIconAttributes = (name) => {
  const { width, height } = getIconDimensions(name.viewBox);

  return {
    src: name,
    viewBox: name.viewBox,
    id: `#${name.id}`,
    width,
    height,
  };
};

export default {
  fire: getIconAttributes(fire),
};
