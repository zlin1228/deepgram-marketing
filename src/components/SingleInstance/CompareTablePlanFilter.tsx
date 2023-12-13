import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface JobFilterProps extends BasicProps {
  backgroundIsDark?: boolean;
  items?: string[];
  activeItem?: string;
  setActive?: (e: string) => void;
}

const CompareTablePlanFilter: FC<JobFilterProps> = ({ items, activeItem, setActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const filterWrapper = useRef<HTMLDivElement>(null);
  useClickAway(filterWrapper, () => setIsExpanded(false));

  return (
    <Flex position="relative" textColor="common-white" ref={filterWrapper}>
      <Flex
        gap="8px"
        alignItems="center"
        textColor="purple-200"
        cursor="pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Text textStyle="sm" fontWeight="semiBold" sm={{ textStyle: 'md' }}>
          {activeItem}
        </Text>
        <Icon iconName={isExpanded ? 'chevron-up' : 'chevron-down'} size={16} />
      </Flex>
      <Flex
        flexDirection="column"
        backgroundColor="gray-900"
        borderRadius="8px"
        boxShadow="purpleSm"
        maxHeight={isExpanded ? '300px' : '0'}
        overflowX="hidden"
        overflowY="hidden"
        position="absolute"
        top="100%"
        left="0"
        minWidth="100%"
        zIndex={200}
      >
        {items &&
          items.map((item, index) => (
            <Text
              key={item}
              paddingY={8}
              paddingX={16}
              borderBottom={index < items.length - 1 ? '1px solid' : undefined}
              borderColor="gray-800"
              onClick={() => setActive && setActive(item)}
              cursor="pointer"
              textStyle="sm"
              whiteSpace="nowrap"
              hover={{
                backgroundColor: 'gray-700',
              }}
            >
              {item}
            </Text>
          ))}
      </Flex>
    </Flex>
  );
};

export default CompareTablePlanFilter;
