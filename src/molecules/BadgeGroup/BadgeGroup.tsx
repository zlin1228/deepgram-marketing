import Flex from 'quarks/Flex';

import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC, ReactNode } from 'react';

interface BadgeGroupProps extends FlexProps {
  /**
   * `<Badge>` component to be used within the `BadgeGroup`
   */
  children: ReactNode;
  /**
   * Determines if the badge will be at the `start` or `end` of the badgeGroup
   */
  badgePosition: 'start' | 'end';
  /**
   * Text that will appear next to the badge.
   */
  title: string;
  /**
   * Optional icon to go after/before the text. the icon will always be on the opposite side of the badge.
   */
  icon?: ReactNode;
}

const BadgeGroup: FC<BadgeGroupProps> = ({ children, badgePosition, icon, title, ...props }) => {
  const isBadgeStart = badgePosition === 'start';

  return (
    <Flex
      gap="8px"
      paddingX={12}
      paddingY={4}
      lineHeight="lg"
      width="fit-content"
      backgroundColor="magenta-300"
      borderRadius="16px"
      fontSize="textXs"
      fontWeight="semiBold"
      alignItems="center"
      flexDirection={isBadgeStart ? 'row' : 'row-reverse'}
      {...props}
    >
      {children}
      {title}
      {icon && icon}
    </Flex>
  );
};

export default BadgeGroup;

BadgeGroup.defaultProps = {
  textColor: { light: 'primary-700', dark: 'gray-700' },
  backgroundColor: { light: 'primary-50', dark: 'gray-50' },
  badgePosition: 'start',
};
