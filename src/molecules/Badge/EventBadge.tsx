import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import type { GetColorDefinition } from 'atoms/colors/colors';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface EventBadgeProps extends FlexProps {
  /**
   * This is an optional label for the badge that overrides the variant.
   */
  label?: string;
  /**
   * This displays the variant of badge you want.
   */
  variant?: 'in-person' | 'on-demand' | 'virtual';
  /**
   * Should the variant icon be displayed
   */
  showIcon?: boolean;
  /**
   * A countdown in days until the event.
   */
  countdown?: number;
}

const iconName = {
  'in-person': 'user',
  'on-demand': 'play',
  virtual: 'video',
};
export type IconNameProps = keyof typeof iconName;

const EventBadge: FC<EventBadgeProps> = ({ label, variant, showIcon, countdown, backgroundColor, ...props }) => {
  const hasCountdown = typeof countdown !== 'undefined' && Boolean(countdown >= 0);

  const getBadgeBackground = (daysLeft: number) => {
    if (daysLeft > 3) {
      return 'success-500';
    }
    if (daysLeft > 1) {
      return 'warning-600';
    }
    if (daysLeft === 0 || daysLeft === 1) {
      return 'error-600';
    }

    return 'gray-800';
  };

  return (
    <Flex
      textColor="common-white"
      alignItems="center"
      gap="8px"
      backgroundColor={
        hasCountdown ? (getBadgeBackground(countdown as number) as GetColorDefinition) : backgroundColor || 'gray-800'
      }
      borderRadius="30px"
      paddingX={16}
      paddingY={6}
      maxWidth="fit-content"
      {...props}
    >
      {variant && showIcon && (
        <Flex marginRight={4} width={10}>
          <Icon iconName={iconName[variant]} size={14} textColor="primary-300" />
        </Flex>
      )}
      {!hasCountdown && (
        <Text textTransform="uppercase" lineHeight="one" fontSize="textXs">
          {label || variant}
        </Text>
      )}
      {hasCountdown && countdown > 0 && (
        <Text textTransform="uppercase" lineHeight="one" fontSize="textXs" fontWeight="bold">
          {countdown && countdown > 1 ? `${countdown} days` : `${countdown} day`} left to RSVP!
        </Text>
      )}
      {hasCountdown && countdown === 0 && (
        <Text textTransform="uppercase" lineHeight="one" fontSize="textXs" fontWeight="bold">
          Last day to RSVP!
        </Text>
      )}
    </Flex>
  );
};

export default EventBadge;
