import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import TableOfContents from 'components/TableOfContents/TableOfContents';

import { getToC } from 'utils/functions';
import richTextParser from 'utils/richTextParser';
import shareSocialLink from 'utils/shareSocialLink';

import type { ITemplatePodcastRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type PodcastDetailProps = BasicProps & ITemplatePodcastRecord;

const PodcastDetail: FC<PodcastDetailProps> = ({ title, body }) => {
  const toC = getToC(body?.value);

  return (
    <Container as="section" backgroundColor="common-black" textColor="common-white">
      <Container {...sectionSizing}>
        <Flex paddingY={64} flexDirection="column" gap="48px" lg={{ flexDirection: 'row', gap: '126px', paddingY: 72 }}>
          <Container flex="0 0 280px">
            <Flex flexDirection="column" gap="48px" position="sticky" top="100px">
              <TableOfContents tableOfContents={toC} heading="Jump to" />
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
            flexDirection="column"
            gap="24px"
            flexGrow={1}
            css={`
              & a {
                color: ${color.primary[400]};
              }
            `}
          >
            <Heading as="h3" textColor="common-white" textStyle="md">
              About this episode
            </Heading>
            {richTextParser(body as any)}
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
};

export default PodcastDetail;
