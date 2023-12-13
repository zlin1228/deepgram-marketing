import Dropdown from 'molecules/Dropdown/Dropdown';

import type { ComponentStory } from '@storybook/react';

export const list = ['Phoenix Baker', 'Olivia Rhye', 'Lana Steiner', 'Candice Wu', 'Natali Craig', 'Drew Cano'];

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />;

export const dropdown = Template.bind({});
dropdown.parameters = {
  controls: {
    include: ['placeholderText', 'label', 'error', 'errorMessage', 'helperText', 'isMultiple', 'onChange'],
  },
};

dropdown.args = {
  list,
  placeholderText: 'Select Team Member',
  label: 'Team member',
  error: false,
  errorMessage: 'Something has gone wrong',
  helperText: 'This is helper text for the user',
  isMultiple: false,
  isSearchable: false,
  isClearable: false,
};
