import { FaCog } from 'react-icons/fa';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import Avatar from 'components/Quote/Avatar';

import { deKebabString } from 'utils/functions';

import type { ITemplateChangelogRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type ChangelogProps = BasicProps & ITemplateChangelogRecord;

const ChangelogHero: FC<ChangelogProps> = ({ title, slug, category, author, publishDate }) => {
  const breadcrumbs = [
    { link: 'https://deepgram.com/changelog', label: 'Changelog' },
    { link: `https://deepgram.com/changelog/${slug}`, label: title },
  ];
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const newPublishDate = new Date(publishDate).toLocaleDateString('en-US', options as any);

  return (
    <Container as="section" id="changelog-detail-hero" backgroundColor="common-black" textColor="common-white">
      <Container {...sectionSizing}>
        <Flex paddingTop={96} flexDirection="column" gap="48px">
          <Breadcrumb breadcrumbs={breadcrumbs} marginTop={64} />
          <Flex flexDirection="column" gap="16px" marginBottom={8}>
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
                    alignItems="center"
                    gap="8px"
                  >
                    <FaCog size={16} color={color.purple[300]} />
                    {deKebabString(item)}
                  </Flex>
                ))}
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
              >
                {title}
              </Heading>
            )}
            {(author || publishDate) && (
              <Flex gap="12px" flexDirection="column" sm={{ flexDirection: 'row' }}>
                {author && <Avatar {...author} isDark isSmall />}
                {publishDate && (
                  <Flex gap="8px" alignItems="center">
                    <Icon iconName="lightning-01" size={18} />
                    <Text>Published on {newPublishDate}</Text>
                  </Flex>
                )}
              </Flex>
            )}
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
};

export default ChangelogHero;
