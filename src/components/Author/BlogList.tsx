import dynamic from 'next/dynamic';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import ComponentButton from 'components/ComponentButton/ComponentButton';

import type { ITemplateBlogRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type BlogProps = BasicProps & {
  author: string;
  blogs: ITemplateBlogRecord[];
};

const BlogCard = dynamic(() => import('components/Cards/BlogCard/BlogCard'));

const BlogList: FC<BlogProps> = ({ author, blogs }) => (
  <Container as="section" backgroundColor="common-black" textColor="common-white">
    <Container {...sectionSizing}>
      <Flex
        width="100%"
        flexDirection="column"
        gap="24px"
        textColor="common-white"
        paddingY={48}
        sm={{ paddingY: 72 }}
        lg={{ paddingY: 96 }}
      >
        <Flex paddingBottom={16} borderBottom="2px solid" borderColor="gray-700" justifyContent="space-between">
          <Text
            fontSize="displayXs"
            lineHeight="displayXs"
            fontWeight="bold"
            sm={{
              fontSize: 'displaySm',
              lineHeight: 'displaySm',
            }}
          >
            {author}
            {'’s Articles'}
          </Text>
          <ComponentButton
            label="View All"
            endIcon="arrow-right"
            buttonType="text"
            color="secondary"
            href="https://deepgram.com/learn/article"
          />
        </Flex>
        <Grid
          gap="24px 32px"
          sm={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
          lg={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {blogs.map(blog => (
            <BlogCard key={blog.id} {...blog} isBlogList />
          ))}
        </Grid>
      </Flex>
    </Container>
  </Container>
);

export default BlogList;
