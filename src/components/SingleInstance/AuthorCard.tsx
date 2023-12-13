import Icon from 'atoms/Icons/Icon';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import type { IEntityPersonRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface AuthorCardProps extends BasicProps, IEntityPersonRecord {
  backgroundIsDark?: boolean;
}

const AuthorCard: FC<AuthorCardProps> = ({ name, role, headshot, slug, externalLink }) => (
  <Flex flexDirection="column" borderRadius="8px" backgroundColor="gray-900" paddingAll={32} textColor="common-white">
    <Link
      href={externalLink ? externalLink : `https://deepgram.com/authors/${slug}`}
      alignSelf="flex-end"
      target={externalLink ? '_blank' : '_self'}
    >
      <Icon iconName="top-right-arrow" size={30} />
    </Link>
    <Container width="128px" height="128px" borderRadius="50%" overflowX="hidden" overflowY="hidden" marginBottom={32}>
      {headshot && (
        <Image
          borderRadius="50%"
          src={headshot.url || ''}
          alt={name || ''}
          width={headshot.width}
          height={headshot.height}
          isFullWidth
          isFullHeight
          css={`
            max-width: 100%;
            max-height: 100%;
          `}
        />
      )}
    </Container>
    <Flex flexDirection="column" gap="6px">
      <Text fontSize="displaySm" lineHeight="displaySm" fontWeight="bold">
        {name}
      </Text>
      {role && (
        <Text
          fontSize="textMd"
          lineHeight="textMd"
          fontWeight="bold"
          backgroundShorthand="linear-gradient(90deg, #201CFF -91.5%, #13EF95 80.05%)"
          backgroundClip="text"
          textColor="common-transparent"
          css={`
            text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `}
        >
          {role}
        </Text>
      )}
    </Flex>
  </Flex>
);

export default AuthorCard;
