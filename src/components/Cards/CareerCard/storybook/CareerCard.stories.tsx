import CareerCard from 'components/Cards/CareerCard/CareerCard';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof CareerCard> = args => <CareerCard {...args} />;

export const careerCard = Template.bind({});
careerCard.parameters = {
  controls: {
    include: [
      'heading',
      'subhead',
      'details',
      'buttonText',
      'endIcon',
      'startIcon',
      'iconStrokeWidth',
      'iconSize',
      'onClick',
      'href',
    ],
  },
};
careerCard.args = {
  buttonText: 'Apply Now',
  heading: 'Account Executive - Mid-Market',
  subhead: 'Sales',
  details: 'San Diego, CA',
  endIcon: undefined,
  startIcon: undefined,
  iconSize: '1.25rem',
  href: 'https://www.deepgram.com/',
};
