import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';

import TextField from 'molecules/TextField/TextField';

import type { FlexProps } from 'quarks/interpolations/flex';
import type { ChangeEvent, FC, KeyboardEvent } from 'react';

interface FormProps extends FlexProps {
  backgroundIsDark?: boolean;
}

const SearchForm: FC<FormProps> = () => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const search = (e.target as HTMLInputElement).value;
      router.push({ pathname: '/partners', query: { search } }, undefined, { shallow: true });
    }
  };

  const handleChange = (e: ChangeEvent) => {
    const search = (e.target as HTMLInputElement).value;
    setSearchValue(search);
  };

  const handleSearch = () => {
    const search = searchValue;
    router.push({ pathname: '/partners', query: { search } }, undefined, { shallow: true });
  };

  useEffect(() => {
    const search = router.query['search'];
    setSearchValue(search?.toString() || '');
  }, [router]);

  return (
    <Flex
      width="100%"
      flexDirection="row"
      backgroundColor="gray-900"
      justifyContent="space-between"
      borderRadius="8px"
      border="1px solid"
      borderColor="gray-500"
      overflowX="hidden"
      overflowY="hidden"
      position="relative"
      hover={{
        backgroundColor: 'gray-800',
      }}
    >
      <TextField
        type="text"
        placeholder="Search"
        flexGrow={1}
        width="100%"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={searchValue}
      />
      <Flex position="absolute" top="12px" right="8px" onClick={() => handleSearch()} cursor="pointer">
        <Icon iconName="search" size={18} color="white" />
      </Flex>
    </Flex>
  );
};

export default SearchForm;
