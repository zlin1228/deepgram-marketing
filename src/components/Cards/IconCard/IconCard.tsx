import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Text from 'quarks/Text';

import type { IComponentCardRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface IconCardProps extends BasicProps, IComponentCardRecord {
  backgroundIsDark?: boolean;
}

const IconCard: FC<IconCardProps> = ({ heading, image, cardIcon }) => (
  <Flex
    paddingY={24}
    paddingX={32}
    borderRadius="8px"
    backgroundShorthand="rgba(44, 44, 51, 0.6)"
    gap="22px"
    alignItems="center"
  >
    <Flex width="42px" height="42px" flex="0 0 42px">
      {image?.imageDesktop?.url && (
        <Image
          src={image?.imageDesktop?.url}
          alt=""
          width={42}
          height={42}
          css={{
            objectFit: 'contain',
          }}
        />
      )}
      {cardIcon && <Icon iconName={cardIcon} size={42} />}
    </Flex>
    <Text textStyle="lg" fontWeight="semiBold" textColor="common-white">
      {heading}
    </Text>
  </Flex>
);

export default IconCard;
