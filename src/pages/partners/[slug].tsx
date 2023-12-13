import Layout from 'layouts/Layout';
import { initializeApollo } from 'lib/client';
import {
  AllPartnerSlugsQuery,
  AllRedirectsQuery,
  GlobalCompanyHeaderFooterQuery,
  PartnerDetailDataQuery,
} from 'lib/sdk';

import Icon from 'atoms/Icons/Icon';
import { media } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';

import Section from 'molecules/Section/Section';

import ResourecCardDeck from 'components/CardDeck/ResourecCardDeck';
import PartnerHero from 'components/CaseStudy/PartnerHero';
import ComponentButton from 'components/ComponentButton/ComponentButton';
import ConversionPanel from 'components/ConversionPanel/ConversionPanel';
import ComponentHeading from 'components/Heading/Heading';

import { defaultSectionProps } from 'utils/defaultProps';

import type {
  IComponentConversionPanelRecord,
  IComponentFooterRecord,
  IComponentHeaderRecord,
  IEntityCompanyRecord,
  ISeoField,
  ITemplatePartnerRecord,
} from 'lib/types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface WebsitePageProps {
  pageProps: any;
  slug?: string;
  staticFooter: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  conversionPanel: IComponentConversionPanelRecord;
  related?: ITemplatePartnerRecord[];
  company: IEntityCompanyRecord;
}

interface StaticPageProps {
  pageProps: any;
  slug?: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { allTemplatePartners },
  } = await apolloClient.query({ query: AllPartnerSlugsQuery });

  const allDetailPage: ITemplatePartnerRecord[] = allTemplatePartners || [];

  const slugs: { id: any; slug: string }[] = [];

  // eslint-disable-next-line array-callback-return
  allDetailPage.flatMap(page => {
    const slug = page?.slug;
    const id = page?.id;
    slug && slugs.push({ id, slug });
  });

  const paths = slugs.flatMap(page => ({
    params: {
      slug: page.slug,
      id: page?.id || '',
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<StaticPageProps> = async ({ params }) => {
  const apolloClient = initializeApollo();

  const requestedSlug = (params?.slug as string) || '';

  const {
    data: { redirects },
  } = await apolloClient.query({
    query: AllRedirectsQuery,
    variables: { slug: `https://deepgram.com/partners/${requestedSlug}` },
  });

  if (redirects) {
    return {
      redirect: {
        destination: redirects?.newSlug || '',
        permanent: true,
      },
    };
  }
  const {
    data: { templatePartner, componentConversionPanel, related },
  } = await apolloClient.query({
    query: PartnerDetailDataQuery,
    variables: {
      slug: requestedSlug,
    },
  });

  const {
    data: { componentFooter, componentHeader, entityCompany },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });

  return {
    props: {
      pageProps: templatePartner,
      conversionPanel: componentConversionPanel,
      related,
      slug: requestedSlug,
      staticFooter: componentFooter,
      header: componentHeader as IComponentHeaderRecord,
      company: entityCompany,
    },
    notFound: !templatePartner,
    revalidate: 60,
  };
};

const TemplatePartnerPage: NextPage<WebsitePageProps> = ({
  pageProps,
  slug,
  staticFooter,
  header,
  conversionPanel,
  related,
  company,
}) => {
  const seoData = {
    title: pageProps.title,
    description: pageProps?.metaTags?.description,
    image: pageProps?.metaTags?.image,
  } as ISeoField;
  const breadcrumbs = pageProps?.slug?.split('/').map((item: string) => item.replace(/-/g, ' '));

  return (
    <Layout
      slug={`partners/${slug || ''}`}
      seoMetadata={seoData}
      footer={staticFooter}
      header={header}
      breadcrumbs={['Partner', ...breadcrumbs]}
    >
      <Section id="podcast-hero-section" backgroundColor="Red Blue Star" {...(defaultSectionProps as any)}>
        <PartnerHero {...pageProps} />
      </Section>
      {pageProps?.features?.length > 0 && (
        <Section id="partners-card-deck-section" backgroundColor="Black" {...(defaultSectionProps as any)}>
          {pageProps?.featureListHeading && (
            <ComponentHeading {...pageProps?.featureListHeading} gradientBackgroundColor="none" isPartner />
          )}
          {pageProps?.features && (
            <Container>
              <Flex width="100%" flexWrap="wrap" gap="16px" marginTop={56} md={{ gap: '32px' }}>
                {pageProps?.features?.map((item: any) => (
                  <Flex
                    key={item?.id}
                    width="100%"
                    borderRadius="8px"
                    backgroundColor="gray-900"
                    paddingAll={16}
                    alignItems="center"
                    gap="22px"
                    md={{ width: 'calc(50% - 16px)', paddingAll: 24 }}
                  >
                    <Icon iconName="circle-check-green" size={42} />
                    <Text
                      textStyle="md"
                      fontWeight="semiBold"
                      textColor="gray-200"
                      lg={{ textStyle: 'lg', fontWeight: 'semiBold' }}
                    >
                      {item?.heading}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Container>
          )}
        </Section>
      )}
      <Section id="partners-card-deck-section" backgroundColor="Black" {...(defaultSectionProps as any)}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          paddingBottom={16}
          borderBottom="2px solid"
          borderColor="gray-700"
          textColor="common-white"
        >
          <Heading
            as="h2"
            textStyle="xs"
            sm={{ textStyle: 'sm' }}
            lg={{ textStyle: 'md' }}
            textColor="common-white"
            fontWeight="bold"
          >
            Other Partners
          </Heading>
          <Flex gap="16px">
            <ComponentButton
              link="/partners"
              label="View all"
              endIcon="arrow-right"
              buttonType="text"
              color="secondary"
              css={{
                '.button-label': {
                  display: 'none',
                  [media.sm]: {
                    display: 'inline',
                  },
                },
              }}
            />
          </Flex>
        </Flex>
        <ResourecCardDeck cards={related} />
      </Section>
      <Section
        id="podcast-conversion-panel-section"
        backgroundColor="Rainbow Gradient"
        {...(defaultSectionProps as any)}
      >
        <ConversionPanel {...conversionPanel} company={company} />
      </Section>
    </Layout>
  );
};

export default TemplatePartnerPage;
