import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, PoweredBy } from 'react-instantsearch-hooks-web';

import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import Modal from 'molecules/Modal/Modal';

import SearchBox from 'components/Search/SearchBox';
import SearchResults from 'components/Search/SearchResults';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || '',
);

interface SearchType {
  open: boolean;
  onClose: () => void;
}

const Search = ({ open = false, onClose }: SearchType) => (
  <Modal hasCloseButton={false} open={open} onClose={onClose} keepMounted>
    <Flex
      flexDirection="column"
      width="670px"
      maxWidth="100%"
      backgroundColor="gray-900"
      borderRadius="8px"
      border="1px solid"
      borderColor="gray-700"
    >
      <InstantSearch searchClient={searchClient} indexName="crawler_unified">
        <Flex
          borderBottom="1px solid"
          borderColor="gray-700"
          flexDirection="column"
          backgroundShorthand="rgba(78, 78, 82, 0.2)"
          paddingAll={20}
        >
          <SearchBox placeholder="Search Documents" onClose={onClose} />
        </Flex>
        <SearchResults />
        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap="8px"
          paddingX={20}
          paddingY={20}
          borderTop="1px solid"
          borderColor="gray-700"
          textColor="common-white"
        >
          <Flex flexGrow={1} gap="12px">
            <Flex gap="8px" alignItems="center">
              <Icon iconName="arrow-turn-down-left" size={16} />
              <Text textStyle="sm">To select</Text>
            </Flex>
            <Flex gap="8px" alignItems="center">
              <Icon iconName="arrow-down" size={16} />
              <Icon iconName="arrow-up" size={16} />
              <Text textStyle="sm">To navigate</Text>
            </Flex>
            <Flex gap="8px" alignItems="center">
              <Icon iconName="escape" size={16} />
              <Text textStyle="sm">To cancel</Text>
            </Flex>
          </Flex>
          {/* eslint-disable-next-line no-inline-styles/no-inline-styles */}
          <PoweredBy style={{ width: '120px' }} theme="dark" />
        </Flex>
      </InstantSearch>
    </Flex>
  </Modal>
);

export default Search;
