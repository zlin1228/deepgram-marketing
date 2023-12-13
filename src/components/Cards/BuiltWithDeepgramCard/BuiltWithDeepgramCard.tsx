import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import type { ITemplateBuiltWithDeepgramRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface CardProps extends BasicProps, ITemplateBuiltWithDeepgramRecord {
  backgroundIsDark?: boolean;
}

const BuiltWithDeepgramCard: FC<CardProps> = ({ title, featuredImage, slug, tags, ...props }) => (
  <Link href={`https://deepgram.com/built-with-deepgram/${slug}`} display="flex" {...props}>
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
      width="100%"
      hover={{
        borderColor: 'common-transparent',
        backgroundShorthand: `linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box, ${gradient.primary.red} border-box`,
        boxShadow: 'card',
      }}
    >
      {featuredImage?.url && (
        <Container width="100%" height="200px" borderBottom="1px solid" borderColor="gray-700">
          <Image
            src={featuredImage.url}
            alt=""
            width={featuredImage.width}
            height={featuredImage.height}
            isFullHeight
            isFullWidth
            css={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </Container>
      )}
      <Flex flexDirection="column" paddingX={24} paddingY={32} gap="16px" lg={{ paddingX: 32 }}>
        <Flex flexWrap="wrap" gap="8px">
          {tags &&
            tags.map(tag => (
              <Flex
                key={tag.id}
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
                <Icon iconName="pencil" size={14} textColor="purple-300" />
                <Text>{tag.heading}</Text>
              </Flex>
            ))}
        </Flex>
        <Text textStyle="xl" fontWeight="semiBold">
          {title}
        </Text>
      </Flex>
    </Flex>
  </Link>
);

export default BuiltWithDeepgramCard;
