import Layout from 'layouts/Layout';
import { initializeApollo } from 'lib/client';
import { AllEventDetailsQuery, AllEventsQuery, AllRedirectsQuery, GlobalCompanyHeaderFooterQuery } from 'lib/sdk';

import Logo from 'assets/svg/Logo_White.svg';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import EventsDetailBody from 'components/Events/EventsBody';
import EventsDetailHero from 'components/Events/EventsHero';

import type {
  IComponentFooterRecord,
  IComponentHeaderRecord,
  IEntityCompanyRecord,
  ITemplateEventsDetailRecord,
} from 'lib/types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface EventDetailsProps {
  pageProps: ITemplateEventsDetailRecord;
  slug?: string;
  staticFooter: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  company: IEntityCompanyRecord;
}

interface StaticPageProps {
  pageProps: any;
  slug?: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { allTemplateEventsDetails },
  } = await apolloClient.query({ query: AllEventsQuery });

  const allDetailPage: ITemplateEventsDetailRecord[] = allTemplateEventsDetails || [];

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
    variables: {
      slug: `https://deepgram.com/events/${requestedSlug}`,
    },
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
    data: { templateEventsDetail },
  } = await apolloClient.query({ query: AllEventDetailsQuery, variables: { slug: requestedSlug } });

  const {
    data: { simpleComponentHeader, simpleComponentFooter, entityCompany },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });

  return {
    props: {
      pageProps: templateEventsDetail,
      slug: requestedSlug,
      staticFooter: simpleComponentFooter,
      header: simpleComponentHeader as IComponentHeaderRecord,
      company: entityCompany,
    },
    notFound: !templateEventsDetail,
    revalidate: 180,
  };
};

const TemplateEventDetails: NextPage<EventDetailsProps> = ({ pageProps, slug, staticFooter, header }) => {
  const { eventType, eventDateTime, eventFormId, title, excerpt, description } = pageProps;
  const breadcrumbs = slug ? slug?.split('/').map((item: string) => item.replace(/-/g, ' ')) : [];

  const heroProps = {
    eventType,
    eventDateTime,
    eventFormId,
    title,
    excerpt,
    description,
  };

  return (
    <Layout
      slug={`events/${slug || ''}`}
      footer={staticFooter}
      header={header}
      breadcrumbs={['Events', ...breadcrumbs]}
      seoMetadata={{ noIndex: true, title, description: excerpt } as any}
    >
      <EventsDetailHero {...heroProps} />
      <EventsDetailBody {...pageProps} />
      <Container backgroundColor="common-black">
        <Container {...sectionSizing}>
          <Flex flexDirection="column" gap="16px" width="100%" paddingTop={48} zIndex={100}>
            <Link href="https://deepgram.com">
              <Image src={Logo} alt="Deepgram" width={130} height={29} />
            </Link>
            <Text fontSize="textSm" textColor="gray-400" md={{ fontSize: 'textMd' }}>
              Language AI models to power your apps
            </Text>
          </Flex>
        </Container>
      </Container>
    </Layout>
  );
};

export default TemplateEventDetails;
