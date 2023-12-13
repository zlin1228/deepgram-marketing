import Icon from 'atoms/Icons/Icon';
import { breakpoints } from 'atoms/breakpoints/breakpoints';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import TableOfContents from 'components/TableOfContents/TableOfContents';

import { getToC } from 'utils/functions';
import richTextParser from 'utils/richTextParser';
import shareSocialLink from 'utils/shareSocialLink';

import type { ITemplateBlogRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type BlogProps = BasicProps & ITemplateBlogRecord;

const Blog: FC<BlogProps> = ({ title, body }) => {
  const toC = getToC(body?.value);

  return (
    <Container as="section" backgroundColor="common-black" textColor="common-white">
      <Container {...sectionSizing}>
        <Flex paddingY={64} flexDirection="column" gap="48px" lg={{ flexDirection: 'row', gap: '126px', paddingY: 72 }}>
          <Container>
            <Flex flexDirection="column" gap="48px" position="sticky" top="100px">
              {toC && toC.length > 0 && <TableOfContents tableOfContents={toC} />}
              <Flex flexDirection="column" gap="16px">
                <Text textStyle="lg" fontWeight="medium" textColor="common-white">
                  Share this guide
                </Text>
                <Flex gap="24px">
                  <Flex cursor="pointer" onClick={() => shareSocialLink('facebook', title || '')}>
                    <Icon iconName="facebook" size={24} />
                  </Flex>
                  <Flex cursor="pointer" onClick={() => shareSocialLink('twitter', title || '')}>
                    <Icon iconName="twitter" size={24} />
                  </Flex>
                  <Flex cursor="pointer" onClick={() => shareSocialLink('linkedin', title || '')}>
                    <Icon iconName="linkedin" size={24} />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Container>
          <Flex
            data-sb-field-path="body"
            flexDirection="column"
            gap="24px"
            flexGrow={1}
            lg={{
              maxWidth: 'calc(100% - 406px)',
            }}
            css={`
              & a {
                color: ${color.primary[400]};
              }
              h1,
              h2,
              h3,
              h4 {
                @media screen and (max-width: ${breakpoints.sm}px) {
                  word-break: break-word;
                  word-wrap: break-word;
                }
              }
            `}
          >
            {richTextParser(body as any, false, true)}
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
};

export default Blog;
