import color from 'atoms/colors/colors';
import gradient from 'atoms/colors/gradients';
import shadow from 'atoms/shadows/shadows';
import { padding } from 'atoms/spacing/spacing';
import { fontSize, fontWeight } from 'atoms/typography/typography';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    magenta?: PaletteOptions['primary'];
    purple?: PaletteOptions['primary'];
    black?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    xsmall: true;
    xlarge: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    magenta: true;
    purple: true;
    black: true;
  }
}

export const buttonColorOverrides: string[] = ['black'];

const themeOverrides = {
  root: {
    minWidth: 0,
    textTransform: 'capitalize',
    fontWeight: fontWeight.semiBold,
    borderRadius: '4px',
    fontSize: fontSize.textMd,
    paddingLeft: padding[32],
    paddingRight: padding[32],
    transition: 'unset',
    whiteSpace: 'nowrap',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: -1,
      left: -1,
      zIndex: 0,
      opacity: 0,
      transition: 'opacity 100ms ease-in-out, background-position 400ms ease-in-out',
      borderRadius: '4px',
      boxSizing: 'content-box',
      padding: '1px',
    },
  },
};

const sizeVariants = [
  {
    props: { size: 'xsmall' },
    style: {
      paddingTop: padding[4],
      paddingBottom: padding[4],
    },
  },
  {
    props: { size: 'small' },
    style: {
      lineHeight: '2.3',
      height: '44px',
      paddingLeft: padding[20],
      paddingRight: padding[20],
    },
  },
  {
    props: { size: 'medium' },
    style: {
      fontSize: fontSize.textMd,
      lineHeight: '2',
      paddingLeft: padding[20],
      paddingRight: padding[20],
    },
  },
  {
    props: { size: 'large' },
    style: {
      fontSize: fontSize.textMd,
      lineHeight: '2.05',
      paddingLeft: padding[24],
      paddingRight: padding[24],
    },
  },
  {
    props: { size: 'xlarge' },
    style: {
      fontSize: fontSize.textLg,
      lineHeight: '2.4',
      paddingLeft: padding[24],
      paddingRight: padding[24],
    },
  },
];

export const lightButton = {
  MuiButton: {
    styleOverrides: themeOverrides,
    variants: [
      ...sizeVariants,
      {
        props: { variant: 'contained', color: 'primary' },
        style: {
          backgroundColor: color.common.white,
          color: color.common.black,
          border: `1px solid ${color.common.white}`,
          '&::before': {
            background: 'linear-gradient(to right, #008fc1, #00f099, #008fc1, #00f099)',
            backgroundSize: '300% 100%',
          },
          '&:hover': {
            color: color.common.black,
            boxShadow: shadow.xs,
            background: color.common.white,
            '&::before': {
              opacity: 1,
              backgroundPosition: '100% 0',
            },
          },
          '&:focus': {
            background: color.common.white,
            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 2px #687EF7',
            borderColor: color.common.white,
          },
          '&.Mui-disabled': {
            background: color.gray[800],
            color: color.gray[400],
          },
        },
      },
      {
        props: { variant: 'contained', color: 'secondary' },
        style: {
          background: 'rgba(255, 255, 255, 0.2)',
          color: color.common.white,
          border: '1px solid #fff',
          '&::before': {
            background: 'linear-gradient(to right, #008fc1, #00f099, #008fc1, #00f099)',
            backgroundSize: '300% 100%',
          },
          '&:hover': {
            color: color.common.black,
            boxShadow: shadow.xs,
            background: 'rgba(255, 255, 255, 0.2)',
            '&::before': {
              opacity: 1,
              backgroundPosition: '100% 0',
            },
          },
          '&:focus': {
            background: 'rgba(255, 255, 255, 0.2)',
            borderColor: color.common.white,
          },
          '&.Mui-disabled': {
            background: color.gray[800],
            borderColor: color.common.transparent,
            color: color.gray[400],
          },
        },
      },
      {
        props: { variant: 'contained', color: 'success' },
        style: {
          background:
            'linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #201CFF -91.5%, #13EF95 80.05%) border-box',
          color: color.common.white,
          filter:
            'drop-shadow(10px 0px 15px rgba(56, 237, 172, 0.2)) drop-shadow(-10px 0px 15px rgba(150, 162, 255, 0.2))',
          border: '1px solid transparent',
          '&::before': {
            background: 'linear-gradient(to right, #008fc1, #00f099, #008fc1, #00f099)',
            backgroundSize: '300% 100%',
          },
          '&:hover': {
            background:
              'linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #201CFF -91.5%, #13EF95 80.05%) border-box',
            color: color.common.black,
            boxShadow: shadow.xs,
            filter: 'unset',
            '&::before': {
              opacity: 1,
              backgroundPosition: '100% 0',
            },
          },
          '&:focus': {
            background:
              'linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #201CFF -91.5%, #13EF95 80.05%) border-box',
            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 2px #687EF7',
            filter:
              'drop-shadow(10px 0px 15px rgba(56, 237, 172, 0.2)) drop-shadow(-10px 0px 15px rgba(150, 162, 255, 0.2))',
          },
          '&.Mui-disabled': {
            background:
              'linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #201CFF -91.5%, #13EF95 80.05%) border-box',
            boxShadow: shadow.xs,
            color: color.common.white,
            opacity: 0.5,
          },
        },
      },
      {
        props: { variant: 'contained', color: 'magenta' },
        style: {
          background: `linear-gradient(#000, #000) padding-box, ${gradient.primary.red} border-box`,
          color: color.common.white,
          filter:
            'drop-shadow(10px 0px 15px rgba(178, 39, 248, 0.2)) drop-shadow(-10px 0px 15px rgba(236, 4, 143, 0.2))',
          border: '1px solid transparent',
          '&::before': {
            background: 'linear-gradient(to right, #f4008d, #b60af5, #f4008d, #b60af5)',
            backgroundSize: '300% 100%',
          },
          '&:hover': {
            background: `linear-gradient(#000, #000) padding-box, ${gradient.primary.red} border-box`,
            color: color.common.white,
            boxShadow: shadow.xs,
            filter: 'unset',
            '&::before': {
              opacity: 1,
              backgroundPosition: '100% 0',
            },
          },
          '&:focus': {
            background: `linear-gradient(#000, #000) padding-box, ${gradient.primary.red} border-box`,
            color: color.common.white,
            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 2px #687EF7',
            filter:
              'drop-shadow(10px 0px 15px rgba(178, 39, 248, 0.2)) drop-shadow(-10px 0px 15px rgba(236, 4, 143, 0.2))',
          },
          '&.Mui-disabled': {
            background: `linear-gradient(#000, #000) padding-box, ${gradient.primary.green} border-box`,
            boxShadow: shadow.xs,
            color: color.common.white,
            opacity: 0.5,
          },
        },
      },
      {
        props: { variant: 'contained', color: 'purple' },
        style: {
          background:
            'linear-gradient(#000, #000) padding-box, linear-gradient(82.38deg, #FF2EEA -99.24%, #4B3CFF 99.26%) border-box',
          color: color.common.white,
          filter:
            'drop-shadow(10px 0px 15px rgba(157, 54, 246, 0.2)) drop-shadow(-10px 0px 15px rgba(84, 59, 254, 0.2))',
          border: '1px solid transparent',
          '&::before': {
            background: 'linear-gradient(to right, #a426f0, #5b2cf7, #a426f0, #5b2cf7)',
            backgroundSize: '300% 100%',
          },
          '&:hover': {
            background:
              'linear-gradient(#000, #000) padding-box, linear-gradient(82.38deg, #FF2EEA -99.24%, #4B3CFF 99.26%) border-box',
            color: color.common.white,
            boxShadow: shadow.xs,
            filter: 'unset',
            '&::before': {
              opacity: 1,
              backgroundPosition: '100% 0',
            },
          },
          '&:focus': {
            background:
              'linear-gradient(#000, #000) padding-box, linear-gradient(82.38deg, #FF2EEA -99.24%, #4B3CFF 99.26%) border-box',
            color: color.common.white,
            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 2px #687EF7',
            filter:
              'drop-shadow(10px 0px 15px rgba(157, 54, 246, 0.2)) drop-shadow(-10px 0px 15px rgba(84, 59, 254, 0.2))',
          },
          '&.Mui-disabled': {
            background:
              'linear-gradient(#000, #000) padding-box, linear-gradient(82.38deg, #FF2EEA -99.24%, #4B3CFF 99.26%) border-box',
            boxShadow: shadow.xs,
            color: color.common.white,
            opacity: 0.5,
          },
        },
      },
      {
        props: { variant: 'contained', color: 'black' },
        style: {
          background: color.common.black,
          color: color.common.white,
          border: `1px solid ${color.common.white}`,
          '&::before': {
            background: 'linear-gradient(to right, #A9A9AD, #FBFBFF, #A9A9AD, #FBFBFF)',
            backgroundSize: '300% 100%',
          },
          '&:hover': {
            color: color.common.black,
            boxShadow: shadow.xs,
            background: color.common.black,
            '&::before': {
              opacity: 1,
              backgroundPosition: '100% 0',
            },
          },
          '&:focus': {
            background: color.common.black,
            borderColor: color.common.white,
            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 2px #687EF7',
          },
          '&.Mui-disabled': {
            background: color.gray[800],
            borderColor: color.common.transparent,
            color: color.gray[400],
          },
        },
      },
      {
        props: { variant: 'text', color: 'primary' },
        style: {
          color: color.primary[500],
          padding: 0,
          alignItems: 'center',
          '&:hover': {
            color: color.primary[500],
            textDecoration: 'underline',
            backgroundColor: color.common.transparent,
          },
          '&:focus': {
            color: color.primary[500],
            textDecoration: 'none',
            borderRadius: '4px',
            outline: '2px solid #687EF7',
            outlineOffset: '3px',
          },
          '&.Mui-disabled': {
            color: '#96A2FF',
            opacity: 0.5,
          },
        },
      },
      {
        props: { variant: 'text', color: 'secondary' },
        style: {
          color: color.common.white,
          padding: 0,
          alignItems: 'center',
          '&:hover': {
            color: color.gray[600],
            backgroundColor: color.common.transparent,
          },
          '&:focus': {
            color: color.common.white,
            borderRadius: '4px',
            outline: '2px solid #687EF7',
            outlineOffset: '3px',
          },
          '&.Mui-disabled': {
            color: color.common.white,
            opacity: 0.2,
          },
        },
      },
      {
        props: { variant: 'text', color: 'info' },
        style: {
          color: color.magenta[400],
          padding: 0,
          alignItems: 'center',
          '&:hover': {
            color: color.magenta[600],
            backgroundColor: color.common.transparent,
          },
          '&:focus': {
            color: color.magenta[400],
            borderRadius: '4px',
            outline: '2px solid #687EF7',
            outlineOffset: '3px',
          },
          '&.Mui-disabled': {
            color: color.magenta[400],
            opacity: 0.2,
          },
        },
      },
      {
        props: { variant: 'text', color: 'error' },
        style: {
          color: color.purple[400],
          padding: 0,
          alignItems: 'center',
          '&:hover': {
            color: color.purple[600],
            backgroundColor: color.common.transparent,
          },
          '&:focus': {
            color: color.purple[400],
            borderRadius: '4px',
            outline: '2px solid #687EF7',
            outlineOffset: '3px',
          },
          '&.Mui-disabled': {
            color: color.purple[400],
            opacity: 0.2,
          },
        },
      },
    ],
  },
};

export const darkButton = lightButton;
