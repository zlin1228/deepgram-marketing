import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import BlogCardDeck from 'components/CardDeck/BlogCardDeck';
import ResourecCardDeck from 'components/CardDeck/ResourecCardDeck';
import ComponentButton from 'components/ComponentButton/ComponentButton';

import type { IComponentSingleInstanceRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface ResourceListingProps extends BasicProps, IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
  resourceList?: any;
}

const paddingProps = {
  paddingY: 48,
  sm: {
    paddingY: 72,
  },
  lg: {
    paddingY: 96,
  },
} as const;

const ResourceListing: FC<ResourceListingProps> = ({ resourceList }) => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');
  const { blogs, tutorials, allTemplateCaseStudies, allTemplateResourcesExternals, allTemplateExternalWebinars } =
    resourceList;

  const filter = ['All', 'Articles', 'Case Studies', 'Tutorials', 'Webinars', 'White Papers'];

  const latestResources = [
    blogs[0],
    allTemplateCaseStudies[0],
    blogs[1],
    allTemplateCaseStudies[1],
    blogs[2],
    allTemplateCaseStudies[2],
  ];
  const SectionTitle: FC<{ title: string; type?: string }> = ({ title, type }) => (
    <Flex
      paddingBottom={16}
      borderBottom="2px solid"
      borderColor="gray-700"
      marginBottom={32}
      sm={{ justifyContent: 'space-between' }}
      lg={{ marginBottom: 40 }}
    >
      <Heading as="h3" textStyle="xs" textColor="common-white" sm={{ textStyle: 'sm' }} lg={{ textStyle: 'md' }}>
        {title}
      </Heading>
      {type && (
        <ComponentButton
          label="View All"
          endIcon="arrow-right"
          buttonType="text"
          color="secondary"
          href={`https://deepgram.com/learn/${type}`}
        />
      )}
    </Flex>
  );

  const handleFilter = (string: string) => {
    if (string !== activeFilter) {
      router.push(
        `/learn${string !== 'All' ? '?content_type=' + string?.toLowerCase().replace(/\s/g, '-') : ''}`,
        undefined,
        { shallow: true },
      );
    }
  };

  useEffect(() => {
    const contentType = router.query['content_type'];
    contentType
      ? contentType !== '' &&
        filter.map(item => {
          contentType === item?.toLowerCase().replace(/\s/g, '-') && setActiveFilter(item);

          return;
        })
      : setActiveFilter('All');
  }, [router]);

  return (
    <Flex flexDirection="column" width="100%">
      <Flex
        marginBottom={16}
        justifyContent="center"
        textColor="common-white"
        fontSize="textMd"
        fontWeight="semiBold"
        flexDirection="column"
        sm={{
          flexDirection: 'row',
        }}
      >
        {filter.map(item => (
          <Text
            key={item}
            paddingX={32}
            paddingY={12}
            borderRadius="4px"
            cursor="pointer"
            boxShadow={activeFilter === item ? 'xs' : undefined}
            backgroundColor={activeFilter === item ? 'gray-800' : undefined}
            onClick={() => handleFilter(item)}
          >
            {item}
          </Text>
        ))}
      </Flex>
      {'All' === activeFilter && (
        <Container {...paddingProps}>
          <Flex width="100%" {...sectionSizing} flexDirection="column">
            <SectionTitle title="Latest" />
            <BlogCardDeck card={latestResources} />
          </Flex>
        </Container>
      )}
      {['All', 'Articles'].includes(activeFilter) && (
        <Container {...paddingProps} backgroundColor="gray-900">
          <Flex width="100%" {...sectionSizing} flexDirection="column">
            <SectionTitle title="Articles" type="article" />
            <BlogCardDeck card={blogs} boxShadow="cardPurple" />
          </Flex>
        </Container>
      )}
      {['All', 'White Papers'].includes(activeFilter) && (
        <Container {...paddingProps}>
          <Flex width="100%" {...sectionSizing} flexDirection="column">
            <SectionTitle title="White Papers & Reports" type="white-paper" />
            <ResourecCardDeck cards={allTemplateResourcesExternals} layout={4} />
          </Flex>
        </Container>
      )}
      {['All', 'Case Studies'].includes(activeFilter) && (
        <Container {...paddingProps} backgroundColor="gray-900">
          <Flex width="100%" {...sectionSizing} flexDirection="column">
            <SectionTitle title="Case Studies" type="case-study" />
            <BlogCardDeck card={allTemplateCaseStudies} />
          </Flex>
        </Container>
      )}
      {['All', 'Tutorials'].includes(activeFilter) && (
        <Container {...paddingProps}>
          <Flex width="100%" {...sectionSizing} flexDirection="column">
            <SectionTitle title="Tutorials" type="tutorial" />
            <BlogCardDeck card={tutorials} boxShadow="cardPurple" />
          </Flex>
        </Container>
      )}
      {['All', 'Webinars'].includes(activeFilter) && (
        <Container {...paddingProps} backgroundColor="gray-900">
          <Flex width="100%" {...sectionSizing} flexDirection="column">
            <SectionTitle title="Webinars" type="webinar" />
            <ResourecCardDeck cards={allTemplateExternalWebinars} />
          </Flex>
        </Container>
      )}
    </Flex>
  );
};

export default ResourceListing;
