import color from 'atoms/colors/colors';
import gradient from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import richTextParser from 'utils/richTextParser';

import type { IEntityPersonRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type PodcastGuestListProps = BasicProps & {
  guest: IEntityPersonRecord[];
};

const PodcastGuestList: FC<PodcastGuestListProps> = ({ guest }) => (
  <Container as="section" backgroundColor="common-black" textColor="common-white" paddingY={64}>
    <Container {...sectionSizing}>
      <Flex
        borderRadius="8px"
        border="1px solid transparent"
        paddingAll={32}
        flexWrap="wrap"
        backgroundShorthand={`linear-gradient(${color.common.black}, ${color.common.black}) padding-box, ${gradient.primary.dark} border-box, ${gradient.primary.conversion} border-box`}
        gap="32px"
        lg={{ paddingAll: 64 }}
      >
        <Container flex="0 0 100%" textAlign="center">
          <Heading as="h3" textStyle="md">
            Host & Guests
          </Heading>
        </Container>
        {guest.slice(0, 2).map(user => (
          <Flex
            key={user.id}
            flex="0 0 100%"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap="12px"
            sm={{ flex: '0 0 calc(50% - 16px)', marginX: 'auto' }}
          >
            <Container width="110px" height="110px" borderRadius="50%" backgroundColor="gray-700" position="relative">
              <Image
                position="relative"
                zIndex={1}
                backgroundColor="gray-700"
                borderRadius="50%"
                overflowX="hidden"
                overflowY="hidden"
                src={user.headshot?.url || ''}
                alt={user.name || ''}
                width={110}
                height={110}
                isFullWidth
                isFullHeight
                css={`
                  max-width: 100%;
                  max-height: 100%;
                `}
              />
            </Container>
            <Flex flexDirection="column" gap="4px">
              {user.role && (
                <Text textStyle="lg" fontWeight="bold" textColor="gray-400">
                  {user.role}
                </Text>
              )}
              {user.name && (
                <Text textColor="common-white" fontSize="displayXs" fontWeight="bold">
                  {user.name}
                </Text>
              )}
              {user.bio && (
                <Container fontSize="textMd" fontWeight="regular" textColor="gray-200" marginTop={8}>
                  {richTextParser(user.bio)}
                </Container>
              )}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Container>
  </Container>
);

export default PodcastGuestList;
