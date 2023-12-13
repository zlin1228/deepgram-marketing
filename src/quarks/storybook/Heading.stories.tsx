import Heading from 'quarks/Heading';

import type { ComponentStory } from '@storybook/react';

export const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />;

export const heading = Template.bind({});
heading.parameters = {
  controls: {
    include: ['as', 'textStyle', 'children'],
  },
};

heading.args = {
  as: 'h1',
  children: "I'm a Heading. Inspect me!",
};
