import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import color from 'atoms/colors/colors';
import shadow from 'atoms/shadows/shadows';
import { fontSize, lineHeight } from 'atoms/typography/typography';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import { stringToKebabCase } from 'utils/functions';

import type { ColorList } from 'atoms/colors/colors';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';
import type { GroupBase, StylesConfig } from 'react-select';

export interface MenuOption {
  readonly value: string;
  readonly label: string;
}

const colorStyles: StylesConfig<unknown, boolean, GroupBase<MenuOption>> = {
  container: styles => ({
    ...styles,
    minWidth: '100%',
    maxWidth: '100%',
  }),
  control: styles => ({
    ...styles,
    minHeight: '44px',
    borderRadius: '8px',
    borderColor: color.gray[300],
    boxShadow: shadow.xs,
    fontSize: fontSize.textMd,
    lineHeight: lineHeight.textMd,
    color: color.gray[900],
    '&:hover': {
      borderColor: color.gray[300],
    },
  }),
  option: (styles, { isDisabled, isFocused }) => ({
    ...styles,
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: isFocused ? color.gray[100] : undefined,
    fontSize: fontSize.textMd,
    lineHeight: lineHeight.textMd,
    color: color.gray[900],
    cursor: isDisabled ? 'not-allowed' : 'default',
    ':active': {
      ...styles[':active'],
    },
  }),
  multiValueLabel: styles => ({
    ...styles,
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    svg: {
      color: color.gray[700],
    },
  }),
  multiValue: styles => ({
    ...styles,
    borderRadius: '6px',
    border: '1px solid',
    borderColor: color.gray[300],
    backgroundColor: color.common.white,
    padding: 0,
    paddingLeft: 4,
    fontSize: fontSize.textSm,
    lineHeight: lineHeight.textSm,
    color: color.gray[700],
    svg: {
      color: color.gray[400],
    },
    '*[role="button"]:hover': {
      cursor: 'pointer',
      backgroundColor: color.common.transparent,
    },
  }),
  input: styles => ({ ...styles, padding: '5px 0', color: color.gray[700] }),
  singleValue: styles => ({
    ...styles,
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: color.gray[700],
  }),
};

export interface DropdownProps extends BasicProps {
  /**
   * Items set inside `list` as an array will appear inside the `Select` dropdown.
   */
  list: string[] | number[];
  /**
   * displays error message under the label (replaces helper text)
   */
  errorMessage?: string;
  /**
   * If `true`, the component is places in the error state
   */
  error?: boolean;
  /**
   * This sets the `placeholderText` that appears inside `Select` as placeholder text.
   */
  placeholderText?: string;
  /**
   * The label that appears above `Select`.
   */
  label?: string;
  /**
   * The color of the label. Only accepts values from Atoms/Colors.
   */
  labelTextColor?: ColorList;
  /**
   * The value. Use when is selected.
   */
  value?: string | string[] | number | number[];
  /**
   * displays text under the label to assist the user.
   */
  helperText?: string;
  /**
   * Callback fired when a menu item is selected.
   */
  onChange: (value: string | MenuOption | MenuOption[]) => void;
  /**
   * If `true`, multiple options
   */
  isMultiple?: boolean;
  /**
   * If `true`, be able to search dropdown menu options in selectbox
   */
  isSearchable?: boolean;
  /**
   * If `true`, show up clear icon - X in input box
   */
  isClearable?: boolean;
  id?: string;
}

const Dropdown: FC<DropdownProps> = ({
  list,
  placeholderText,
  value,
  label,
  onChange,
  error,
  helperText,
  errorMessage,
  isMultiple,
  labelTextColor = 'gray-600',
  isSearchable = false,
  isClearable = false,
  ...props
}) => {
  const refactorList = list?.map(item => ({
    value: item,
    label: item,
  }));

  const animatedComponents = makeAnimated();

  const selectValue =
    typeof value === 'object' ? value?.map(option => ({ value: option, label: option })) : { value, label: value };

  return (
    <Flex width="100%" flexDirection="column" gap="4px" {...props}>
      <Text
        as="label"
        id={`aria-label-${stringToKebabCase(label || '')}`}
        textStyle="sm"
        fontWeight="medium"
        textColor={labelTextColor}
      >
        {label}
      </Text>
      <Select
        aria-labelledby={`aria-label-${stringToKebabCase(label || '')}`}
        aria-label={!label ? 'Dropdown' : undefined}
        value={value ? selectValue : undefined}
        components={animatedComponents}
        placeholder={placeholderText}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isMulti={isMultiple}
        options={refactorList}
        styles={colorStyles}
        tabSelectsValue
        onChange={e => {
          const changeValue = isMultiple ? (e as MenuOption | MenuOption[]) : (e as MenuOption)?.value;
          onChange(changeValue);
        }}
      />
      {(error || helperText) && (
        <Text textStyle="sm" textColor={error ? 'error-600' : 'gray-600'}>
          {error ? errorMessage : helperText}
        </Text>
      )}
    </Flex>
  );
};

export default Dropdown;
