import ReactMarkdown from 'react-markdown';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import ComponentButton from 'components/ComponentButton/ComponentButton';

import type { ITemplateCaseStudyRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type CaseStudyHeroProps = BasicProps & ITemplateCaseStudyRecord;

const CaseStudyHero: FC<CaseStudyHeroProps> = ({ title, excerpt, download, featuredImage }) => {
  const breadcrumbs = [
    { link: 'https://deepgram.com/learn/case-study', label: 'Case Study' },
    { link: '', label: title },
  ];

  return (
    <Container as="section" id="case-study-detail-hero" backgroundColor="common-black" textColor="common-white">
      <Container {...sectionSizing}>
        <Flex paddingTop={96} paddingBottom={64} flexDirection="column" gap="64px" lg={{ gap: '72px' }}>
          <Breadcrumb breadcrumbs={breadcrumbs} />
          <Flex flexDirection="column" gap="40px" lg={{ flexDirection: 'row', gap: '32px', alignItems: 'center' }}>
            <Flex flexDirection="column" gap="16px" flex="1 0 0">
              <Flex
                paddingY={4}
                paddingX={10}
                gap="8px"
                fontWeight="bold"
                borderRadius="30px"
                backgroundColor="gray-800"
                alignItems="center"
                fontSize="textXs"
                lineHeight="textXs"
                width="fit-content"
              >
                <Icon iconName="casestudy" size={14} color={color.magenta[400]} />
                <Text textTransform="uppercase" fontWeight="bold">
                  CASE STUDY
                </Text>
              </Flex>
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
              {excerpt && (
                <Container fontSize="textLg" color="gray-100">
                  <ReactMarkdown>{excerpt}</ReactMarkdown>
                </Container>
              )}
              <Flex flexDirection="column" gap="16px" sm={{ flexDirection: 'row' }} marginTop={16}>
                {download && (
                  <ComponentButton label="Download Case Study" buttonType="fill" color="primary" link={download} />
                )}
                <ComponentButton
                  label="Sign Up Free"
                  buttonType="fill"
                  color="magenta"
                  link="https://console.deepgram.com/signup"
                />
              </Flex>
            </Flex>
            {featuredImage?.url && (
              <Flex flex="1 0 0">
                <Flex maxHeight="500px">
                  <Image
                    borderRadius="8px"
                    src={featuredImage.url}
                    alt={featuredImage?.alt || ''}
                    title={featuredImage?.title || ''}
                    width={featuredImage?.width}
                    height={featuredImage?.height}
                  />
                </Flex>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
};

export default CaseStudyHero;
