import { FiPlus } from 'react-icons/fi';

import MetricCard from 'components/Cards/MetricCard/MetricCard';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof MetricCard> = args => <MetricCard {...args} />;

export const metricCard = Template.bind({});
metricCard.parameters = {
  controls: {
    include: [
      'variant',
      'heading',
      'description',
      'icon',
      'metric',
      'metricTextColor',
      'headingTextColor',
      'descriptionTextColor',
      'ctaTextColor',
    ],
  },
};
metricCard.args = {
  variant: 'centered',
  heading: 'Stat padding',
  description: 'This is a descripton',
  icon: <FiPlus />,
  metric: '100%',
  cta: {
    label: 'Learn more',
    href: 'https://www.deepgram.com/',
  },
};
