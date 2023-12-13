import Image from 'next/image';
import React from 'react';

import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import ComponentButton from 'components/ComponentButton/ComponentButton';

import type { FC } from 'react';

interface SidebarProps {
  pageData: any;
}

const Sidebar: FC<SidebarProps> = ({ pageData }) => (
  <Flex flexDirection="column" rowGap="40px">
    <Flex
      flexDirection="column"
      rowGap="16px"
      md={{ flexDirection: 'row', columnGap: '32px' }}
      lg={{ flexDirection: 'column' }}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        borderRadius="14px"
        paddingX={24}
        height={75}
        width={75}
        css={`
          background-color: #fff;
          img {
            max-width: 100%;
            height: auto;
          }
        `}
        md={{ height: 208, width: 208, minWidth: 208, minHeight: 208 }}
      >
        {pageData['Brandfetch Logo Url'] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <Image width={75} height={75} src={pageData['Brandfetch Logo Url']} alt={pageData['App Name']} />
        ) : (
          <Text fontSize="displaySm" lineHeight="displaySm" fontWeight="bold" textColor="common-white">
            {pageData['App Name']}
          </Text>
        )}
      </Flex>
      <Flex flexDirection="column" gap="16px">
        <Text fontSize="displayMd" fontWeight="bold" lineHeight="displayMd" lg={{ display: 'none' }}>
          {pageData['App Name']}
        </Text>
        <Text fontSize="textMd" lineHeight="textMd" textColor="gray-500" lg={{ display: 'none' }}>
          {pageData['Tagline (formula)']}
        </Text>
        <ComponentButton
          width="max-content"
          borderRadius="4px"
          justifyContent="center"
          border="1px solid rgba(255, 255, 255, 0.10)"
          paddingX={24}
          paddingY={8}
          css={`
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.12) 100%);
            transition: opacity 0.2s ease-in-out;
            &:hover {
              opacity: 0.7;
            }
          `}
          textColor="common-white"
          fontSize="textMd"
          fontWeight="semiBold"
          outline="none"
          lg={{ width: '100%' }}
          label={`Try ${pageData['App Name']}`}
          link={pageData['Website URL']}
        />
      </Flex>
    </Flex>
    <Flex flexDirection="column" md={{ flexDirection: 'row' }} lg={{ flexDirection: 'column' }} gap="32px">
      <Flex flexDirection="column">
        <Text fontSize="textMd" fontWeight="semiBold">
          Links
        </Text>
        <Link href={pageData['Website URL']} fontSize="textSm" fontWeight="semiBold" textColor="common-white">
          {pageData['Domain Name']}
        </Link>
      </Flex>
      <Flex flexDirection="column">
        <Text fontSize="textMd" fontWeight="semiBold">
          Services
        </Text>
        <Text
          fontSize="textXs"
          fontWeight="semiBold"
          textTransform="uppercase"
          textColor="common-white"
          borderRadius="30px"
          backgroundColor="gray-800"
          border="1px solid gray-800"
          width="max-content"
          paddingX={10}
        >
          {pageData['Category Name']}
        </Text>
      </Flex>
    </Flex>
  </Flex>
);
export default Sidebar;
