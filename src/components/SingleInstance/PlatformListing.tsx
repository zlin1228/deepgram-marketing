import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';
import gradient from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface NewsListingProps extends BasicProps {
  backgroundIsDark?: boolean;
}

const PlatformListing: FC<NewsListingProps> = () => (
  <Flex
    width="100%"
    flexDirection="column"
    gap="32px"
    sm={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}
  >
    <Container flex="0 0 100%" lg={{ flex: '0 0 calc(25% - 24px)' }}>
      <Text fontSize="displaySm" lineHeight="displaySm" fontWeight="bold">
        Listen on your favorite platform
      </Text>
    </Container>
    <Link
      href="https://open.spotify.com/show/0gXLxtjYVk9W5qLnhGMmKp"
      display="flex"
      flex="0 0 100%"
      sm={{ flex: '0 0 calc(33.3% - 22px)' }}
      lg={{ flex: '0 0 calc(25% - 24px)' }}
    >
      <Flex
        width="100%"
        backgroundColor="gray-900"
        textColor="common-white"
        paddingAll={16}
        borderRadius="8px"
        gap="15px"
        alignItems="center"
        border="1px solid"
        borderColor="gray-900"
        css={`
          &:hover {
            border-color: transparent;
            background: linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box,
              ${gradient.primary.blueGreen} border-box;
            & svg path {
              fill: url(#gradient-green);
            }
          }
        `}
      >
        <Flex width="42px" height="42px" flex="0 0 42px" textColor="common-white">
          <Icon iconName="spotify-podcast" size={42} />
          <Icon iconName="gradient-green" />
        </Flex>
        <Flex flexDirection="column" gap="4px">
          <Text textStyle="md" textColor="gray-500">
            Listen on
          </Text>
          <Text textStyle="xl" fontWeight="bold" textColor="common-white">
            Spotify Podcasts
          </Text>
        </Flex>
      </Flex>
    </Link>
    <Link
      href="https://podcasts.apple.com/us/podcast/voice-of-the-future-aka-our-favorite-nerds/id1637015610"
      flex="0 0 100%"
      sm={{ flex: '0 0 calc(33.3% - 22px)' }}
      lg={{ flex: '0 0 calc(25% - 24px)' }}
    >
      <Flex
        backgroundColor="gray-900"
        textColor="common-white"
        paddingAll={16}
        borderRadius="8px"
        gap="15px"
        alignItems="center"
        border="1px solid"
        borderColor="gray-900"
        css={`
          &:hover {
            border-color: transparent;
            background: linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box,
              ${gradient.primary.blueGreen} border-box;
            & svg path {
              fill: url(#gradient-green);
            }
          }
        `}
      >
        <Flex width="42px" height="42px" flex="0 0 42px" textColor="common-white">
          <Icon iconName="apple-podcast" size={42} />
        </Flex>
        <Flex flexDirection="column" gap="4px">
          <Text textStyle="md" textColor="gray-500">
            Listen on
          </Text>
          <Text textStyle="xl" fontWeight="bold" textColor="common-white">
            Apple Podcasts
          </Text>
        </Flex>
      </Flex>
    </Link>
    <Link
      href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xOTc2MzA0LnJzcw?sa=X&ved=2ahUKEwj1_6ei76b5AhXxkI4IHS9-AjIQ9sEGegQIARAC"
      flex="0 0 100%"
      sm={{ flex: '0 0 calc(33.3% - 22px)' }}
      lg={{ flex: '0 0 calc(25% - 24px)' }}
    >
      <Flex
        backgroundColor="gray-900"
        textColor="common-white"
        paddingAll={16}
        borderRadius="8px"
        gap="15px"
        alignItems="center"
        border="1px solid"
        borderColor="gray-900"
        css={`
          &:hover {
            border-color: transparent;
            background: linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box,
              ${gradient.primary.blueGreen} border-box;
            & svg path {
              fill: url(#gradient-green);
            }
          }
        `}
      >
        <Flex width="42px" height="42px" flex="0 0 42px" textColor="common-white">
          <Icon iconName="google-podcast" size={42} />
        </Flex>
        <Flex flexDirection="column" gap="4px">
          <Text textStyle="md" textColor="gray-500">
            Listen on
          </Text>
          <Text textStyle="xl" fontWeight="bold" textColor="common-white">
            Google Podcasts
          </Text>
        </Flex>
      </Flex>
    </Link>
  </Flex>
);

export default PlatformListing;
