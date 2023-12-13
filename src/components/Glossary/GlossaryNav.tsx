import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

import Icon from 'atoms/Icons/Icon';
import { media } from 'atoms/breakpoints/breakpoints';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import GlossaryNavItem from 'components/Glossary/GlossaryNavItem';

import type { NavDataProps } from 'pages/ai-glossary/[[...slug]]';
import type { FC } from 'react';

interface GlossaryNavProps {
  navData: NavDataProps[];
  currentSlug: string;
  title: string;
}

const GlossaryNav: FC<GlossaryNavProps> = ({ navData, currentSlug, title }) => {
  const isTablet = useMediaQuery(media.md);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    if (isTablet) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [isTablet]);

  return (
    <Flex
      flexDirection="column"
      borderRight="1px solid #2C2C33"
      paddingTop={32}
      paddingRight={16}
      paddingLeft={32}
      md={{ paddingBottom: 32 }}
    >
      <Flex
        flexDirection="column"
        width="100%"
        gap="12px"
        position="sticky"
        top="100px"
        alignSelf="start"
        maxHeight="calc(100vh - 100px)"
        overflowY="scroll"
        css={`
          &::-webkit-scrollbar {
            display: none;
          }
          -ms-overflow-style: none;
          scrollbar-width: none;
        `}
      >
        <Text
          display="none"
          fontSize="textSm"
          lineHeight="textSm"
          textColor="gray-400"
          paddingTop={12}
          md={{ display: 'flex' }}
        >
          Glossary
        </Text>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          paddingY={12}
          md={{ display: 'none' }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Text textColor="gray-200" fontSize="textMd">
            {title}
          </Text>
          {isExpanded ? (
            <Icon size={16} iconName="chevron-down" color="#E1E1E5" />
          ) : (
            <Icon size={16} iconName="chevron-right" color="#E1E1E5" />
          )}
        </Flex>
        <Flex flexDirection="column" display={isExpanded ? 'flex' : 'none'}>
          {navData.map(item => (
            <GlossaryNavItem key={item?.id} item={item} currentSlug={currentSlug} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GlossaryNav;
