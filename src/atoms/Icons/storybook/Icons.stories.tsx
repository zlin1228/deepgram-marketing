import StoryIcons from 'atoms/Icons/storybook/Icons';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof StoryIcons> = args => <StoryIcons {...args} />;

export const Icons = Template.bind({});
Icons.parameters = {
  controls: {
    include: ['color', 'size', 'title', 'strokeWidth', 'fill'],
  },
};
Icons.args = {
  color: '#2885F6',
  size: 75,
  title: 'Set alt name for Icon',
};
