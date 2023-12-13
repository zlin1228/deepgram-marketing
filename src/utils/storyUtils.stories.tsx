import { FiArrowRight, FiCoffee, FiPlus, FiX } from 'react-icons/fi';

import { ReactComponent as AusFlag } from 'assets/svg/aus-flag.svg';

import MetricCard from 'components/Cards/MetricCard/MetricCard';

export default {
  excludeStories: /.*/,
};

export const metricVariantMap = {
  card: Array(3).fill(
    MetricCard({
      variant: 'card',
      heading: 'Stat padding',
      description: 'This is a descripton',
      metric: '100%',
      cta: {
        label: 'Learn more',
        href: 'https://www.deepgram.com/',
      },
    }),
  ),
  centered: Array(3).fill(
    MetricCard({
      variant: 'centered',
      heading: 'Stat padding',
      description: 'This is a descripton',
      metric: '100%',
      cta: {
        label: 'Learn more',
        href: 'https://www.deepgram.com/',
      },
    }),
  ),
  'action-1': Array(4).fill(
    MetricCard({
      variant: 'action-1',
      heading: 'Stat padding',
      description: 'This is a descripton',
      metric: '100%',
      cta: {
        label: 'Learn more',
        href: 'https://www.deepgram.com/',
      },
    }),
  ),
  'action-2': Array(4).fill(
    MetricCard({
      variant: 'action-2',
      heading: 'Stat padding',
      icon: <FiPlus />,
      description: 'This is a descripton',
      metric: '100%',
      cta: {
        label: 'Learn more',
        href: 'https://www.deepgram.com/',
      },
    }),
  ),
  'accent-line': Array(4).fill(
    MetricCard({
      variant: 'accent-line',
      heading: 'Stat padding',
      description: 'This is a descripton',
      metric: '100%',
      cta: {
        label: 'Learn more',
        href: 'https://www.deepgram.com/',
      },
    }),
  ),
  minimal: Array(4).fill(
    MetricCard({
      variant: 'minimal',
      heading: 'Stat padding',
      description: 'This is a descripton',
      metric: '100%',
      cta: {
        label: 'Learn more',
        href: 'https://www.deepgram.com/',
      },
    }),
  ),
};

export const iconMap = {
  Plus: <FiPlus />,
  ArrowRight: <FiArrowRight />,
  X: <FiX />,
  Coffee: <FiCoffee />,
  AusFlag: <AusFlag />,
  undefined,
};

export const formatMap = {
  Percentage: (value: number) => `${value}%`,
  Celcius: (value: number) => `${value}°C`,
  Fahrenheit: (value: number) => `${value}°F`,
  undefined,
};
export const globalCSSValues = ['initial', 'inherit', 'revert', 'revert-layer', 'unset'];
