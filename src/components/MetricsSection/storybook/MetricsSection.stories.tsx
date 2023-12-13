import { FiPlus } from 'react-icons/fi';

import Button from 'molecules/Button/Button';
import Section from 'molecules/Section/Section';

import MetricCard from 'components/Cards/MetricCard/MetricCard';
import MetricsSection from 'components/MetricsSection/MetricsSection';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof MetricsSection> = args => (
  <Section id="metrics-section">
    <MetricsSection {...args} />
  </Section>
);

const metricProps = {
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

const metricData = Array(3).fill(MetricCard({ ...metricProps }));

export const metricsSection = Template.bind({});
metricsSection.parameters = {
  controls: {
    include: [
      'variant',
      'heading',
      'description',
      'metrics',
      'icon',
      'cardBackgroundColor',
      'accentLineColor',
      'headingTextColor',
      'descriptionTextColor',
    ],
  },
};

metricsSection.args = {
  variant: 'centered',
  heading: 'Great products, faster than ever',
  description: 'Everything you need to build modern UI and great products.',
  metrics: metricData,
  cardBackgroundColor: 'common-transparent',
  accentLineColor: 'primary-600',
  buttons: [
    <Button
      key={1}
      width="100%"
      href="https://www.deepgram.com/"
      iconSize="1.25rem"
      startIcon={<FiPlus />}
      variant="outlined"
    >
      LEFT CTA
    </Button>,
    <Button
      key={2}
      width="100%"
      href="https://www.deepgram.com/"
      iconSize="1.25rem"
      startIcon={<FiPlus />}
      variant="contained"
    >
      RIGHT CTA
    </Button>,
  ],
};
