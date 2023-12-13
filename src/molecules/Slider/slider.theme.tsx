import color from 'atoms/colors/colors';
import gradient from 'atoms/colors/gradients';
import shadow from 'atoms/shadows/shadows';
import { fontSize } from 'atoms/typography/typography';

const trackStyles = {
  height: 10,
  background: gradient.primary.green,
  borderWidth: 0,
  border: 'unset',
};

const railStyles = {
  minHeight: 10,
  opacity: 1,
};

const labelStyles = {
  borderRadius: 8,
  boxShadow: shadow.lg,
  fontSize: fontSize.textSm,
  padding: 10,
};

const invertedTrack = {
  height: 8,
};

export const lightSlider = {
  MuiSlider: {
    styleOverrides: {
      root: {
        '&.MuiSlider-trackInverted .MuiSlider-track': {
          backgroundColor: color.gray[200],
          borderColor: color.gray[200],
          ...invertedTrack,
        },
        '&.MuiSlider-trackInverted .MuiSlider-rail': {
          color: color.primary[600],
        },
      },
      thumb: {
        color: color.common.white,
        '&.Mui-disabled': {
          color: color.gray[200],
        },
      },
      track: {
        ...trackStyles,
      },
      rail: {
        color: color.gray[800],
        ...railStyles,
      },
      valueLabel: {
        backgroundColor: color.common.white,
        color: color.gray[700],
        ...labelStyles,
      },
    },
  },
};

export const darkSlider = lightSlider;
