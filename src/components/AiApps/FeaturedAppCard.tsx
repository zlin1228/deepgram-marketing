import styled from 'styled-components';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import type { FC } from 'react';

interface FeaturedAppCardProps {
  featuredApp: {
    name: string;
    tagline: string;
    slug: string;
    category: string;
    accentColor: string;
    darkColor: string;
    logoUrl: string;
  };
}

const StyledLink = styled.a`
  display: flex;
  color: unset;
  @media screen and (min-width: 768px) {
    display: flex;
    flex: 0 0 calc(100%);
  }
`;

const FeaturedAppCard: FC<FeaturedAppCardProps> = ({ featuredApp }) => (
  <StyledLink href={`/ai-apps/${featuredApp?.slug}`}>
    <Flex
      key={featuredApp?.name}
      flexDirection="column"
      flex="0 0 100%"
      justifyContent="space-between"
      paddingAll={32}
      gap="24px"
      borderRadius="4px"
      border="1px solid transparent"
      backgroundShorthand="linear-gradient(266deg, #0D0D0D 0.63%, #1A1A1A 53.27%, #0D0D0D 97.82%) padding-box, linear-gradient( to right, #EE028B 5.66%, #AE29FF 99.14%) border-box"
      md={{ flexDirection: 'row', gap: '64px' }}
    >
      <Flex columnGap="32px">
        <Flex
          justifyContent="center"
          alignItems="center"
          height={72}
          minWidth={72}
          maxWidth={72}
          borderRadius="4px"
          paddingX={8}
          backgroundColor="common-white"
          css={`
            img {
              max-width: 100%;
              height: auto;
            }
          `}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {featuredApp?.logoUrl ? (
            <img src={featuredApp?.logoUrl} alt={featuredApp?.name} />
          ) : (
            <Text>{featuredApp?.name}</Text>
          )}
        </Flex>
        <Flex flexDirection="column" rowGap="12px">
          <Text
            paddingX={10}
            borderRadius="30px"
            css={{ background: '#00E878', fontSize: '10px' }}
            width="max-content"
            textColor="common-black"
            fontWeight="semiBold"
          >
            FEATURED
          </Text>
          <Text css={{ fontSize: '30px', lineHeight: '38px' }} fontWeight="bold">
            {featuredApp?.name}
          </Text>
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <Text fontSize="textSm" lineHeight="textSm" fontWeight="regular" textColor="gray-500">
          {featuredApp.tagline}
        </Text>
        <Flex
          key={featuredApp?.category}
          flexShrink={0}
          flexGrow={0}
          width="max-content"
          backgroundColor="gray-800"
          paddingX={10}
          paddingY={4}
          borderRadius="30px"
          marginTop={12}
        >
          <Text
            fontSize="textXs"
            lineHeight="textXs"
            fontWeight="semiBold"
            textColor="gray-200"
            textTransform="uppercase"
          >
            {featuredApp?.category}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </StyledLink>
);

export default FeaturedAppCard;
