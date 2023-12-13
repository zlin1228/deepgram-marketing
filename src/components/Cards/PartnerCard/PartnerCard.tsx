import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import ComponentButton from 'components/ComponentButton/ComponentButton';

import type { ITemplatePartnerRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface CardProps extends BasicProps, ITemplatePartnerRecord {
  backgroundIsDark?: boolean;
}

const PartnerCard: FC<CardProps> = ({ title, slug, category, thumbnailImage }) => (
  <Link href={`https://deepgram.com/partners/${slug}`} display="flex" height="100%" width="100%">
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
      {thumbnailImage?.url ? (
        <Flex
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="200px"
          maxHeight="100%"
          borderBottom="1px solid"
          borderColor="gray-700"
          overflowX="hidden"
          overflowY="hidden"
        >
          <Image
            src={thumbnailImage.url}
            alt=""
            width={thumbnailImage?.width || 382}
            height={thumbnailImage?.height || 200}
            flexCss={{ width: '100%' }}
            css={{
              width: '100%',
              aspectRatio: '382 / 200',
              objectFit: 'contain',
              objectPosition: 'center',
            }}
          />
        </Flex>
      ) : (
        <Container
          width="100%"
          height="200px"
          borderBottom="1px solid"
          borderColor="gray-700"
          css="img {height: 100% !important;}"
        />
      )}
      <Flex
        flexDirection="column"
        paddingX={24}
        paddingY={32}
        gap="16px"
        lg={{ paddingX: 32 }}
        css={`
          & .MuiButtonBase-root {
            margin: 0 !important;
          }
        `}
      >
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
          <Icon iconName="code" size={14} textColor="primary-300" />
          <Text>{category}</Text>
        </Flex>
        <Text textStyle="xl" fontWeight="semiBold">
          {title}
        </Text>
        <ComponentButton label="Read More" endIcon="arrow-right" buttonType="text" color="secondary" tabIndex={-1} />
      </Flex>
    </Flex>
  </Link>
);

export default PartnerCard;
