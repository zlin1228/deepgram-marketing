import { objectEntries } from 'utils/typeUtils';

import type { DefaultTheme } from 'styled-components';
import type { valueof } from 'utils/typeUtils';

const color = {
  common: {
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
    activeGreen: '#38EDAC',
    activeBlue: '#96A2FF',
  },
  gray: {
    25: '#FBFBFF',
    50: '#F7F7FB',
    100: '#EDEDF2',
    200: '#E1E1E5',
    300: '#CECED2',
    400: '#A9A9AD',
    500: '#88888C',
    600: '#616165',
    700: '#4E4E52',
    800: '#2C2C33',
    900: '#101014',
  },
  primary: {
    25: '#EFFFF6',
    50: '#E2FDED',
    100: '#B8F8D2',
    200: '#81F4B4',
    300: '#13EF93',
    400: '#00E878',
    500: '#00E062',
    600: '#00CF56',
    700: '#00BB49',
    800: '#00A93D',
    900: '#008727',
  },
  magenta: {
    25: '#FFF0F8',
    50: '#FBE2EF',
    100: '#F6B6D8',
    200: '#F185BE',
    300: '#EF4EA2',
    400: '#EE028C',
    500: '#EF0074',
    600: '#DD0070',
    700: '#C6006A',
    800: '#B10066',
    900: '#89005E',
  },
  purple: {
    25: '#F8F0FF',
    50: '#F3E5FE',
    100: '#DDC0FB',
    200: '#C694FA',
    300: '#AE63F9',
    400: '#9936F7',
    500: '#8400F3',
    600: '#7800ED',
    700: '#6800E5',
    800: '#5600E1',
    900: '#3A00D3',
  },
  error: {
    25: '#FFFBFA',
    50: '#FEF3F2',
    100: '#FEE4E2',
    200: '#FECDCA',
    300: '#FDA29B',
    400: '#F97066',
    500: '#F04438',
    600: '#D92D20',
    700: '#B42318',
    800: '#912018',
    900: '#7A271A',
  },
  warning: {
    25: '#FFFCF5',
    50: '#FFFAEB',
    100: '#FEF0C7',
    200: '#FEDF89',
    300: '#FEC84B',
    400: '#FDB022',
    500: '#F79009',
    600: '#DC6803',
    700: '#B54708',
    800: '#93370D',
    900: '#7A2E0E',
  },
  success: {
    25: '#F6FEF9',
    50: '#ECFDF3',
    100: '#D1FADF',
    200: '#A6F4C5',
    300: '#6CE9A6',
    400: '#32D583',
    500: '#12B76A',
    600: '#039855',
    700: '#027A48',
    800: '#05603A',
    900: '#054F31',
  },
} as const;

export type GetColorOptions<T> = {
  readonly [P in keyof T]: keyof T[P];
};

export type GetColorList<T> = {
  readonly [P in keyof T]: `${P extends number | string ? P : never}-${keyof T[P] extends string | number
    ? keyof T[P]
    : never}`;
}[keyof T];

export const globalValues = ['inherit', 'initial', 'revert', 'revert-layer', 'unset'] as const;
export type GlobalValues = (typeof globalValues)[number];

export type ColorObject = typeof color;
export type ColorOptions = GetColorOptions<ColorObject>;

export type ColorList = GetColorList<ColorObject> | GlobalValues;
export type ColorDefinition = keyof ColorObject;
export const colorListArray = objectEntries(color)
  .map(([colorName, colorValues]) => Object.keys(colorValues).map(value => `${colorName}-${value}`))
  .flat() as ColorList[];

export interface LightAndDark {
  light: ColorList;
  dark: ColorList;
}

type Common = ColorOptions['common'];
type Others = valueof<Omit<ColorOptions, 'common'>>;
type ColorArray = [ColorDefinition, Common | Others];

export type GetColorDefinition = ColorList | LightAndDark;

export const getColor = (palette: DefaultTheme['palette'], colors: GetColorDefinition) => {
  if (!colors) {
    return;
  }

  if (typeof colors === 'string' && globalValues.some(value => value === colors)) {
    return colors;
  }
  const [colorKey, colorValue] =
    typeof colors === 'string' ? (colors.split('-') as ColorArray) : (colors[palette.mode].split('-') as ColorArray);
  const subPalette = palette[colorKey];

  return 'white' in subPalette ? subPalette[colorValue as Common] : subPalette[colorValue as Others];
};

export default color;
