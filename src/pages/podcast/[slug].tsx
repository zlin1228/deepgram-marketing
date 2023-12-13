import Layout from 'layouts/Layout';
import { initializeApollo } from 'lib/client';
import {
  AllPodcastSlugsQuery,
  AllRedirectsQuery,
  GlobalCompanyHeaderFooterQuery,
  PodcastDetailDataQuery,
} from 'lib/sdk';

import Section from 'molecules/Section/Section';

import PodcastCardDeck from 'components/CardDeck/PodcastCardDeck';
import ConversionPanel from 'components/ConversionPanel/ConversionPanel';
import PodcastDetail from 'components/Podcast/PodcastDetail';
import PodcastGuestList from 'components/Podcast/PodcastGuestList';
import PodcastHero from 'components/Podcast/PodcastHero';

import { defaultSectionProps } from 'utils/defaultProps';

import type {
  IComponentConversionPanelRecord,
  IComponentFooterRecord,
  IComponentHeaderRecord,
  IEntityCompanyRecord,
  ISeoField,
  ITemplatePodcastRecord,
} from 'lib/types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface WebsitePageProps {
  pageProps: any;
  slug?: string;
  staticFooter: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  conversionPanel: IComponentConversionPanelRecord;
  related?: ITemplatePodcastRecord[];
  company: IEntityCompanyRecord;
}

interface StaticPageProps {
  pageProps: any;
  slug?: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { allTemplatePodcasts },
  } = await apolloClient.query({ query: AllPodcastSlugsQuery });

  const allDetailPage: ITemplatePodcastRecord[] = allTemplatePodcasts || [];

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
    variables: { slug: `https://deepgram.com/podcast/${requestedSlug}` },
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
    data: { templatePodcast, componentConversionPanel, related },
  } = await apolloClient.query({
    query: PodcastDetailDataQuery,
    variables: {
      slug: requestedSlug,
    },
  });

  const {
    data: { componentFooter, componentHeader, entityCompany },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });

  return {
    props: {
      pageProps: templatePodcast,
      conversionPanel: componentConversionPanel,
      related,
      slug: requestedSlug,
      staticFooter: componentFooter,
      header: componentHeader as IComponentHeaderRecord,
      company: entityCompany,
    },
    notFound: !templatePodcast,
    revalidate: 60,
  };
};

const TemplatePodcastPage: NextPage<WebsitePageProps> = ({
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
      slug={`podcast/${slug || ''}`}
      seoMetadata={seoData}
      footer={staticFooter}
      header={header}
      breadcrumbs={['Podcast', ...breadcrumbs]}
    >
      <PodcastHero {...pageProps} />
      <PodcastDetail {...pageProps} />
      <PodcastGuestList guest={pageProps.guest} />
      <Section id="podcast-card-deck-section" backgroundColor="Black" {...(defaultSectionProps as any)}>
        <PodcastCardDeck cards={related} hasHeading />
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

export default TemplatePodcastPage;
