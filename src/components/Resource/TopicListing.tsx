import { useState } from 'react';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import BlogCard from 'components/Cards/BlogCard/BlogCard';
import ResourceCard from 'components/Cards/ResourceCard/ResourceCard';
import ComponentButton from 'components/ComponentButton/ComponentButton';
import TopicFilter from 'components/Resource/TopicFilter';

import type { ITemplateBlogRecord, ITemplateResourcesExternalRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type TopicListingProps = BasicProps & {
  blogs: ITemplateBlogRecord[];
  resources: ITemplateResourcesExternalRecord[];
  category: string;
};

const TopicListing: FC<TopicListingProps> = ({ blogs, resources, category }) => {
  const [blogPage, setBlogPage] = useState(0);
  const [resourcePage, setResourcegPage] = useState(0);
  const pageNum = 8;

  const handleBlogPagination = () => {
    const maxPage = Math.ceil(blogs.length / pageNum);
    maxPage - 1 > blogPage && setBlogPage(blogPage + 1);
  };

  const handleResourcePagination = () => {
    const maxPage = Math.ceil(resources.length / pageNum);
    maxPage - 1 > resourcePage && setResourcegPage(resourcePage + 1);
  };

  return (
    <Container as="section" id="blog-detail-hero" textColor="common-white" backgroundColor="common-black" paddingY={96}>
      <Container {...sectionSizing}>
        <Flex flexDirection="column" gap="48px" sm={{ flexDirection: 'row' }}>
          <Flex flexDirection="column" gap="16px" width="100%" sm={{ flex: '0 0 300px' }}>
            <TopicFilter />
          </Flex>
          <Container flex="1 0 0">
            {resources && resources.length > 0 && (
              <Container>
                <Flex
                  gap="20px"
                  justifyContent="space-between"
                  paddingBottom={16}
                  marginBottom={32}
                  borderBottom="2px solid"
                  borderColor="gray-700"
                >
                  <Heading as="h3">White Papers & Reports</Heading>
                  <ComponentButton
                    label="View All"
                    endIcon="arrow-right"
                    buttonType="text"
                    color="secondary"
                    href="https://deepgram.com/learn/white-paper"
                  />
                </Flex>
                <Flex width="100%" gap="32px" flexWrap="wrap">
                  {resources.slice(0, (resourcePage + 1) * pageNum).map(item => (
                    <Flex key={item.id} flex="0 0 calc(50% - 16px)">
                      <ResourceCard {...item} />
                    </Flex>
                  ))}
                </Flex>
                {(resourcePage + 1) * pageNum < resources.length && (
                  <Flex justifyContent="center" marginTop={64}>
                    <ComponentButton
                      label="Load more"
                      buttonType="fill"
                      color="primary"
                      onClick={() => handleResourcePagination()}
                    />
                  </Flex>
                )}
              </Container>
            )}
            {blogs && blogs.length > 0 && (
              <Container>
                <Flex
                  gap="20px"
                  justifyContent="space-between"
                  paddingBottom={16}
                  marginBottom={32}
                  borderBottom="2px solid"
                  borderColor="gray-700"
                >
                  <Heading as="h3">{category}</Heading>
                  <ComponentButton
                    label="View All"
                    endIcon="arrow-right"
                    buttonType="text"
                    color="secondary"
                    href="https://deepgram.com/learn/article"
                  />
                </Flex>
                <Flex width="100%" gap="32px" flexWrap="wrap">
                  {blogs.slice(0, (blogPage + 1) * pageNum).map(item => (
                    <Flex key={item.id} flex="0 0 calc(50% - 16px)">
                      <BlogCard {...item} isBlogList />
                    </Flex>
                  ))}
                </Flex>
                {(blogPage + 1) * pageNum < blogs.length && (
                  <Flex justifyContent="space-between" marginTop={64}>
                    <Text textColor="common-white">
                      Showing {(blogPage + 1) * pageNum} of {blogs.length}
                    </Text>
                    <ComponentButton
                      label="Load more"
                      buttonType="fill"
                      color="primary"
                      onClick={() => handleBlogPagination()}
                    />
                  </Flex>
                )}
              </Container>
            )}
          </Container>
        </Flex>
      </Container>
    </Container>
  );
};

export default TopicListing;
