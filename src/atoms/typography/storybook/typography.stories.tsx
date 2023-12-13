import Typography from 'atoms/typography/storybook/Typography';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof Typography> = () => <Typography />;

export const typography = Template.bind({});
typography.parameters = {
  options: { showPanel: false },
};
typography.args = {};
