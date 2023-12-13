import TextField from 'molecules/TextField/TextField';

import type { ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />;

export const textField = Template.bind({});
textField.parameters = {
  controls: {
    include: [
      'label',
      'endIcon',
      'helperText',
      'startIcon',
      'placeholder',
      'tooltipPlacement',
      'tooltipDescription',
      'type',
      'name',
      'disabled',
      'error',
      'required',
      'onEndIconClick',
      'id',
      'tooltip',
      'onChange',
      'value',
      'errorMessage',
    ],
  },
};
textField.args = {
  type: 'text',
  placeholder: 'Enter your email',
  helperText: 'This is a hint to help the user',
  disabled: false,
  error: false,
  errorMessage: 'Something went wrong',
  required: false,
  tooltip: '',
  tooltipDescription: '',
  name: '',
  id: '',
};
