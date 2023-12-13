import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import type { IMenuPricingItemRecord } from 'lib/types';
import type { FC } from 'react';

type CardItemProps = IMenuPricingItemRecord & {
  isHover?: boolean;
  index?: number;
};

const PricingCardItem: FC<CardItemProps> = ({ heading, subhead, body, icon, iconColor, isHover, index }) => {
  const getIconColor = (value: string) => {
    switch (value) {
      case 'gray-400':
        return color.gray[400];
      case 'green':
        return color.primary[400];
      default:
        return color.common.white;
    }
  };

  const mouseHoverEffect = (value: string, type = false) => {
    const hoverItems = document.querySelectorAll(`.${value}`);
    if (hoverItems?.length > 0) {
      for (let i = 0; i < hoverItems.length; i++) {
        if (type) {
          (hoverItems[i] as HTMLDivElement).classList.remove('hover-item');
        } else {
          (hoverItems[i] as HTMLDivElement).classList.add('hover-item');
        }
      }
    }
  };

  return (
    <Flex
      className={isHover ? `model-${index}` : undefined}
      width="100%"
      textColor="common-white"
      gap="12px"
      paddingAll={isHover ? 6 : 0}
      borderRadius={isHover ? '4px' : '0px'}
      transition="background-color 200ms ease-in-out"
      onMouseEnter={() => isHover && mouseHoverEffect(`model-${index}`)}
      onMouseLeave={() => isHover && mouseHoverEffect(`model-${index}`, true)}
      hover={{
        backgroundColor: isHover ? 'gray-800' : undefined,
      }}
      css={`
        &.hover-item {
          background-color: ${color.gray[800]};
        }
      `}
    >
      {icon && (
        <Text
          flex="0 0 16px"
          position="relative"
          height={isHover ? '16px' : 'fit-content'}
          css={`
            & svg path {
              fill: ${(!icon.includes('check') && iconColor === 'red-gradient' && 'url(#gradient-red)') ||
              (!icon.includes('check') && iconColor === 'blue-gradient' && 'url(#gradient-green)') ||
              undefined};
              stroke: ${(icon.includes('check') && iconColor === 'red-gradient' && 'url(#gradient-red)') ||
              (icon.includes('check') && iconColor === 'blue-gradient' && 'url(#gradient-green)') ||
              undefined};
            }
          `}
        >
          <Icon iconName={icon} size={16} color={getIconColor(iconColor || '')} />
          {iconColor === 'red-gradient' && <Icon iconName="gradient-red" />}
          {iconColor === 'blue-gradient' && <Icon iconName="gradient-green" />}
        </Text>
      )}
      <Flex flexDirection="column" gap="5px">
        {heading && (
          <Text textStyle="sm">
            {heading}
            {subhead && (
              <>
                {' '}
                (<Text textColor="primary-400">{subhead}</Text>)
              </>
            )}
          </Text>
        )}
        {body && (
          <Text textStyle="xs" textColor="gray-400">
            {body}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default PricingCardItem;
