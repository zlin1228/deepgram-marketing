import color from 'atoms/colors/colors';

import { keyExistsOnObject, objectEntries } from 'utils/typeUtils';

import type { GetColorList, GetColorOptions } from 'atoms/colors/colors';
import type { Properties } from 'csstype';
import type { DefaultTheme } from 'styled-components';
import type { valueof } from 'utils/typeUtils';

export const gradient = {
  gray: {
    '600a': `conic-gradient(from 259.08deg at 50% 50%, ${color.gray[600]} 0deg, ${color.gray[600]}00 360deg)`,
    '600500a': `linear-gradient(90deg, ${color.gray[600]} 0%, ${color.gray[500]} 100%)`,
    '700600a': `linear-gradient(45deg, ${color.gray[700]} 0%, ${color.gray[600]} 100%)`,
    '800600a': `linear-gradient(45deg, ${color.gray[800]} 0%, ${color.gray[600]} 100%)`,
    '800600b': `linear-gradient(63.44deg, ${color.gray[800]} 16.72%, ${color.gray[600]} 83.39%)`,
    '800700a': `linear-gradient(26.57deg, ${color.gray[800]} 8.33%, ${color.gray[700]} 91.67%)`,
    '900600a': `linear-gradient(45deg, ${color.gray[900]} 0%, ${color.gray[600]} 100%)`,
  },
  primary: {
    '600a': `conic-gradient(from 259.08deg at 50% 50%, ${color.primary[600]} 0deg, ${color.primary[600]}00 360deg)`,
    '600500a': `linear-gradient(90deg, ${color.primary[600]} 0%, ${color.primary[500]} 100%)`,
    '700600a': `linear-gradient(45deg, ${color.primary[700]} 0%, ${color.primary[600]} 100%)`,
    '800600a': `linear-gradient(45deg, ${color.primary[800]} 0%, ${color.primary[600]} 100%)`,
    '800600b': `linear-gradient(63.44deg, ${color.primary[800]} 16.72%, ${color.primary[600]} 83.39%)`,
    '800700a': `linear-gradient(26.57deg, ${color.primary[800]} 8.33%, ${color.primary[600]} 91.67%)`,
    '900600a': `linear-gradient(45deg, ${color.primary[900]} 0%, ${color.primary[600]} 100%)`,
    border: 'linear-gradient(90deg, #201CFF -91.5%, #13EF95 80.05%)',
    purple: 'linear-gradient(90deg, #FF2EEA -100%, #4B3CFF 92.5%)',
    rainbow: `
      linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 22.44%),
      linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 24.55%),
      radial-gradient(36.08% 77.97% at 50% 56.99%, #000000 0%, rgba(0, 0, 0, 0) 100%),
      radial-gradient(108.05% 57.8% at 50.94% 15.51%, #000000 0%, rgba(0, 0, 0, 0) 100%),
      radial-gradient(53.09% 113.92% at -8.96% 66.24%, #E61A32 0%, rgba(82, 0, 255, 0) 100%),
      radial-gradient(46.45% 83.22% at 29.17% 71.22%, #CB37FF 0%, rgba(82, 0, 255, 0) 100%),
      radial-gradient(42.77% 61.09% at 83.96% 59.97%, rgba(1, 118, 58, 0.3) 0%, rgba(3, 94, 61, 0) 100%),
      radial-gradient(55.07% 123.66% at 100% 76.8%, rgba(56, 237, 172, 0.7) 0%, rgba(66, 148, 203, 0.7) 37.65%, rgba(82, 0, 255, 0) 100%),
      radial-gradient(39.06% 39.06% at 66.15% 10.94%, rgba(82, 0, 255, 0.7) 0%, rgba(82, 0, 255, 0) 100%), #000000`,
    rainbowAnimation: `
      linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 22.44%),
      linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 24.55%),
      radial-gradient(calc(36.08% + var(--bgposX)) calc(77.97% + var(--bgposY)) at calc(50% + var(--bgposX)) calc(56.99% + var(--bgposY)), #000000 0%, rgba(0, 0, 0, 0) 100%),
      radial-gradient(calc(108.05% + var(--bgposX)) calc(57.8% + var(--bgposY)) at calc(50.94% + var(--bgposX)) calc(15.51% + var(--bgposY)), #000000 0%, rgba(0, 0, 0, 0) 100%),
      radial-gradient(calc(53.09% + var(--bgposX)) calc(113.92% - var(--bgposY)) at calc(-8.96% + var(--bgposX)) calc(66.24% + var(--bgposY)), #E61A32 0%, rgba(82, 0, 255, 0) 100%),
      radial-gradient(calc(46.45% + var(--bgposX)) calc(83.22% + var(--bgposY)) at calc(29.17% + var(--bgposX)) calc(71.22% + var(--bgposY)), #CB37FF 0%, rgba(82, 0, 255, 0) 100%),
      radial-gradient(calc(42.77% + var(--bgposX)) calc(61.09% - var(--bgposY)) at calc(83.96% - var(--bgposX)) calc(59.97% + var(--bgposY)), rgba(1, 118, 58, 0.3) 0%, rgba(3, 94, 61, 0) 100%),
      radial-gradient(calc(55.07% + var(--bgposX)) 123.66% at calc(100% - var(--bgposX)) calc(76.8% + var(--bgposX)), rgba(56, 237, 172, 0.7) 0%, rgba(66, 148, 203, 0.7) 37.65%, rgba(82, 0, 255, 0) 100%),
      radial-gradient(39.06% 39.06% at 66.15% 10.94%, rgba(82, 0, 255, 0.7) 0%, rgba(82, 0, 255, 0) 100%), #000000`,
    conversion: 'linear-gradient(90deg, #E61A32 0%, #AE03C2 29.17%, #5200FF 59.9%, #378DAF 77.08%, #38EDAC 100%)',
    dark: 'linear-gradient(0deg, #000000 -50%, rgba(0, 0, 0, 0) 150%)',
    red: 'linear-gradient(85.5deg, #EE028B 5.66%, #AE29FF 99.14%)',
    blueGreen: 'linear-gradient(90deg, #201CFF -91.5%, #13EF95 80.05%)',
    green: 'linear-gradient(82.38deg, #201CFF -97.96%, #13EFA0 71.09%)',
    bentoCard:
      'radial-gradient(328.5% 107.45% at 8.44% 14.71%, rgba(238, 199, 255, 0.00) 0%, rgba(78, 51, 195, 0.00) 89.06%), #101014',
    hoverBentoCard: 'linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 100%), #101014',
  },
} as const;

export type GradientObject = typeof gradient;
export type GradientOptions = GetColorOptions<GradientObject>;

export type GradientList = GetColorList<GradientObject> | undefined;
export type GradientDefinition = keyof GradientObject;
export const gradientListArray = objectEntries(gradient)
  .map(([gradientName, gradientValues]) => Object.keys(gradientValues).map(value => `${gradientName}-${value}`))
  .flat() as GradientList[];

export interface LightAndDark {
  light: GradientList;
  dark: GradientList;
}

type GradientKeys = valueof<GradientOptions>;
type GradientArray = [GradientDefinition, GradientKeys];

export type GetGradientDefinition = GradientList | LightAndDark;

export const getGradient = (palette: DefaultTheme['palette'], gradients: GetGradientDefinition) => {
  if (!gradients) {
    return;
  }

  return typeof gradients === 'object' ? gradients[palette.mode] : gradients;
};

/**
 * @param value any string
 * @returns if string is valid gradient atom, returns `gradient`. if not, `url(inputString)`
 */
export const parseBackgroundGradient = (
  palette: DefaultTheme['palette'],
  value: GetGradientDefinition | Properties['backgroundImage'],
) => {
  const parsedValue = getGradient(palette, value as GetGradientDefinition);
  const [gradientName, gradientValue] = parsedValue?.split('-') as GradientArray;

  if (!keyExistsOnObject(gradient, gradientName) || !keyExistsOnObject(gradient[gradientName], gradientValue)) {
    return `url(${value})`;
  }

  return gradient[gradientName][gradientValue];
};

export default gradient;
