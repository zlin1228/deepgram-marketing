/* eslint-disable @typescript-eslint/ban-types */
import type { DefaultTheme } from 'styled-components';

const shadow = {
  xs: '0px 1px 2px rgba(38, 44, 52, 0.05)',
  sm: '0px 1px 3px rgba(38, 44, 52, 0.1), 0px 1px 2px rgba(38, 44, 52, 0.06)',
  md: '0px 4px 8px -2px rgba(38, 44, 52, 0.1), 0px 2px 4px -2px rgba(38, 44, 52, 0.06)',
  lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
  xl: '0px 20px 24px -4px rgba(38, 44, 52, 0.1), 0px 8px 8px -4px rgba(38, 44, 52, 0.04)',
  xxl: '0px 24px 48px -12px rgba(38, 44, 52, 0.25)',
  xxxl: '0px 32px 64px -12px rgba(38, 44, 52, 0.2)',
  purpleXs: '0px 1px 2px rgba(75, 60, 255, 0.05)',
  purpleSm: '0px 1px 3px rgba(75, 60, 255, 0.1), 0px 1px 2px rgba(255, 46, 234, 0.06)',
  purpleMd: '0px 4px 8px -2px rgba(75, 60, 255, 0.1), 0px 2px 4px -2px rgba(255, 46, 234, 0.06)',
  purpleLg: '0px 12px 16px -4px rgba(75, 60, 255, 0.1), 0px 4px 6px -2px rgba(255, 46, 234, 0.05)',
  purpleXl: '0px 20px 24px -4px rgba(75, 60, 255, 0.1), 0px 8px 8px -4px rgba(255, 46, 234, 0.04)',
  purple2xl: '0px -24px 48px -12px rgba(255, 46, 234, 0.2), 0px 24px 48px -12px rgba(75, 60, 255, 0.25)',
  purple3xl: '0px -32px 64px -12px rgba(255, 46, 234, 0.3), 0px 32px 64px -12px rgba(75, 60, 255, 0.3)',
  greenButton: '10px 0px 15px rgba(56, 237, 172, 0.2), -10px 0px 15px rgba(150, 162, 255, 0.2)',
  socialShare: '0px -10px 50px rgba(0, 0, 0, 0.25), 0px 30px 80px rgba(0, 0, 0, 0.2)',
  card: '10px 0px 20px rgba(178, 39, 248, 0.2), -10px 0px 20px rgba(236, 4, 143, 0.2)',
  cardGreen: '10px 0px 20px rgba(56, 237, 172, 0.2), -10px 0px 20px rgba(150, 162, 255, 0.2)',
  cardPurple: '10px 0px 20px rgba(157, 54, 246, 0.2), -10px 0px 20px rgba(84, 59, 254, 0.2)',
  pricingCard: '20px 0px 30px 10px rgba(56, 237, 172, 0.1), -20px -5px 30px 10px rgba(79, 206, 255, 0.1)',
} as const;

type ShadowKeys = keyof typeof shadow;
interface ShadowLightDark {
  light: ShadowKeys | (string & {});
  dark: ShadowKeys | (string & {});
}

export type ShadowDefinition = ShadowKeys | ShadowLightDark | (string & {});

const parseInputString = (string: string) => {
  if (Object.keys(shadow).includes(string)) {
    return shadow[string as ShadowKeys];
  }

  return string;
};

export const parseShadow = (palette: DefaultTheme['palette'], input: ShadowDefinition) => {
  if (!input) {
    return;
  }
  if (typeof input === 'object') {
    return parseInputString(input[palette.mode]);
  }

  return parseInputString(input);
};

export default shadow;
