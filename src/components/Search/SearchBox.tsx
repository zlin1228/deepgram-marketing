import { useEffect, useRef, useState } from 'react';
import { useSearchBox } from 'react-instantsearch-hooks';

import ControlledSearchBox from 'components/Search/ControlledSearchBox';

import type { ChangeEvent, FC } from 'react';
import type { UseSearchBoxProps } from 'react-instantsearch-hooks';

export type SearchBoxProps = UseSearchBoxProps & {
  onClose(): void;
  placeholder?: string;
};

const SearchBox: FC<SearchBoxProps> = props => {
  const { placeholder, onClose } = props;

  const { query, refine } = useSearchBox(props);
  const [value, setValue] = useState(query);

  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => refine(value), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <ControlledSearchBox
      inputRef={inputRef}
      onChange={onChange}
      onClose={onClose}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default SearchBox;
