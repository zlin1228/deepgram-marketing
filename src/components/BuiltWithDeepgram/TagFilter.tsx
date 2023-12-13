import { useEffect, useRef, useState } from 'react';
import { useClickAway, useWindowSize } from 'react-use';

import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import type { IEntityTagRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface JobFilterProps extends BasicProps {
  backgroundIsDark?: boolean;
  items?: IEntityTagRecord[];
  activeItem?: string;
  setActive?: (e: string) => void;
  heading?: string;
}

const TagFilter: FC<JobFilterProps> = ({ heading, items, activeItem, setActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDeskTopExpanded, setIsDeskTopExpanded] = useState(false);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const filterWrapper = useRef<HTMLDivElement>(null);
  const itemWrapper = useRef<HTMLDivElement>(null);
  useClickAway(filterWrapper, () => setIsExpanded(false));
  const { width } = useWindowSize();

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    setIsDeskTopExpanded(!isDeskTopExpanded);
  };

  const handleSelect = (id: string) => {
    setActive && setActive(activeItem === id ? '' : id);
    setIsExpanded(false);
  };

  useEffect(() => {
    if (itemWrapper.current) {
      setWrapperHeight((itemWrapper.current as HTMLDivElement).getBoundingClientRect().height);
    }
  }, [width]);

  return (
    <Flex position="relative" textColor="common-white" ref={filterWrapper} flexDirection="column">
      <Flex
        gap="8px"
        alignItems="center"
        cursor="pointer"
        onClick={() => handleExpand()}
        justifyContent="space-between"
        md={{
          justifyContent: 'unset',
        }}
      >
        <Text textStyle="md" fontWeight="semiBold" md={{ display: 'none' }}>
          {items?.filter(item => item.id === activeItem)?.[0]?.heading || heading}
        </Text>
        <Text textStyle="md" fontWeight="semiBold" display="none" md={{ display: 'inline' }}>
          {heading}
        </Text>
        <Icon iconName={isExpanded ? 'chevron-up' : 'chevron-down'} size={16} />
      </Flex>
      <Flex
        flexDirection="column"
        backgroundColor="gray-900"
        borderRadius="8px"
        boxShadow="purpleSm"
        height={isExpanded ? `${wrapperHeight}px` : '0'}
        transition="height 300ms"
        overflowX="hidden"
        overflowY="hidden"
        position="absolute"
        top="100%"
        left="0"
        minWidth="100%"
        zIndex={200}
        md={{
          position: 'relative',
          height: isDeskTopExpanded ? `${wrapperHeight}px` : '0px',
          boxShadow: 'unset',
          borderRadius: '0px',
        }}
      >
        <Flex ref={itemWrapper} flexDirection="column">
          {items &&
            items.map((item, index) => (
              <Text
                key={item.id}
                paddingY={8}
                paddingX={16}
                borderBottom={index < items.length - 1 ? '1px solid' : undefined}
                borderColor="gray-800"
                onClick={() => handleSelect(item.id)}
                cursor="pointer"
                textStyle="sm"
                whiteSpace="nowrap"
                backgroundColor={activeItem === item.id ? 'gray-700' : undefined}
                hover={{
                  backgroundColor: 'gray-700',
                }}
              >
                {item.heading}
              </Text>
            ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TagFilter;
