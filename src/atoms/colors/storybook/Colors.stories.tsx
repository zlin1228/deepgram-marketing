import Colors from 'atoms/colors/storybook/Colors';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof Colors> = () => <Colors />;

export const colors = Template.bind({});
colors.parameters = {
  options: { showPanel: false },
};
