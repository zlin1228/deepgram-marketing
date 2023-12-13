import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface FilterProps extends BasicProps {
  backgroundIsDark?: boolean;
  items?: string[];
  activeItem?: string;
  setActive?: (e: string) => void;
}

const PartnerFilter: FC<FilterProps> = ({ items, activeItem, setActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const filterWrapper = useRef<HTMLDivElement>(null);
  useClickAway(filterWrapper, () => setIsExpanded(false));

  return (
    <Flex position="relative" textColor="common-white" ref={filterWrapper} sm={{ display: 'none' }}>
      <Flex
        alignItems="center"
        width="100%"
        backgroundColor="gray-900"
        border="1px solid"
        borderColor="gray-500"
        textColor="gray-200"
        borderRadius="8px"
        cursor="pointer"
        justifyContent="space-between"
        height="52px"
        paddingX={16}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Text fontSize="textMd" fontWeight="semiBold">
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
              paddingY={12}
              paddingX={16}
              borderBottom={index < items.length - 1 ? '1px solid' : undefined}
              borderColor="gray-800"
              onClick={() => (setActive && setActive(item), setIsExpanded(false))}
              cursor="pointer"
              textStyle="md"
              whiteSpace="nowrap"
              fontWeight="semiBold"
              textColor="gray-200"
              hover={{
                backgroundColor: 'gray-800',
              }}
            >
              {item}
            </Text>
          ))}
      </Flex>
    </Flex>
  );
};

export default PartnerFilter;
