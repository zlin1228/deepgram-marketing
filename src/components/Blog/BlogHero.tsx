import Icon from 'atoms/Icons/Icon';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import Avatar from 'components/Quote/Avatar';

import { FormatDate } from 'utils/functions';

import type { ITemplateBlogRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface BlogProps extends BasicProps, ITemplateBlogRecord {
  hideBreadcrumb?: boolean;
}

const BlogHero: FC<BlogProps> = ({
  title,
  slug,
  category,
  author,
  coAuthors,
  publishDate,
  _updatedAt,
  featuredImage,
  hideBreadcrumb = false,
}) => {
  const breadcrumbs = [
    { link: 'https://deepgram.com/learn', label: 'Resources' },
    { link: 'https://deepgram.com/learn/article', label: 'Article' },
    { link: `https://deepgram.com/learn/${slug}`, label: title },
  ];
  const catSlug = category
    ?.toLowerCase()
    .replace(/x[\d]+;/g, '')
    .replace(/[^a-z0-9\s]+/g, '')
    .replace(/\s/g, '-');

  const datedUpdated = new Date(_updatedAt);
  const datedPublished = new Date(publishDate + 'T12:00:00-07:00');

  const isShowUpdated = datedUpdated > datedPublished;

  return (
    <Container as="section" id="blog-detail-hero" backgroundColor="common-black" textColor="common-white">
      <Container {...sectionSizing}>
        <Flex paddingY={96} flexDirection="column" gap="48px">
          {!hideBreadcrumb && <Breadcrumb breadcrumbs={breadcrumbs} marginTop={64} noHome />}
          <Flex
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap="16px"
            maxWidth="870px"
            marginX="auto"
            marginBottom={8}
            marginTop={hideBreadcrumb ? 64 : 0}
          >
            {category && (
              <Flex
                paddingY={4}
                paddingX={10}
                gap="8px"
                fontWeight="bold"
                borderRadius="30px"
                backgroundColor="gray-800"
                alignItems="center"
              >
                <Icon iconName={category === 'Announcement' ? 'announcement' : 'article'} size={14} />
                <Link href={`https://deepgram.com/learn/${catSlug}`}>
                  <Text textTransform="uppercase" textColor="common-white" data-sb-field-path="category">
                    {category}
                  </Text>
                </Link>
              </Flex>
            )}
            {title && (
              <Heading
                as="h1"
                textStyle="sm"
                sm={{ textStyle: 'md' }}
                lg={{ textStyle: 'lg' }}
                textColor="common-white"
                fontWeight="semiBold"
                data-sb-field-path="title"
              >
                {title}
              </Heading>
            )}
            {(author || publishDate) && (
              <Flex gap="12px" flexWrap="wrap">
                {author && <Avatar {...author} isDark isSmall coAuthors={coAuthors} />}
                {publishDate && (
                  <Flex gap="8px" alignItems="center" flexWrap="wrap">
                    <Icon iconName="lightning-01" size={18} />
                    <Text data-sb-field-path="publish_date">Published on {FormatDate(publishDate, true)}</Text>
                    {isShowUpdated && <Text paddingLeft={16}>Updated on {FormatDate(_updatedAt)}</Text>}
                  </Flex>
                )}
              </Flex>
            )}
          </Flex>
          {featuredImage?.url && (
            <Flex
              maxWidth="1008px"
              marginX="auto"
              // filter="drop-shadow(10px 0px 60px rgba(157, 54, 246, 0.2)) drop-shadow(-10px 0px 60px rgba(84, 59, 254, 0.2))"
            >
              <Image
                id={featuredImage.id || ''}
                src={featuredImage.url}
                alt={featuredImage?.alt || ''}
                title={featuredImage?.title || ''}
                width={featuredImage?.width}
                height={featuredImage?.height}
                borderRadius="8px"
                overflowX="hidden"
                overflowY="hidden"
                sizes="(min-width: 1200px) 1000px, 100vw"
              />
            </Flex>
          )}
        </Flex>
      </Container>
    </Container>
  );
};

export default BlogHero;
