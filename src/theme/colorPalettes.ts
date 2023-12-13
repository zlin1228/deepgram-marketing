import color from 'atoms/colors/colors';

import { buttonColorOverrides } from 'molecules/Button/button.theme';

export const lightPalette = {
  background: {
    default: color.common.white,
    paper: color.common.white,
  },
  text: {
    primary: color.gray[900],
    secondary: color.gray[700],
    magenta: color.magenta[700],
    purple: color.purple[700],
  },
};

export const darkPalette = {
  background: {
    default: color.gray[900],
    paper: color.gray[800],
  },
  text: {
    primary: color.common.white,
    secondary: color.gray[200],
    magenta: color.magenta[200],
    purple: color.purple[200],
  },
};

const buttonOverridePalette = buttonColorOverrides.reduce((acc, col) => {
  acc[col] = {};

  return acc;
}, {} as Record<string, Record<string, never>>);

export const standardPalette = {
  ...color,
  ...buttonOverridePalette,
};
