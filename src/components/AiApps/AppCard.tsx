import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import type { FC } from 'react';

interface AppCardProps {
  app: any;
  fullWidth: boolean;
}

interface StyleLinkProps {
  fullWidth: boolean;
}

const StyledLink = styled.a<StyleLinkProps>`
  display: flex;
  color: unset;
  width: 100%;
  max-width: 100%;
  &:hover {
    .app-card-icon {
      display: flex;
    }
  }
  @media screen and (min-width: 768px) {
    max-width: ${props => (props.fullWidth ? '100%' : 'calc(50% - 8px)')};
  }
`;

const AppCard: FC<AppCardProps> = ({ app, fullWidth }) => (
  <StyledLink href={`/ai-apps/${app?.slug}`} fullWidth={fullWidth}>
    <Flex
      key={app?.name}
      borderRadius="4px"
      border="1px solid rgba(255, 255, 255, 0.15)"
      paddingAll={12}
      gap="24px"
      width="100%"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        height={72}
        minWidth={72}
        maxWidth={72}
        backgroundColor="gray-100"
        borderRadius="4px"
        paddingX={8}
        css={`
          img {
            max-width: 100%;
            height: auto;
          }
        `}
      >
        {app?.logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <Image height={72} width={72} src={app?.logoUrl} alt={app?.name} />
        ) : (
          <Text
            textAlign="center"
            css={`
              font-size: 8px;
              font-weight: bold;
            `}
          >
            {app?.name}
          </Text>
        )}
      </Flex>
      <Flex flexDirection="column" alignItems="stretch" width="100%">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="textMd" lineHeight="textMd" fontWeight="bold" textColor="common-white">
            {app?.name}
          </Text>
          <Flex className="app-card-icon" display="none">
            <Icon iconName="arrow-up-right" size={16} />
          </Flex>
        </Flex>
        <Text
          fontSize="textXs"
          lineHeight="textXs"
          fontWeight="regular"
          textColor="gray-500"
          css={`
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          `}
        >
          {app?.tagline}
        </Text>
        <Flex
          key={app?.usecase}
          flexShrink={0}
          flexGrow={0}
          width="fit-content"
          paddingX={10}
          paddingTop={2}
          borderRadius="30px"
          marginTop={12}
          backgroundColor="gray-800"
          textAlign="center"
        >
          <Text
            fontSize="text2Xs"
            lineHeight="textXs"
            fontWeight="semiBold"
            textColor="gray-200"
            textTransform="uppercase"
          >
            {app?.category?.[0]}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </StyledLink>
);

export default AppCard;
