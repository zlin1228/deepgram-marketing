import axios from 'axios';
import { render } from 'datocms-structured-text-to-plain-text';

import Hero404Bg from 'assets/images/404.png';
import DarkblueGradient from 'assets/images/darkblue-gradient.png';
import DotNetImg from 'assets/images/dot_net.png';
import StarMainGradient from 'assets/images/main_gradient.png';
import PurpleGradient from 'assets/images/purple_gradient_bg.png';
import BackgroundImg from 'assets/svg/background.svg';

import colors from 'atoms/colors/colors';
import gradient from 'atoms/colors/gradients';

import type { Scalars } from 'lib/types';

// eslint-disable-next-line import/prefer-default-export
export const hexToRGB = (hexString: string) => {
  const hex = hexString.length === 7 ? hexString.substring(1).match(/.{1,2}/g) : hexString.match(/.{1,2}/g);
  const rgbArray = hex && [parseInt(hex[0], 16), parseInt(hex[1], 16), parseInt(hex[2], 16)];
  if (!rgbArray) {
    throw new Error('You must provide a valid hex string');
  }

  return rgbArray as [number, number, number];
};

/**
 * @param baseTenValue base ten number or string
 * @returns base 16 value of input as a string || null if no input
 */
export const alphaToBase16 = (baseTenValue: string | number) => {
  if (baseTenValue !== 0 && !baseTenValue) {
    return null;
  }

  return Math.round((Number(baseTenValue) / 100) * 255).toString(16);
};

/**
 * Takes a number or string and returns a CSS parsable size in px if passed a number a string goes right through
 * @param size number or string
 * @returns CSS parsable size in px if passed a number. String goes right through
 */
export const parseSizes = (size?: number | string) => (typeof size === 'number' ? size + 'px' : size);

export const getBackgroundColor = (backgroundColor: string) => {
  switch (backgroundColor) {
    case 'White':
      return colors.common.white;
    case 'Black':
      return colors.common.black;
    case 'Darkblue Gradient':
      return `url(${DarkblueGradient.src}) no-repeat center center`;
    case 'Purple Gradient':
      return `url(${BackgroundImg}) no-repeat left bottom ${colors.common.black}`;
    case 'Purple Green Star Gradient':
      return `url(${PurpleGradient.src}) no-repeat center top ${colors.common.black}`;
    case 'Red Blue Star':
      return colors.common.black;
    case 'Purple Blue Star':
      return `url(${StarMainGradient.src}) no-repeat center bottom ${colors.common.black}`;
    case 'Rainbow Gradient':
      return gradient.primary.rainbowAnimation;
    case 'Rainbow Gradient Animation':
      return gradient.primary.rainbowAnimation;
    case '404':
      return `url(${Hero404Bg.src}) no-repeat center center, ${colors.common.black}`;
    case 'Gray 900':
      return colors.gray[900];
    case 'Dot Net':
      return `url(${DotNetImg.src}) no-repeat center center, ${colors.common.black}`;
    default:
      return backgroundColor;
  }
};

export const toCamelCase = (string: string) =>
  string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());
/**
 * @param id any string, including special characters
 * @returns an all lowercase string with spaces replaced by hyphens
 */
export const stringToKebabCase = (id: string) =>
  id
    .toLowerCase()
    .replace(/[^A-Za-z0-9 ]/g, '')
    .trim()
    .replace(/\s+/g, '-');

export const getColor = (color: string) => {
  if (!color) {
    return 'common-white';
  }
  const colorArr = color.toLowerCase().split(' ');
  const level = colorArr[colorArr.length - 1];
  switch (color) {
    case 'White':
    case 'base_white':
      return 'common-white';
    case 'Gray 100':
      return 'gray-100';
    case 'Gray Gradient':
      return 'common-transparent';
    default:
      if (parseInt(level) > 0) {
        return `${toCamelCase(colorArr.slice(0, colorArr.length - 1).join('-'))}-${level}`.replace(
          'primaryBlue',
          'primary',
        );
      }

      return color.replace('_', '-');
  }
};

export const numberWithCommas = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

/**
 * @param dateStr any string
 * @returns formatted Date
 */
export const FormatDate = (dateStr: string, isStringDate?: boolean) => {
  const tmp = new Date(isStringDate ? dateStr + 'T12:00:00-07:00' : dateStr);

  let date = '';
  let month = '';
  if (tmp.getDate() < 10) {
    date = '0' + tmp.getDate();
  } else {
    date = tmp.getDate().toString();
  }
  if (tmp.getMonth() < 9) {
    month = '0' + (tmp.getMonth() + 1).toString();
  } else {
    month = (tmp.getMonth() + 1).toString();
  }

  return month + '/' + date + '/' + tmp.getFullYear().toString().slice(2);
};

export const getToC = (post: Scalars['JsonField']) =>
  post.document.children
    .filter((child: any) => child?.type === 'heading')
    .map((child: any) => ({
      level: child.level,
      label: render(child),
    }));

export const hexToRgb = (hex: string) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 255, g: 255, b: 255 };
};

export const deKebabString = (id: string) =>
  id
    .replace(/(^|\/|-)(\S)/g, s => s.toUpperCase())
    .replaceAll('-', ' ')
    .replaceAll('_', ' ');

export const getYoutubeId = (url: string) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url?.match(regExp);

  return match && match[7].length === 11 ? match[7] : false;
};

export const getCountryCode = async () => {
  const res = await axios.get('https://ipapi.co/json/');
  const data = res.data;

  return data;
};

export const stringToId = (id: string) =>
  id
    ?.toString()
    .toLowerCase()
    .replace(/x[\d]+;/g, '')
    .replace(/[^a-z0-9\s]+/g, '')
    .replace(/\s/g, '-');

export const chunkArray = (inputArray: any[], chunkSize: number) =>
  Array.from({ length: Math.ceil(inputArray.length / chunkSize) }, (_, i) =>
    inputArray.slice(i * chunkSize, i * chunkSize + chunkSize),
  );
