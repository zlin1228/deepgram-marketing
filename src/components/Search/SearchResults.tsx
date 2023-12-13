import { useHits, useSearchBox } from 'react-instantsearch-hooks';

import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import Hits from 'components/Search/Hits';

import type { FC } from 'react';

const SearchResults: FC = () => {
  const { hits } = useHits();
  const { query } = useSearchBox();

  return query && query !== '' && hits.length > 0 ? (
    <Flex
      flexDirection="column"
      paddingAll={24}
      minHeight="300px"
      maxHeight="400px"
      overflowY="auto"
      css={`
        &::-webkit-scrollbar {
          border-radius: 100px;
          height: 6px;
          width: 6px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #2f4053;
          border-radius: 100px;
        }
        &::-webkit-scrollbar-track {
          background-color: #1e2c3c;
          border-radius: 100px;
        }
      `}
    >
      <Flex marginBottom={24}>
        <Hits headingText="" />
      </Flex>
    </Flex>
  ) : (
    <Flex width="100%" textColor="gray-500" flexDirection="column" gap="16px" alignItems="center" paddingY={64}>
      <Icon iconName="magnifying-glass" size={42} />
      <Text>No recent searches</Text>
    </Flex>
  );
};

export default SearchResults;
