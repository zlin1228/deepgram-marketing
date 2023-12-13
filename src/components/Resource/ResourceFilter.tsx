import { useMediaQuery } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import Icon from 'atoms/Icons/Icon';
import { media } from 'atoms/breakpoints/breakpoints';

import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface ResourceFilterProps extends BasicProps {
  items?: string[];
}

const ResourceFilter: FC<ResourceFilterProps> = ({ items, ...props }) => {
  const isDesktop = useMediaQuery(media.md);
  const [isExpanded, setIsExpanded] = useState(true);
  const filterWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsExpanded(isDesktop);
  }, [isDesktop]);

  return (
    <Flex position="relative" flexDirection="column" gap="10px" textColor="common-white" ref={filterWrapper} {...props}>
      <Flex
        width="100%"
        gap="8px"
        paddingAll={8}
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Text textStyle="md" fontWeight="semiBold">
          Topic
        </Text>
        <Icon iconName={isExpanded ? 'chevron-up' : 'chevron-down'} size={16} />
      </Flex>
      <Flex
        flexDirection="column"
        maxHeight={isExpanded ? 'fit-content' : '0'}
        overflowX="hidden"
        overflowY="hidden"
        minWidth="100%"
        zIndex={200}
        gap="10px"
      >
        {items &&
          items.map(item => {
            const slug = item
              ?.toLowerCase()
              .replace(/x[\d]+;/g, '')
              .replace(/[^a-z0-9\s]+/g, '')
              .replace(/\s/g, '-');

            return (
              <Link key={item} href={`https://deepgram.com/learn/${slug}`}>
                <Text
                  paddingY={8}
                  paddingX={12}
                  cursor="pointer"
                  textStyle="sm"
                  whiteSpace="nowrap"
                  textTransform="capitalize"
                  textColor="common-white"
                >
                  {item?.replace(/-/g, ' ')?.replace(/_/g, ' ')}
                </Text>
              </Link>
            );
          })}
      </Flex>
    </Flex>
  );
};

export default ResourceFilter;
