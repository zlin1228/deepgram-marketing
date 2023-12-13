import color from 'atoms/colors/colors';
import { fontSize, fontWeight } from 'atoms/typography/typography';

const helperTextStyles = {
  fontSize: fontSize.textSm,
  marginLeft: 0,
  letterSpacing: '0.3px',
};

const labelFocusedStyles = {
  fontWeight: fontWeight.semiBold,
};

const inputRootStyles = {
  minWidth: 320,
  minHeight: 44,
  borderRadius: '4px',
  height: '44px',
};

export const lightTextField = {
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        color: color.gray[500],
        ...helperTextStyles,
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        color: color.gray[400],
        marginTop: 0,
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: color.gray[500],
        '&.Mui-focused': {
          color: color.primary[700],
          ...labelFocusedStyles,
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        ...inputRootStyles,
        backgroundColor: color.gray[900],
        '.MuiInputBase-input': {
          paddingTop: '8px',
          color: color.common.white,
        },
        '&:hover': {
          backgroundColor: color.gray[800],
        },
        '&.Mui-focused': {
          backgroundColor: color.gray[800],
        },
        '& .MuiInputAdornment-positionStart': {
          marginTop: '0!important',
        },
      },
    },
  },
};

export const darkTextField = lightTextField;
