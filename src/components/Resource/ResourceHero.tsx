import HeroBgNew from 'assets/images/resource_hero_bg.svg';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import { sectionSizing } from 'molecules/Section/Section';

import Breadcrumb from 'components/Breadcrumb/Breadcrumb';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { HeadingTypes } from 'quarks/styleProps/heading';
import type { FC } from 'react';

type ResourceHeroProps = BasicProps & {
  title: string;
  headingType?: string;
};

const ResourceHero: FC<ResourceHeroProps> = ({ title, headingType }) => {
  const breadcrumbs = [
    { link: 'https://deepgram.com/learn', label: 'Resource Hub' },
    { link: '', label: title },
  ];

  return (
    <Container
      as="section"
      id="blog-detail-hero"
      textColor="common-white"
      backgroundShorthand={`url(${HeroBgNew}) #000000`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Container {...sectionSizing}>
        <Flex paddingY={48} flexDirection="column" gap="48px">
          <Breadcrumb breadcrumbs={breadcrumbs} marginTop={64} />
          <Flex flexDirection="column" textAlign="left" gap="16px" marginBottom={8}>
            {title && (
              <Heading
                as={(headingType?.toLowerCase() as HeadingTypes) || 'h1'}
                textStyle="sm"
                sm={{ textStyle: 'md' }}
                lg={{ textStyle: 'lg' }}
                textColor="common-white"
                fontWeight="semiBold"
                textTransform="capitalize"
              >
                {title}
              </Heading>
            )}
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
};

export default ResourceHero;
