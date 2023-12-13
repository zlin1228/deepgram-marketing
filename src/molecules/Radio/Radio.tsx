import FormControlLabel from '@mui/material/FormControlLabel';
import MuiRadio from '@mui/material/Radio';
import styled from 'styled-components';

import Text from 'quarks/Text';
import { basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC, ReactNode, SyntheticEvent } from 'react';

const StyledFormControl = styled(FormControlLabel).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  && {
    ${basic}
  }
`;

interface RadioProps extends BasicProps {
  /**
   * Text label of the Radio button
   */
  label?: string;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * displays error message under the label (replaces helper text)
   */
  errorMessage?: string;
  /**
   * If `true`, the component is places in the error state
   */
  error?: boolean;
  /**
   * Determines the size of the `Radio`
   */
  size?: 'large' | 'small';
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;
  /**
   * If `true`, the component is required.
   */
  required?: boolean;
  /**
   * displays text under the label to assist the user
   */
  helperText?: string | ReactNode;
  /**
   * Callback fired when the state is changed.
   * **Signature:**
   * `function(event: React.ChangeEvent<HTMLInputElement>) => void`
   * event: The event source of the callback. You can pull out the new value by accessing `event.target.value` (string). You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (event: SyntheticEvent<Element, Event>, checked: boolean) => void;
  /**
   * The id of the `input` element.
   */
  id?: string;
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value?: string | boolean;
}

const Radio: FC<RadioProps> = ({
  label,
  size,
  checked,
  required,
  value,
  helperText,
  id,
  disabled,
  error,
  errorMessage,
  ...props
}) => {
  const labelComponent = (
    <>
      <Text
        className="radio-label"
        fontSize={size === 'small' ? 'textSm' : 'textMd'}
        fontWeight="semiBold"
        textColor={{ light: 'gray-900', dark: 'gray-300' }}
      >
        {label}
      </Text>
      {helperText && (
        <Text
          className="radio-helper"
          display="block"
          textStyle={size === 'small' ? 'sm' : 'md'}
          textColor={error ? 'magenta-600' : { light: 'gray-500', dark: 'gray-300' }}
        >
          {error ? errorMessage : helperText}
        </Text>
      )}
    </>
  );

  return (
    <StyledFormControl
      control={<MuiRadio size={size} required={required} />}
      disabled={disabled}
      checked={checked}
      id={id}
      value={value}
      label={labelComponent}
      {...props}
    />
  );
};

Radio.defaultProps = {
  label: '',
  size: 'small',
};

export default Radio;
