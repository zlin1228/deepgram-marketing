import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';

import ResourecCardDeck from 'components/CardDeck/ResourecCardDeck';
import ComponentButton from 'components/ComponentButton/ComponentButton';
import PartnerFilter from 'components/SingleInstance/PartnerFilter';

import type { IComponentSingleInstanceRecord, ITemplatePartnerRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface ResourceListingProps extends BasicProps, IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
  resourceList?: any;
  partners?: ITemplatePartnerRecord[];
}

const paddingProps = {
  paddingY: 48,
  sm: {
    paddingY: 72,
  },
  lg: {
    paddingY: 96,
  },
} as const;

const PartnerListing: FC<ResourceListingProps> = ({ partners }) => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All partners');
  const [filteredList, setFilteredList] = useState(partners);
  const filter = ['All partners', 'Technology', 'Development'];
  const SectionTitle: FC<{ title: string; type?: string }> = ({ title, type }) => (
    <Flex paddingBottom={16} borderBottom="2px solid" borderColor="gray-700" sm={{ justifyContent: 'space-between' }}>
      <Heading as="h3" textStyle="xs" textColor="common-white" sm={{ textStyle: 'sm' }} lg={{ textStyle: 'md' }}>
        {title}
      </Heading>
      {type && (
        <ComponentButton
          label="View All"
          endIcon="arrow-right"
          buttonType="text"
          color="secondary"
          href={`https://deepgram.com/partners/${type}`}
        />
      )}
    </Flex>
  );

  const handleFilter = (string: string) => {
    if (string !== activeFilter) {
      router.push(
        `/partners/${string !== 'All partners' ? '?content_type=' + string?.toLowerCase().replace(/\s/g, '-') : ''}`,
        undefined,
        { shallow: true },
      );
    }
  };

  useEffect(() => {
    const contentType = router.query['content_type'];
    const search = router.query['search'];

    const filtered = partners?.filter(
      pt =>
        (!contentType ||
          (contentType && pt.category?.toLowerCase().replace(/\s/g, '-') === contentType.toString().toLowerCase())) &&
        (!search ||
          (search &&
            (pt.title?.toLowerCase().includes(search.toString().toLowerCase()) ||
              pt.category?.toLowerCase().includes(search.toString().toLowerCase())))),
    );
    setFilteredList(filtered);

    contentType
      ? contentType !== '' &&
        filter.map(item => {
          contentType === item?.toLowerCase().replace(/\s/g, '-') && setActiveFilter(item);

          return;
        })
      : setActiveFilter('All partners');
  }, [router]);

  return (
    <Flex flexDirection="column" width="100%">
      <Container width="100%">
        <Container
          width="100%"
          overflowX="auto"
          display="none"
          sm={{ display: 'block' }}
          css={`
            &::-webkit-scrollbar {
              display: none;
            }
            -ms-overflow-style: none;
            scrollbar-width: none;
          `}
        >
          <Flex
            marginBottom={16}
            justifyContent="center"
            textColor="common-white"
            fontSize="textMd"
            fontWeight="semiBold"
            flexDirection="column"
            marginX="auto"
            sm={{
              flexDirection: 'row',
              width: 'fit-content',
            }}
          >
            {filter.map(item => (
              <Text
                key={item}
                paddingX={32}
                paddingY={12}
                borderRadius="4px"
                cursor="pointer"
                boxShadow={activeFilter === item ? 'xs' : undefined}
                backgroundColor={activeFilter === item ? 'gray-800' : undefined}
                onClick={() => handleFilter(item)}
                whiteSpace="nowrap"
                tabIndex={0}
                onKeyDown={e =>
                  (e.key === 'Enter' || e.key === ' ' || e.key === 'Space') &&
                  (e.preventDefault(), e.stopPropagation(), handleFilter(item))
                }
              >
                {item}
              </Text>
            ))}
          </Flex>
        </Container>
        <PartnerFilter items={filter} activeItem={activeFilter} setActive={handleFilter} />
      </Container>
      {filteredList?.length === 0 ? (
        <Flex
          fontSize="displaySm"
          lineHeight="displaySm"
          textColor="gray-100"
          marginX="auto"
          textAlign="center"
          marginTop={96}
        >
          No results found.
        </Flex>
      ) : (
        <>
          {['All partners', 'Technology'].includes(activeFilter) &&
            !!filteredList?.filter(pt => pt.category === 'Technology').length && (
              <Container {...paddingProps}>
                <Flex width="100%" flexDirection="column">
                  <SectionTitle title="Technology Partners" />
                  <ResourecCardDeck cards={filteredList?.filter(pt => pt.category === 'Technology')} layout={3} />
                </Flex>
              </Container>
            )}

          {['All partners', 'Development'].includes(activeFilter) &&
            !!filteredList?.filter(pt => pt.category === 'Development').length && (
              <Container {...paddingProps}>
                <Flex width="100%" flexDirection="column">
                  <SectionTitle title="Development Partners" />
                  <ResourecCardDeck cards={filteredList?.filter(pt => pt.category === 'Development')} layout={3} />
                </Flex>
              </Container>
            )}
        </>
      )}
    </Flex>
  );
};

export default PartnerListing;
