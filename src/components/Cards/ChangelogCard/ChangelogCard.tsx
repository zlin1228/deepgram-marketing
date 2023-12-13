import { render } from 'datocms-structured-text-to-plain-text';

import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import { deKebabString } from 'utils/functions';

import type { ITemplateChangelogRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type ChangelogCardProps = BasicProps & ITemplateChangelogRecord;

const bodyWrapCSS = `
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ChangelogCard: FC<ChangelogCardProps> = ({ title, category, body, slug, author, publishDate, ...props }) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const newPublishDate = new Date(publishDate).toLocaleDateString('en-US', options as any);

  return (
    <Link href={`https://deepgram.com/changelog/${slug}`}>
      <Flex
        flexDirection="column"
        borderRadius="16px"
        paddingY={32}
        paddingX={24}
        backgroundColor="gray-900"
        textColor="common-white"
        border="1px solid"
        borderColor="common-transparent"
        boxShadow="xxxl"
        sm={{ paddingAll: 40 }}
        hover={{
          backgroundShorthand: `linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box, ${gradient.primary.border} border-box`,
          boxShadow: 'greenButton',
        }}
        {...props}
      >
        {category && (
          <Flex width="100%" gap="8px" flexWrap="wrap" marginBottom={8}>
            {category?.map((item: string) => (
              <Flex
                key={item}
                paddingY={4}
                paddingX={10}
                borderRadius="30px"
                backgroundColor="gray-800"
                textColor="common-white"
                fontSize="textSm"
                lineHeight="textSm"
                fontWeight="bold"
                width="fit-content"
              >
                {deKebabString(item)}
              </Flex>
            ))}
          </Flex>
        )}
        <Heading as="h3" textStyle="xs" fontWeight="bold" marginBottom={8} sm={{ textStyle: 'sm' }}>
          {title}
        </Heading>
        {(author || publishDate) && (
          <Flex width="fit-content" gap="8px" alignItems="center" marginBottom={16}>
            {author?.name && (
              <Text textTransform="uppercase" textStyle="md" fontWeight="semiBold" textColor="common-white">
                {author?.name}
              </Text>
            )}
            <Flex width="4px" height="4px" borderRadius="50%" backgroundColor="common-white" />
            {newPublishDate && (
              <Text textTransform="uppercase" textStyle="md" fontWeight="semiBold" textColor="common-white">
                {newPublishDate}
              </Text>
            )}
          </Flex>
        )}
        {body && (
          <Text textStyle="md" textColor="gray-400" css={bodyWrapCSS}>
            {render(body as any)}
          </Text>
        )}
      </Flex>
    </Link>
  );
};

export default ChangelogCard;
