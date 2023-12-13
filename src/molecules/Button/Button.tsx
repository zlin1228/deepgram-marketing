import MUIButton from '@mui/material/Button';
import NextLink from 'next/link';
import styled from 'styled-components';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';
import { flex } from 'quarks/interpolations/flex';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

import parseUrl from 'utils/parseUrl';

import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC, MouseEvent, ReactNode } from 'react';

const StyledButton = styled(MUIButton).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  &&& {
    ${flex}
  }
`;

export interface ButtonProps extends FlexProps {
  /**
   * Pass the label as a child. Works with a string or icon.
   */
  children: ReactNode;
  /**
   * ReactNode of icon to be put at the end of the button
   */
  endIcon?: ReactNode;
  /**
   * ReactNode of icon to be put at the beginning of the button
   */
  startIcon?: ReactNode;
  /**
   * Choose the horizontal size of the icon, with height set automatically. Takes any valid CSS width.
   */
  iconSize?: string;
  /**
   * Determines between an outlined, text, or contained button
   */
  variant?: 'contained' | 'text' | 'outlined';
  /**
   * The URL to link to when the button is clicked. If defined, an `a` element will be used as the root node.
   */
  href?: string;
  /**
   * If `true`, the button is disabled.
   */
  disabled?: boolean;
  /**
   * The size of the component.
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: 'primary' | 'secondary' | 'success' | 'purple' | 'magenta' | 'info' | 'error' | 'black';
  /**
   * Callback fired when the button is clicked. Also fires on `space bar` and `enter` key presses when focused.
   * event: The event source of the callback. You can pull out the new value by accessing `event.target.value` (string).
   */
  onClick?: (event: MouseEvent) => void;
  tabIndex?: number;
}

const Button: FC<ButtonProps> = ({ children, endIcon, startIcon, href, iconSize, ...props }) => {
  const { as, isInternal, ...urlProps } = href ? parseUrl(href) : ({ as: undefined, isInternal: false } as const);

  return (
    <StyledButton
      {...urlProps}
      textDecoration="none"
      forwardedAs={isInternal ? NextLink : as}
      disableRipple
      startIcon={
        startIcon && (
          <Flex width={iconSize} alignItems="center">
            {startIcon}
          </Flex>
        )
      }
      endIcon={
        endIcon && (
          <Flex width={iconSize} alignItems="center">
            {endIcon}
          </Flex>
        )
      }
      type="button"
      {...props}
    >
      <Text className="button-label" position="relative" zIndex={1}>
        {children}
      </Text>
    </StyledButton>
  );
};

export default Button;

Button.defaultProps = {
  size: 'medium',
  disabled: false,
  width: 'fit-content',
  justifyContent: 'center',
  iconSize: 'fit-content',
};
