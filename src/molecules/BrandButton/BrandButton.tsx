import Button from 'molecules/Button/Button';

import type { ButtonProps } from 'molecules/Button/Button';
import type { FC, ReactNode } from 'react';

interface BrandProps extends ButtonProps {
  /**
   * 'Text or JSX element.'
   */
  children: ReactNode;
  /**
   * Determines the background color of the button. Can be passed any valid CSS color value, including hex, rgba, or hsl.
   */
  brandColor?: string;
  /**
   * Determines the color of text and icon on the button. Can be passed any valid CSS color value, including hex, rgba, or hsl.
   */
  brandTextColor?: string;
}

const BrandButton: FC<BrandProps> = ({ children, disabled, variant, brandColor, brandTextColor, ...props }) => (
  <Button
    variant={variant}
    disabled={disabled}
    css={`
      &&& {
        background-color: ${disabled && variant !== 'outlined' ? 'gray' : brandColor};
        color: ${disabled && variant !== 'outlined' ? 'white' : brandTextColor};
      }
    `}
    {...props}
  >
    {children}
  </Button>
);

export default BrandButton;

BrandButton.defaultProps = {
  textTransform: 'none',
  fontWeight: 'semiBold',
};
