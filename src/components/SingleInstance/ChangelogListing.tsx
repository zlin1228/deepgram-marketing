import { useEffect, useRef, useState } from 'react';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import ChangelogCard from 'components/Cards/ChangelogCard/ChangelogCard';
import ComponentButton from 'components/ComponentButton/ComponentButton';

import { stringToKebabCase } from 'utils/functions';

import type { IComponentSingleInstanceRecord, ITemplateChangelogRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface JobListingProps extends BasicProps, IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
  changelogs?: {
    allTemplateChangelogs: ITemplateChangelogRecord[];
  };
}

const categories = [
  'All',
  'API',
  'Coming Soon',
  'Feature',
  'Languages',
  'Notices',
  'On-Prem',
  'Realtime',
  'Smart Formatting',
  'Speech Model',
];
const categoryValueFunction = (value: string) => {
  switch (value) {
    case 'Coming Soon':
      return 'coming_soon';
    case 'On-Prem':
      return 'onPrem';
    case 'Smart Formatting':
      return 'smart_formatting';
    case 'Speech Model':
      return 'speechModel';
    default:
      return stringToKebabCase(value);
  }
};

const ChangelogListing: FC<JobListingProps> = ({ changelogs }) => {
  const listItems = changelogs?.allTemplateChangelogs || [];
  const [filterItem, setFilterItem] = useState<string[]>([]);
  const [data, setData] = useState<ITemplateChangelogRecord[]>(listItems);
  const [page, setPage] = useState<number>(1);

  const countPerPage = 15;
  const wrapper = useRef<HTMLDivElement>(null);

  const handleCategory = (value: string) => {
    if (value === 'All') {
      setFilterItem([]);
    } else if (!filterItem.includes(value)) {
      setFilterItem([...filterItem, value]);
    } else {
      setFilterItem(current => current.filter(item => item !== value));
    }
    setPage(1);

    return;
  };

  const goPage = (pg: number) => {
    setPage(pg);
    if (wrapper.current) {
      const element = wrapper.current as HTMLDivElement;
      const headerOffset = 180;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (filterItem.length === 0) {
      setData(listItems);
    } else {
      const filtered = listItems?.filter(item =>
        filterItem.some(element => item?.category?.includes(categoryValueFunction(element))),
      );
      setData(filtered);
    }
  }, [filterItem]);

  return (
    <Flex ref={wrapper} width="100%" flexDirection="column" gap="40px">
      <Flex
        width="100%"
        gap="16px"
        justifyContent="center"
        flexWrap="wrap"
        paddingTop={32}
        marginBottom={32}
        borderTop="1px solid"
        borderColor="gray-500"
      >
        {categories.map(item => (
          <ComponentButton
            key={item}
            label={item}
            buttonType="fill"
            color="magenta"
            fontSize="textSm"
            minWidth="fit-content"
            onClick={() => handleCategory(item)}
            css={`
              color: ${filterItem.includes(item) ? '#00BB49' : undefined}!important;
              &:hover {
                color: #fff !important;
              }
            `}
          />
        ))}
      </Flex>
      {data.length > 0 && (
        <Flex width="100%" gap="32px" flexDirection="column">
          {data.slice((page - 1) * countPerPage, page * countPerPage).map(item => (
            <ChangelogCard key={item?.id} {...item} />
          ))}
        </Flex>
      )}
      {data.length > 0 && (
        <Flex width="100%" gap="16px" alignItems="center" justifyContent="space-between">
          <Text textStyle="sm" textColor="common-white">
            Page {page} of {Math.ceil(data.length / countPerPage)}
          </Text>
          <ComponentButton
            label="Previous Posts"
            buttonType="fill"
            color="magenta"
            fontSize="textSm"
            minWidth="fit-content"
            endIcon="chevron-right"
            onClick={() => goPage(page === Math.ceil(data.length / countPerPage) ? 1 : page + 1)}
            css={`
              svg {
                z-index: 1;
              }
            `}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default ChangelogListing;
