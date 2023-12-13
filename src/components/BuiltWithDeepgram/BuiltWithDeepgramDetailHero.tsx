import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import ComponentVideo from 'components/ComponentVideo/ComponentVideo';

import type { ITemplateBuiltWithDeepgramRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type BuiltWithDeepgramProps = BasicProps & ITemplateBuiltWithDeepgramRecord;

const BuiltWithDeepgramDetailHero: FC<BuiltWithDeepgramProps> = ({ title, featuredImage, excerpt, videoUrl }) => {
  const breadcrumbs = [
    { link: 'https://deepgram.com/built-with-deepgram', label: 'Built with Deepgram' },
    { link: '', label: title },
  ];

  return (
    <Container as="section" id="blog-detail-hero" backgroundColor="common-black" textColor="common-white">
      <Container {...sectionSizing}>
        <Flex paddingY={96} flexDirection="column" gap="48px">
          <Breadcrumb breadcrumbs={breadcrumbs} marginTop={64} />
          <Flex
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap="40px"
            marginBottom={8}
            lg={{
              flexDirection: 'row',
              textAlign: 'left',
            }}
          >
            <Flex
              flexDirection="column"
              gap="16px"
              width="100%"
              lg={{
                flexGrow: 1,
              }}
            >
              <Flex
                paddingY={4}
                paddingX={16}
                gap="8px"
                fontWeight="bold"
                borderRadius="30px"
                backgroundColor="gray-800"
                alignItems="center"
                width="fit-content"
                lg={{ alignItems: 'flex-start' }}
              >
                <Text textTransform="uppercase">BUILT WITH DEEPGRAM</Text>
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
                <Container fontSize="textLg" textColor="gray-200">
                  {excerpt}
                </Container>
              )}
            </Flex>
            {featuredImage?.url && (
              <Flex
                width="100%"
                filter="drop-shadow(10px 0px 60px rgba(157, 54, 246, 0.2)) drop-shadow(-10px 0px 60px rgba(84, 59, 254, 0.2))"
                lg={{
                  width: '50%',
                  flex: '0 0 50%',
                }}
              >
                {videoUrl ? (
                  <ComponentVideo videoUrl={videoUrl} thumbnail={featuredImage} />
                ) : (
                  <Image
                    borderRadius="8px"
                    src={featuredImage.url}
                    alt={featuredImage?.alt || ''}
                    title={featuredImage?.title || ''}
                    width={featuredImage?.width}
                    height={featuredImage?.height}
                    isFullWidth
                    isFullHeight
                    css={`
                      max-width: 100%;
                      max-height: 100%;
                    `}
                  />
                )}
              </Flex>
            )}
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
};

export default BuiltWithDeepgramDetailHero;
