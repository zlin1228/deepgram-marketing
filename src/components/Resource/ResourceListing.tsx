import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';

import Icon from 'atoms/Icons/Icon';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import { sectionSizing } from 'molecules/Section/Section';
import TextField from 'molecules/TextField/TextField';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import ResourceFilter from 'components/Resource/ResourceFilter';
import TopicFilter from 'components/Resource/TopicFilter';

import type {
  ITemplateBlogRecord,
  ITemplateCaseStudyRecord,
  ITemplateExternalWebinarRecord,
  ITemplateResourcesExternalRecord,
} from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { ChangeEvent, FC } from 'react';

type ResourceListingProps = BasicProps & {
  list: (
    | ITemplateBlogRecord
    | ITemplateCaseStudyRecord
    | ITemplateExternalWebinarRecord
    | ITemplateResourcesExternalRecord
  )[];
  noFilter?: boolean;
  layout?: number;
  active?: string;
};

const BlogCard = dynamic(() => import('components/Cards/BlogCard/BlogCard'));
const ResourceCard = dynamic(() => import('components/Cards/ResourceCard/ResourceCard'));
const WebinarCard = dynamic(() => import('components/Cards/ResourceCard/WebinarCard'));

const ResourceListing: FC<ResourceListingProps> = ({ list, noFilter, layout, active }) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const category: string[] = [];
  list.map(item => {
    const resourcetype: string =
      (item as ITemplateBlogRecord)?.category || ((item as ITemplateResourcesExternalRecord)?.resourceType as string);
    if (!category.includes(resourcetype)) {
      category.push(resourcetype);
    }

    return;
  });

  const handleChangeFilter = (e: ChangeEvent) => {
    setSearch((e.target as HTMLInputElement).value);
    setPage(0);
  };

  const filter = useMemo(() => {
    if (search === '') {
      return list;
    } else {
      return list.filter(item => item.title?.toLowerCase()?.includes(search?.toLowerCase()));
    }
  }, [search]);

  const handlePagination = () => {
    const maxPage = Math.ceil(filter.length / 10);
    maxPage - 1 > page && setPage(page + 1);
  };

  const getColWidth = (cols: number) =>
    `calc(${Math.floor(1000 / cols) / 10}% - ${Math.ceil((32 * (cols - 1)) / cols)}px)`;

  return (
    <Container as="section" id="blog-detail-hero" textColor="common-white" backgroundColor="common-black" paddingY={96}>
      <Container {...sectionSizing}>
        <Flex flexDirection="column" gap="48px" sm={{ flexDirection: 'row' }}>
          <Flex flexDirection="column" gap="16px" width="100%" sm={{ flex: '0 0 300px' }}>
            <TextField
              type="text"
              placeholder="Search"
              startIcon={<Icon iconName="search" size={18} color="#fff" />}
              onChange={handleChangeFilter}
            />
            {!noFilter && <ResourceFilter items={category} marginBottom={20} />}
            <TopicFilter active={active} />
          </Flex>
          <Container flex="1 0 0">
            <Flex width="100%" gap="32px" flexWrap="wrap">
              {filter.slice(0, (page + 1) * 10).map(item => {
                const columns = layout || 2;
                const widthMobile = getColWidth(columns - 1 || 1);
                const width = getColWidth(columns);

                switch (item.__typename) {
                  case 'TemplateBlogRecord':
                  case 'TemplateCaseStudyRecord':
                    return (
                      <Flex flex={`0 0 ${widthMobile}`} md={{ flex: `0 0 ${width}` }}>
                        <BlogCard {...(item as ITemplateBlogRecord)} />
                      </Flex>
                    );
                  case 'TemplateExternalWebinarRecord':
                    return (
                      <Flex flex={`0 0 ${widthMobile}`} md={{ flex: `0 0 ${width}` }}>
                        <WebinarCard {...item} />
                      </Flex>
                    );
                  case 'TemplateResourcesExternalRecord':
                    return (
                      <Flex flex={`0 0 ${widthMobile}`} md={{ flex: `0 0 ${width}` }}>
                        <ResourceCard {...item} />
                      </Flex>
                    );

                  default:
                    return <></>;
                }
              })}
            </Flex>
            {(page + 1) * 10 < filter.length && (
              <Flex justifyContent="center" marginTop={64}>
                <ComponentButton
                  label="Load more"
                  buttonType="fill"
                  color="primary"
                  onClick={() => handlePagination()}
                />
              </Flex>
            )}
          </Container>
        </Flex>
      </Container>
    </Container>
  );
};

export default ResourceListing;
