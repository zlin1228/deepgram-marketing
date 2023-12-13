import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface JobFilterProps extends BasicProps {
  backgroundIsDark?: boolean;
  locations?: string[];
  teams?: string[];
  commitments?: string[];
  activeItem?: string;
  setLocation?: (e: string) => void;
  setTeam?: (e: string) => void;
  setCommitment?: (e: string) => void;
}

const JobMobileFilter: FC<JobFilterProps> = ({
  locations,
  teams,
  commitments,
  setLocation,
  setTeam,
  setCommitment,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const filterWrapper = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState('All Jobs');

  useClickAway(filterWrapper, () => setIsExpanded(false));

  const handleSelect = (value: string, category: string) => {
    setActive(value);
    switch (category) {
      case 'location':
        setLocation && setLocation(value);
        break;
      case 'team':
        setTeam && setTeam(value);
        break;
      case 'commitment':
        setCommitment && setCommitment(value);
        break;
      default:
        break;
    }
  };

  return (
    <Flex width="100%" position="relative" textColor="common-white" ref={filterWrapper}>
      <Flex
        gap="8px"
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        paddingAll={12}
        borderRadius="8px"
        border="1px solid"
        borderColor="gray-500"
        boxShadow="xs"
        width="100%"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Text textStyle="md" fontWeight="semiBold">
          {active}
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
        <Text
          paddingY={8}
          paddingX={16}
          borderBottom="1px solid"
          borderColor="gray-800"
          onClick={() => setActive('All Jobs')}
          cursor="pointer"
          textStyle="sm"
          whiteSpace="nowrap"
          hover={{
            backgroundColor: 'gray-700',
          }}
        >
          All Jobs
        </Text>
        {locations &&
          locations.map(item => (
            <Text
              key={item}
              paddingY={8}
              paddingX={16}
              borderBottom="1px solid"
              borderColor="gray-800"
              onClick={() => handleSelect(item, 'location')}
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
        {teams &&
          teams.map(item => (
            <Text
              key={item}
              paddingY={8}
              paddingX={16}
              borderBottom="1px solid"
              borderColor="gray-800"
              onClick={() => handleSelect(item, 'team')}
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
        {commitments &&
          commitments.map((item, index) => (
            <Text
              key={item}
              paddingY={8}
              paddingX={16}
              borderBottom={index < commitments.length - 1 ? '1px solid' : undefined}
              borderColor="gray-800"
              onClick={() => handleSelect(item, 'commitment')}
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

export default JobMobileFilter;
