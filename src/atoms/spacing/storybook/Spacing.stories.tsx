import Spacing from 'atoms/spacing/storybook/Spacing';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof Spacing> = () => <Spacing />;

export const spacing = Template.bind({});
spacing.parameters = {
  options: { showPanel: false },
};
spacing.args = {};
