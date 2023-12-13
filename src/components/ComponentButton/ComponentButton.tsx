import { useState } from 'react';

import Icon from 'atoms/Icons/Icon';

import Button from 'molecules/Button/Button';

import VideoPopup from 'components/ComponentVideo/VideoPopup';
import FormPopup from 'components/Form/FormPopup';

import type { IComponentCallToActionRecord } from 'lib/types';
import type { ButtonProps } from 'molecules/Button/Button';
import type { FC, MouseEvent } from 'react';

export const getIcon = (icon: string) => <Icon iconName={icon} size={16} />;

interface ComponentButtonProps
  extends Omit<
      IComponentCallToActionRecord,
      '_createdAt' | 'id' | 'internal' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt'
    >,
    Omit<ButtonProps, 'children' | 'endIcon' | 'startIcon' | 'size' | 'color'> {
  'data-sb-object-id'?: string;
  tabIndex?: number;
}

const ComponentButton: FC<ComponentButtonProps> = ({
  label,
  link,
  disabled,
  buttonType,
  color,
  startIcon,
  endIcon,
  width,
  onClick,
  popup,
  ...props
}) => {
  const buttonVariant = {
    fill: 'contained',
    text: 'text',
  } as const;
  type buttonVariantProps = keyof typeof buttonVariant;

  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (e: MouseEvent) => {
    if (popup) {
      setIsOpen(true);
    } else {
      onClick && onClick(e);
    }
  };

  // TODO Popup Reference
  const referencePopup = () => {
    switch (popup?.__typename) {
      case 'ComponentVideoRecord':
        return <VideoPopup {...popup} open={isOpen} onClose={() => setIsOpen(false)} />;
      case 'ComponentFormRecord':
        return <FormPopup {...popup} open={isOpen} onClose={() => setIsOpen(false)} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Button
        href={link || ''}
        variant={buttonVariant[buttonType as buttonVariantProps]}
        color={
          (buttonType === 'text' && color === 'magenta' && 'info') ||
          (buttonType === 'text' && color === 'purple' && 'error') ||
          (color as ButtonProps['color'])
        }
        endIcon={endIcon ? getIcon(endIcon) : undefined}
        startIcon={startIcon ? getIcon(startIcon) : undefined}
        disabled={disabled}
        marginX="auto"
        width={buttonType === 'text' ? 'fit-content' : '100%'}
        sm={{ width: width || 'fit-content', marginX: 0 }}
        onClick={e => handleButtonClick(e)}
        {...props}
      >
        <span data-sb-field-path={props['data-sb-object-id'] && 'label'}>{label || ''}</span>
      </Button>
      {isOpen && referencePopup()}
    </>
  );
};

export default ComponentButton;

ComponentButton.defaultProps = {
  label: '',
  link: '',
  disabled: false,
  endIcon: '',
};
