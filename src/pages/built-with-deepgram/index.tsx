import Layout from 'layouts/Layout';
import LayoutSection from 'layouts/LayoutSection';
import { initializeApollo } from 'lib/client';
import {
  AllTagsQuery,
  AllTemplateBuiltWithDeepgramQuery,
  GlobalCompanyHeaderFooterQuery,
  TemplatePageFullDataQuery,
} from 'lib/sdk';

import BuiltWithDeepgramHero from 'components/BuiltWithDeepgram/BuiltWithDeepgramHero';
import BuiltWithDeepgramList from 'components/BuiltWithDeepgram/BuiltWithDeepgramList';

import type {
  IComponentFooterRecord,
  IComponentHeaderRecord,
  IEntityCompanyRecord,
  IEntityTagRecord,
  ILayoutSectionRecord,
  ITemplateBuiltWithDeepgramRecord,
  ITemplatePageRecord,
} from 'lib/types';
import type { GetStaticProps, NextPage } from 'next';

interface WebsitePageProps {
  pageProps: ITemplatePageRecord;
  company: IEntityCompanyRecord;
  footer: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  components: ILayoutSectionRecord[];
  builtWithDeepgrams: ITemplateBuiltWithDeepgramRecord[];
  tags: IEntityTagRecord[];
}

export const getStaticProps: GetStaticProps<WebsitePageProps> = async () => {
  const apolloClient = initializeApollo();

  const requestedSlug = 'built-with-deepgram';
  const {
    data: { templatePage },
  } = await apolloClient.query({ query: TemplatePageFullDataQuery, variables: { slug: requestedSlug } });

  const componentsArray = templatePage?.sections || [];

  const {
    data: { allTemplateBuiltWithDeepgrams },
  } = await apolloClient.query({ query: AllTemplateBuiltWithDeepgramQuery });
  const {
    data: { allEntityTags },
  } = await apolloClient.query({ query: AllTagsQuery });

  const {
    data: { componentFooter, componentHeader, entityCompany },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });

  return {
    props: {
      pageProps: templatePage as ITemplatePageRecord,
      company: entityCompany as IEntityCompanyRecord,
      footer: componentFooter as IComponentFooterRecord,
      header: componentHeader as IComponentHeaderRecord,
      components: componentsArray as unknown as ILayoutSectionRecord[],
      builtWithDeepgrams: allTemplateBuiltWithDeepgrams as ITemplateBuiltWithDeepgramRecord[],
      tags: allEntityTags as IEntityTagRecord[],
    },
    notFound: !templatePage,
    revalidate: 60,
  };
};

const TemplatePage: NextPage<WebsitePageProps> = ({
  pageProps: { slug, seo },
  company,
  footer,
  header,
  components,
  builtWithDeepgrams,
  tags,
}) => {
  if (!seo) {
    // throw new Error(`Page at ${slug} is missing SEO`);
    console.log('missing SEO');
  }

  return (
    <Layout slug={slug || ''} seoMetadata={seo as any} footer={footer} header={header}>
      <BuiltWithDeepgramHero {...builtWithDeepgrams[0]} />
      <BuiltWithDeepgramList list={builtWithDeepgrams} tags={tags} />
      {components &&
        components.map(
          component =>
            component &&
            !!Object.keys(component).length && <LayoutSection {...component} key={component?.id} company={company} />,
        )}
    </Layout>
  );
};
export default TemplatePage;
