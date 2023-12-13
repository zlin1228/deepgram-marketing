import { render } from 'datocms-structured-text-to-plain-text';

import Layout from 'layouts/Layout';
import { initializeApollo } from 'lib/client';
import { AllGlossaryDataQuery, AllRedirectsQuery, GlobalCompanyHeaderFooterQuery, GlossarySlugsQuery } from 'lib/sdk';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';

import Section from 'molecules/Section/Section';

import ConversionPanel from 'components/ConversionPanel/ConversionPanel';
import GlossaryContent from 'components/Glossary/GlossaryContent';
import GlossaryHero from 'components/Glossary/GlossaryHero';
import GlossaryNav from 'components/Glossary/GlossaryNav';
import GlossaryToC from 'components/Glossary/GlossaryToC';

import { defaultSectionProps } from 'utils/defaultProps';
import { getToC } from 'utils/functions';

import type {
  IComponentConversionPanelRecord,
  IComponentFooterRecord,
  IComponentHeaderRecord,
  IEntityCompanyRecord,
  ITemplateGlossaryRecord,
} from 'lib/types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { RichText } from 'utils/richTextParser';

export interface NavDataProps {
  id?: ITemplateGlossaryRecord['id'];
  title?: ITemplateGlossaryRecord['title'];
  slug?: ITemplateGlossaryRecord['slug'];
  subcategoryPages?: ITemplateGlossaryRecord['subcategoryPages'];
}

interface WebsitePageProps {
  pageProps: any;
  slug?: string;
  staticFooter: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  isCategoryPage?: boolean;
  pageData: ITemplateGlossaryRecord;
  navData: NavDataProps[];
  currentSlug?: string;
  conversionPanel: IComponentConversionPanelRecord;
  company: IEntityCompanyRecord;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { glossarySlugs },
  } = await apolloClient.query({ query: GlossarySlugsQuery });
  const slugs: { id: any; slug: string[] }[] = [];

  // eslint-disable-next-line array-callback-return
  glossarySlugs.flatMap((page: ITemplateGlossaryRecord) => {
    const slug = page?.slug === 'root' ? ['ai-glossary'] : [page.slug as string];
    const id = page?.id as any;
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

export const getStaticProps: GetStaticProps = async props => {
  const apolloClient = initializeApollo();

  const requestedSlug = (props?.params?.slug as string[]) || ['ai-glossary'];
  const builtSlug = requestedSlug?.join('/');

  const {
    data: { redirects },
  } = await apolloClient.query({
    query: AllRedirectsQuery,
    variables: {
      slug: `https://deepgram.com/ai-glossary/${requestedSlug}`,
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
    data: { componentFooter, componentHeader, entityCompany },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });

  const {
    data: { templateGlossary, glossaryNav, componentConversionPanel },
  } = await apolloClient.query({
    query: AllGlossaryDataQuery,
    variables: { slug: builtSlug === 'ai-glossary' ? 'root' : builtSlug },
  });

  const pageData = templateGlossary || {};
  const navData = glossaryNav?.filter((page: ITemplateGlossaryRecord) => page?.categoryPage) || [];

  return {
    props: {
      slug: requestedSlug,
      staticFooter: componentFooter,
      header: componentHeader as IComponentHeaderRecord,
      company: entityCompany,
      pageData,
      navData,
      conversionPanel: componentConversionPanel,
      key: builtSlug,
    },
    notFound: !pageData || Object.keys(pageData).length === 0,
    revalidate: 60,
  };
};

const GlossaryPage: NextPage<WebsitePageProps> = ({
  staticFooter,
  header,
  pageData,
  navData,
  conversionPanel,
  company,
}) => {
  const { title, slug: currentSlug, body, excerpt, _updatedAt, id } = pageData;
  const toC = getToC(body?.value);

  const seo = pageData.seo || {};
  const seoMetadata = {
    title: seo?.title || title,
    description: `${(seo.description || render(excerpt as any))?.substring(0, 157)}...` || title,
    _updatedAt,
  };

  return (
    <Layout
      pageId={id}
      slug={currentSlug === 'root' ? 'ai-glossary' : `ai-glossary/${currentSlug || ''}`}
      seoMetadata={seoMetadata}
      footer={staticFooter}
      header={header}
    >
      <Section
        id="glossary-content"
        width="100%"
        backgroundColor="#000"
        isFullWidth
        paddingTop={72}
        sm={{ paddingTop: 72 }}
        xl={{ paddingTop: 96 }}
        overflowX="unset"
        overflowY="unset"
      >
        <Flex borderTop="1px solid #2C2C33" borderBottom="1px solid #2C2C33">
          <Container backgroundColor="common-black" height="100%" maxWidth="1440px" marginX="auto">
            <Grid
              height="100%"
              gridTemplateRows="auto"
              gridTemplateColumns="unset"
              md={{
                gridTemplateRows: 'unset',
                gridTemplateColumns: 'minmax(0, 25fr) minmax(0, 75fr)',
              }}
              xl={{
                gridTemplateColumns: 'minmax(0, 22fr) minmax(0, 60fr) minmax(0, 18fr)',
              }}
            >
              <GlossaryNav navData={navData} currentSlug={currentSlug || ''} title={title || ''} />
              <Flex xl={{ paddingX: 16, paddingY: 32 }} flexDirection="column">
                <GlossaryHero
                  title={title || ''}
                  body={body as RichText}
                  excerpt={excerpt as RichText}
                  updatedAt={_updatedAt}
                />
                <Flex
                  xl={{ display: 'none' }}
                  paddingX={32}
                  paddingY={24}
                  backgroundColor="common-black"
                  position="sticky"
                  top="72px"
                  zIndex="100"
                >
                  {toC && toC.length > 0 && <GlossaryToC tableOfContents={toC} />}
                </Flex>
                <GlossaryContent body={body as RichText} />
              </Flex>
              <Flex
                borderLeft="1px solid #2C2C33;"
                display="none"
                xl={{
                  display: 'flex',
                  paddingRight: 32,
                  paddingLeft: 32,
                  paddingBottom: 32,
                  marginTop: 24,
                }}
              >
                <Flex>{toC && toC.length > 0 && <GlossaryToC tableOfContents={toC} />}</Flex>
              </Flex>
            </Grid>
          </Container>
        </Flex>
      </Section>
      <Section id="blog-conversion-panel-section" backgroundColor="Rainbow Gradient" {...defaultSectionProps}>
        <ConversionPanel {...conversionPanel} company={company} />
      </Section>
    </Layout>
  );
};

export default GlossaryPage;
