import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import ScheduleDemoForm from 'components/Form/ScheduleDemoForm';

import richTextParser from 'utils/richTextParser';
import shareSocialLink from 'utils/shareSocialLink';

import type { ITemplateCaseStudyRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type CaseStudyDetailProps = BasicProps & ITemplateCaseStudyRecord;

const CaseStudyDetail: FC<CaseStudyDetailProps> = ({ title, body, company }) => (
  <Container as="section" backgroundColor="common-black" textColor="common-white">
    <Container {...sectionSizing}>
      <Flex paddingY={64} flexDirection="column" gap="48px" lg={{ flexDirection: 'row', gap: '104px', paddingY: 72 }}>
        <Container flex="0 0 312px" textColor="common-white">
          <Flex
            flexDirection="column"
            paddingY={32}
            paddingX={24}
            marginBottom={32}
            gap="16px"
            borderRadius="8px"
            border="1px solid"
            borderColor="gray-700"
          >
            {company?.bio && (
              <Flex flexDirection="column" gap="10px">
                <Text textStyle="lg" fontWeight="semiBold" textTransform="uppercase">
                  Company
                </Text>
                <Text textStyle="md" textColor="gray-200">
                  {company.bio}
                </Text>
              </Flex>
            )}
            {company?.industry && (
              <Flex flexDirection="column" gap="10px">
                <Text textStyle="lg" fontWeight="semiBold" textTransform="uppercase">
                  Industry
                </Text>
                {company.industry.map(item => (
                  <Text key={item.id} fontSize="textMd" lineHeight="textMd" textColor="gray-200">
                    {item.heading}
                  </Text>
                ))}
              </Flex>
            )}
            {company?.businessNeeds && (
              <Flex flexDirection="column" gap="10px">
                <Text textStyle="lg" fontWeight="semiBold" textTransform="uppercase">
                  Business Needs
                </Text>
                <Text fontSize="textMd" lineHeight="textMd" textColor="gray-200">
                  {company.businessNeeds}
                </Text>
              </Flex>
            )}
            {company?.solution && (
              <Flex flexDirection="column" gap="10px">
                <Text textStyle="lg" fontWeight="semiBold" textTransform="uppercase">
                  Solution
                </Text>
                <Text fontSize="textMd" lineHeight="textMd" textColor="gray-200">
                  {company.solution.map((item, index) => (
                    <Text key={item.id}>
                      <Link href={item.url || ''} textColor="gray-200">
                        {item.heading}
                      </Link>
                      {company.solution.length - 2 > index
                        ? ', '
                        : (company.solution.length - 1 === index && ' ') || ' and '}
                    </Text>
                  ))}
                </Text>
              </Flex>
            )}
          </Flex>
          <Flex flexDirection="column" gap="40px" position="sticky" top="100px">
            <ScheduleDemoForm />
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
          {richTextParser(body as any)}
        </Flex>
      </Flex>
    </Container>
  </Container>
);

export default CaseStudyDetail;
