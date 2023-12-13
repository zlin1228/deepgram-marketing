import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import Avatar from 'components/Quote/Avatar';

import type { ITemplateBlogRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface BlogCardProps extends BasicProps, ITemplateBlogRecord {
  backgroundIsDark?: boolean;
  variant?: string;
  isBlogList?: boolean;
  isSmall?: boolean;
  isPartner?: boolean;
}

const BlogCard: FC<BlogCardProps> = ({
  title,
  category,
  featuredImage,
  isBlogList,
  author,
  coAuthors,
  publishDate,
  isSmall,
  slug,
  boxShadow,
  __typename,
  isPartner,
  ...props
}) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const newPublishDate = new Date(publishDate).toLocaleDateString('en-US', options as any);

  return (
    <Link
      href={`https://deepgram.com/learn/${__typename === 'TemplateBlogRecord' ? '' : 'case-study/'}${slug}`}
      display="flex"
      height="100%"
      width="100%"
    >
      <Flex
        flexDirection="column"
        borderRadius="8px"
        backgroundColor="gray-900"
        textColor="common-white"
        border="1px solid"
        borderColor="gray-700"
        overflowX="hidden"
        overflowY="hidden"
        width="100%"
        height="100%"
        md={{
          flexDirection: isSmall ? 'row' : 'column',
        }}
        hover={{
          borderColor: 'common-transparent',
          backgroundShorthand: `linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box, ${
            boxShadow === 'cardPurple' ? gradient.primary.purple : gradient.primary.red
          } border-box`,
          boxShadow: boxShadow || 'card',
        }}
        {...props}
      >
        {featuredImage?.url && (
          <Container
            width="100%"
            height="200px"
            borderBottom={isSmall ? undefined : '1px solid'}
            borderRight={isSmall ? '1px solid' : undefined}
            borderColor="gray-700"
            md={{
              width: isSmall ? '209px' : '100%',
              height: isSmall ? '100%' : '200px',
              flex: isSmall ? '0 0 209px' : undefined,
            }}
          >
            <Image
              src={featuredImage.url}
              alt={featuredImage?.alt ?? title ?? 'Featured Image'}
              width={featuredImage.width}
              height={featuredImage.height}
              isFullHeight
              isFullWidth
              css={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              md={{
                maxHeight: isSmall ? '140px' : undefined,
              }}
            />
          </Container>
        )}
        <Flex
          flexDirection="column"
          paddingX={isSmall ? 16 : 24}
          paddingY={isSmall ? 20 : 32}
          gap="16px"
          minHeight={isSmall ? '140px' : 'fit-content'}
          lg={{ paddingX: isSmall ? 16 : 32 }}
        >
          <Flex
            paddingY={4}
            paddingX={10}
            borderRadius="30px"
            backgroundColor="gray-800"
            textColor="common-white"
            fontSize="textXs"
            lineHeight="textXs"
            fontWeight="bold"
            width="fit-content"
            textTransform="uppercase"
            gap="8px"
            alignItems="center"
          >
            <Icon
              iconName={
                isBlogList && category === 'Announcement'
                  ? 'announcement'
                  : `${__typename === 'TemplateBlogRecord' ? 'article' : 'casestudy'}`
              }
              size={14}
            />
            <Text>{__typename === 'TemplateBlogRecord' ? (isBlogList && category) || 'Article' : 'Case Study'}</Text>
          </Flex>
          <Text
            textStyle={isSmall ? 'lg' : 'xl'}
            fontWeight="semiBold"
            css={`
              display: -webkit-box;
              -webkit-line-clamp: ${isSmall ? 2 : 3};
              -webkit-box-orient: vertical;
              overflow: hidden;
              font-size: ${isPartner ? '24px' : undefined};
            `}
          >
            {title}
          </Text>
          {isBlogList && author && (
            <Avatar {...author} publishDate={newPublishDate} isSmall isDark isBlogList coAuthors={coAuthors} />
          )}
        </Flex>
      </Flex>
    </Link>
  );
};

export default BlogCard;
