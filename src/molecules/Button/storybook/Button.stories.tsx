import Button from 'molecules/Button/Button';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const contained = Template.bind({});
contained.parameters = {
  controls: {
    sort: 'none',
    include: [
      'backgroundColor',
      'borderColor',
      'children',
      'disabled',
      'endIcon',
      'href',
      'iconSize',
      'onClick',
      'size',
      'startIcon',
      'textColor',
      'variant',
      'color',
    ],
  },
};
contained.args = {
  children: 'Button CTA',
  variant: 'contained',
  disabled: false,
  size: 'medium',
  iconSize: '1.25rem',
  href: 'https://www.deepgram.com/',
};

export const text = Template.bind({});
text.parameters = {
  controls: {
    include: [
      'backgroundColor',
      'borderColor',
      'children',
      'disabled',
      'endIcon',
      'href',
      'iconSize',
      'onClick',
      'size',
      'startIcon',
      'textColor',
      'variant',
      'color',
    ],
  },
};
text.args = {
  children: 'Button CTA',
  variant: 'text',
  disabled: false,
  size: 'medium',
  iconSize: '1.25rem',
  href: 'https://www.deepgram.com/',
  color: 'black',
};
