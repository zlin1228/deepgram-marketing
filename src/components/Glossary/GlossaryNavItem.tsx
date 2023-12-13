import Link from 'next/link';
import { useState } from 'react';

import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import Button from 'molecules/Button/Button';

import type { NavDataProps } from 'pages/ai-glossary/[[...slug]]';
import type { FC } from 'react';

interface GlossaryNavItemProps {
  item: NavDataProps;
  currentSlug: string;
}

const GlossaryNavItem: FC<GlossaryNavItemProps> = ({ item, currentSlug }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Flex key={item?.id} id={item?.id} flexDirection="column" paddingY={12}>
      {item?.subcategoryPages && item.subcategoryPages.length === 0 && (
        <Flex paddingLeft={6} gap="6px" alignItems="center">
          <Icon
            size={8}
            paddingX={4}
            iconName="dot"
            css={`
              svg {
                fill: #fff;
              }
            `}
          />
          <Link href={item?.slug || ''}>
            <Text textColor={currentSlug === item?.slug ? 'common-white' : 'gray-500'} fontSize="textSm">
              {item?.title}
            </Text>
          </Link>
        </Flex>
      )}
      {item?.subcategoryPages && item.subcategoryPages.length > 0 && (
        <Flex gap="6px" alignItems="center" css={{ paddingLeft: '5px' }}>
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            outline="none"
            css={`
              .button-label {
                display: flex;
                padding-right: 1px;
              }
            `}
          >
            {isExpanded ? (
              <Icon size={16} iconName="chevron-down" color="#fff" />
            ) : (
              <Icon size={16} iconName="chevron-right" color="#fff" />
            )}
          </Button>

          <Link href={item?.slug || ''}>
            <Text
              onClick={() => setIsExpanded(true)}
              textColor={currentSlug === item?.slug ? 'common-white' : 'gray-500'}
              fontSize="textSm"
            >
              {item?.title}
            </Text>
          </Link>
        </Flex>
      )}
      {item?.subcategoryPages && item.subcategoryPages.length > 0 && (
        <Flex paddingLeft={12} display={isExpanded ? 'flex' : 'none'}>
          <Flex borderLeft="1px solid #4E4E52" flexDirection="column" paddingLeft={12}>
            {item?.subcategoryPages.map(subItem => (
              <Link key={subItem?.id} href={`${subItem?.slug}`} css={{ padding: '12px 0px' }}>
                <Text
                  key={subItem?.id}
                  textColor={currentSlug === subItem?.slug ? 'common-white' : 'gray-500'}
                  fontSize="textSm"
                  hover={{ textColor: 'common-white' }}
                >
                  {subItem?.title}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default GlossaryNavItem;
