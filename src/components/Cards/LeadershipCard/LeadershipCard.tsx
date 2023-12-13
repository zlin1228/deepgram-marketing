import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Text from 'quarks/Text';

import richTextParser from 'utils/richTextParser';

import type { IEntityPersonRecord } from 'lib/types';
import type { FC } from 'react';

interface CardProps extends IEntityPersonRecord {
  isSmall?: boolean;
}

const LeadershipCard: FC<CardProps> = ({ isSmall, name, role, bio, headshot }) => (
  <Flex
    borderRadius="16px"
    overflowX="hidden"
    overflowY="hidden"
    position="relative"
    backgroundShorthand="#D9D9D9"
    width="100%"
    css={`
      &::before {
        content: '';
        display: flex;
        padding-top: ${isSmall ? 100 : 125}%;
      }
      & .user-detail {
        opacity: 0;
      }
      &:hover .user-detail {
        opacity: 1;
      }
    `}
    after={{
      content: '',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      backgroundShorthand: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 42.4%, rgba(0, 0, 0, 0.5) 100%)',
    }}
  >
    {headshot?.url && (
      <Image
        position="absolute"
        src={headshot?.url}
        alt={name || ''}
        width={headshot.width}
        height={headshot.height}
        borderRadius="16px"
        isFullHeight
        isFullWidth
        css={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
    )}
    <Flex
      className="user-detail"
      position="absolute"
      width="100%"
      height="100%"
      left="0"
      top="0"
      zIndex={20}
      flexDirection="column"
      paddingAll={24}
      transition="opacity 300ms"
      borderRadius="16px"
      border="1px solid transparent"
      backgroundShorthand={`linear-gradient(${color.common.black}, ${color.common.black}) padding-box, ${gradient.primary.blueGreen} border-box`}
    >
      {headshot && (
        <Container
          width="84px"
          height="84px"
          borderRadius="50%"
          overflowX="hidden"
          overflowY="hidden"
          marginBottom={20}
          flex="0 0 84px"
        >
          <Image
            borderRadius="50%"
            src={headshot.url || ''}
            alt={name || ''}
            width={84}
            height={84}
            isFullWidth
            isFullHeight
            css={`
              max-width: 100%;
              max-height: 100%;
            `}
          />
        </Container>
      )}
      <Text
        fontSize="displayXs"
        lineHeight="displayXs"
        textColor="common-white"
        fontWeight="bold"
        marginBottom={4}
        sm={{ fontSize: 'displaySm', lineHeight: 'displaySm' }}
      >
        {name}
      </Text>
      <Text
        fontSize="textMd"
        lineHeight="textMd"
        textColor="common-transparent"
        marginBottom={4}
        fontWeight="bold"
        sm={{ fontSize: 'textLg', lineHeight: 'textLg' }}
        css={`
          background: linear-gradient(82.38deg, #201cff -97.96%, #13efa0 33.06%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        `}
      >
        {role}
      </Text>
      {bio && (
        <Container
          fontSize="textMd"
          textColor="gray-200"
          flex="1 0 0"
          overflowY="auto"
          css={`
            &::-webkit-scrollbar {
              border-radius: 100px;
              height: 6px;
              width: 6px;
            }
            &::-webkit-scrollbar-thumb {
              background-color: #2f4053;
              border-radius: 100px;
            }
            &::-webkit-scrollbar-track {
              background-color: #1e2c3c;
              border-radius: 100px;
            }
          `}
        >
          {richTextParser(bio)}
        </Container>
      )}
    </Flex>
  </Flex>
);

export default LeadershipCard;
