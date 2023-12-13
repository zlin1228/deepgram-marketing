import { useMediaQuery } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import Icon from 'atoms/Icons/Icon';
import { media } from 'atoms/breakpoints/breakpoints';

import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import type { FC } from 'react';

type TopicFilterProps = {
  backgroundIsDark?: boolean;
  active?: string;
};

const TopicFilter: FC<TopicFilterProps> = ({ active }) => {
  const isDesktop = useMediaQuery(media.md);
  const [isExpanded, setIsExpanded] = useState(true);
  const filterWrapper = useRef<HTMLDivElement>(null);
  const items = [
    {
      heading: 'White Papers & Reports',
      slug: 'white-paper',
    },
    {
      heading: 'Case Studies',
      slug: 'case-study',
    },
    {
      heading: 'Webinars',
      slug: 'webinar',
    },
    {
      heading: 'Articles',
      slug: 'article',
    },
  ];

  useEffect(() => {
    setIsExpanded(isDesktop);
  }, [isDesktop]);

  return (
    <Flex position="relative" flexDirection="column" gap="10px" textColor="common-white" ref={filterWrapper}>
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
          {active && active !== '' ? 'Other ' : ''}Types
        </Text>
        <Icon iconName={isExpanded ? 'chevron-up' : 'chevron-down'} size={16} />
      </Flex>
      <Flex
        flexDirection="column"
        maxHeight={isExpanded ? '300px' : '0'}
        overflowX="hidden"
        overflowY="hidden"
        minWidth="100%"
        zIndex={200}
        gap="10px"
      >
        {items &&
          items.map(item => {
            const slug = item.slug;

            return active !== slug ? (
              <Link key={item.heading} href={`https://deepgram.com/learn/${slug}`}>
                <Text
                  paddingY={8}
                  paddingX={12}
                  cursor="pointer"
                  textStyle="sm"
                  whiteSpace="nowrap"
                  textTransform="capitalize"
                  textColor="common-white"
                >
                  {item.heading}
                </Text>
              </Link>
            ) : (
              <></>
            );
          })}
      </Flex>
    </Flex>
  );
};

export default TopicFilter;
