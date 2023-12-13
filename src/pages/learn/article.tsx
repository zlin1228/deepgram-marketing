import Layout from 'layouts/Layout';
import { initializeApollo } from 'lib/client';
import {
  AllBlogListingPerPageQuery,
  AllBlogListingPerPageWithSearchFilterQuery,
  AllBlogListingQuery,
  AllCustomPageMetaQuery,
  GlobalCompanyHeaderFooterQuery,
  TemplatePageFullDataQuery,
} from 'lib/sdk';

import BlogListing from 'components/Blog/BlogListing';
import ResourceHero from 'components/Resource/ResourceHero';

import type {
  IComponentFooterRecord,
  IComponentHeaderRecord,
  ILayoutSectionRecord,
  ISeoField,
  ITemplateBlogRecord,
  ITemplatePageRecord,
} from 'lib/types';
import type { GetServerSideProps, NextPage } from 'next';

interface WebsitePageProps {
  pageProps: ITemplatePageRecord | null;
  blogs: ITemplateBlogRecord[];
  blogCat: string[];
  footer: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  components: ILayoutSectionRecord[];
  seo?: any;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const apolloClient = initializeApollo();

  const page = parseInt(query?.page as string) || 1;
  const search = query?.search as string;
  const {
    data: { allTemplateBlogs },
  } =
    search && search !== ''
      ? await apolloClient.query({
          query: AllBlogListingPerPageWithSearchFilterQuery,
          variables: { skip: (page - 1) * 10, search },
        })
      : await apolloClient.query({ query: AllBlogListingPerPageQuery, variables: { skip: (page - 1) * 10 } });
  const {
    data: { blogList1, blogList2, blogList3, blogList4, blogList5 },
  } = await apolloClient.query({ query: AllBlogListingQuery });

  const allBlogs = [...blogList1, ...blogList2, ...blogList3, ...blogList4, ...blogList5];
  const category: string[] = [];
  allBlogs.map(item => {
    const resourcetype: string = (item as ITemplateBlogRecord)?.category as string;
    if (!category.includes(resourcetype)) {
      category.push(resourcetype);
    }

    return;
  });

  const {
    data: { templatePage },
  } = await apolloClient.query({
    query: TemplatePageFullDataQuery,
    variables: { slug: 'learn/article' },
  });
  const {
    data: { componentFooter, componentHeader },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });
  const {
    data: { pageMetaData },
  } = await apolloClient.query({ query: AllCustomPageMetaQuery });

  const componentsArray = templatePage?.sections || [];

  return {
    props: {
      pageProps: templatePage || null,
      blogs: allTemplateBlogs as ITemplateBlogRecord[],
      blogCat: category as string[],
      footer: componentFooter as IComponentFooterRecord,
      header: componentHeader as IComponentHeaderRecord,
      components: (componentsArray || []) as unknown as ILayoutSectionRecord[],
      seo: pageMetaData?.metaData?.filter((item: { slug: string }) => item?.slug === 'learn/article')?.[0],
    },
  };
};

const ResourceBlogPage: NextPage<WebsitePageProps> = ({ seo, blogs, footer, header, blogCat, components }) => {
  const seoData = {
    title: 'Deepgram Articles',
    description:
      'Deepgram Automatic Speech Recognition helps you build voice applications with better, faster, more economical transcription at scale.',
  } as ISeoField;

  return (
    <Layout slug="learn/article" seoMetadata={seo || seoData} footer={footer} header={header}>
      <ResourceHero
        title={
          (components?.[0]?.component?.__typename === 'ComponentHeadingRecord' && components?.[0]?.component.heading) ||
          'Article'
        }
        headingType={
          (components?.[0]?.component?.__typename === 'ComponentHeadingRecord' &&
            components?.[0]?.component.headingType) ||
          'h1'
        }
      />
      <BlogListing list={blogs} active="article" category={blogCat} />
    </Layout>
  );
};

export default ResourceBlogPage;
