import WebinarBg from 'assets/images/webinar.png';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import type { ITemplateExternalWebinarRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface CardProps extends BasicProps, ITemplateExternalWebinarRecord {
  backgroundIsDark?: boolean;
}

const WebinarCard: FC<CardProps> = ({ title, url, thumbnail, ...props }) => (
  <Link display="flex" href={url || ''} height="100%">
    <Flex
      flexDirection="column"
      borderRadius="8px"
      backgroundColor="gray-900"
      textColor="common-white"
      border="1px solid"
      borderColor="gray-700"
      overflowX="hidden"
      overflowY="hidden"
      height="100%"
      hover={{
        borderColor: 'common-transparent',
        backgroundShorthand: `linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box, ${gradient.primary.blueGreen} border-box`,
        boxShadow: 'cardGreen',
      }}
      {...props}
    >
      <Container width="100%" height="200px" borderBottom="1px solid" borderColor="gray-700">
        <Image
          src={thumbnail?.url || WebinarBg.src}
          alt={thumbnail?.alt ?? title ?? 'Featured Image'}
          width={thumbnail?.width || 768}
          height={thumbnail?.height || 390}
          isFullWidth
          isFullHeight
          css={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Container>
      <Flex flexDirection="column" paddingX={24} paddingY={32} gap="16px" lg={{ paddingX: 32 }}>
        <Flex
          paddingY={4}
          paddingX={10}
          borderRadius="30px"
          backgroundColor="gray-800"
          textColor="common-white"
          fontSize="textXs"
          lineHeight="textXs"
          fontWeight="bold"
          width="fit-content"
          textTransform="uppercase"
          gap="8px"
          alignItems="center"
        >
          <Icon iconName="display" size={14} textColor="primary-300" />
          <Text>WEBINAR</Text>
        </Flex>
        <Text textStyle="xl" fontWeight="semiBold">
          {title}
        </Text>
      </Flex>
    </Flex>
  </Link>
);

export default WebinarCard;
