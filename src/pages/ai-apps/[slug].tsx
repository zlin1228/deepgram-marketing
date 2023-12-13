import axios from 'axios';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import { addApps, fetchAllCachedApps, updateApps } from 'indexDB/dbActions';
import Layout from 'layouts/Layout';
import { initializeApollo } from 'lib/client';
import { GlobalCompanyHeaderFooterQuery } from 'lib/sdk';
import { getAppRecordFromTable } from 'pages/api/ai-apps/[appSlug]';
import { getAiAppsFirstChunkFromTable } from 'pages/api/ai-apps/getAppsFirstChunk';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';

import Section from 'molecules/Section/Section';

import Content from 'components/AiApps/Content';
import Sidebar from 'components/AiApps/Sidebar';
import { isCookieFresh, setTimestampCookie } from 'components/AiApps/utils/utils';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import SocialShare from 'components/ConversionPanel/SocialShare';

import { defaultSectionProps } from 'utils/defaultProps';
import { chunkArray } from 'utils/functions';

import type { IAiApp } from 'indexDB/db';
import type { IComponentFooterRecord, IComponentHeaderRecord } from 'lib/types';
import type { GetServerSideProps, NextPage } from 'next';

const AppsListing = dynamic(() => import('../../components/AiApps/AppsListing'));

interface AiAppsPageProps {
  footer: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  pageData: any;
  featuredApps: any;
  company: any;
}

export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
  const apolloClient = initializeApollo();

  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  const pageData = await getAppRecordFromTable(query?.slug as string);
  const featuredApps = await getAiAppsFirstChunkFromTable();

  const {
    data: { componentFooter, componentHeader, entityCompany },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });

  return {
    props: {
      footer: componentFooter as IComponentFooterRecord,
      header: componentHeader as IComponentHeaderRecord,
      pageData: pageData as unknown,
      featuredApps: featuredApps as unknown,
      company: entityCompany,
      key: query?.slug,
    },
  };
};

const AiAppsPage: NextPage<AiAppsPageProps> = ({ pageData, footer, header, featuredApps, company }) => {
  const [apps, setApps] = useState(featuredApps);
  const seoMetadata = {
    title: pageData['Meta Title (formula)'],
    description: `${pageData['Meta Description (formula)']?.substring(0, 157)}...`,
    image: pageData['Cover Image (1200x628)'][0],
  };

  const breadcrumbs = [
    { link: '/ai-apps', label: 'AI Apps Catalog' },
    { link: '', label: pageData['App Name'] },
  ];

  useEffect(() => {
    const fetchApps = async () => {
      const cachedApps = await fetchAllCachedApps();
      if (cachedApps.length === 0) {
        const airtableTableData = (await axios.get('/api/ai-apps/getAiAppsChunked')).data as IAiApp[];
        if (airtableTableData.length !== 0) {
          addApps(airtableTableData.flat());
          setApps(airtableTableData);
          setTimestampCookie();
        }
      } else if (!isCookieFresh('aiAppsTimestamp')) {
        const airtableTableData = (await axios.get('/api/ai-apps/getAiAppsChunked')).data as IAiApp[];
        if (airtableTableData.length !== 0) {
          updateApps(airtableTableData.flat());
          setApps(airtableTableData);
          setTimestampCookie();
        }
      } else {
        setApps(chunkArray(cachedApps, 21));
      }
    };

    fetchApps();
  }, []);

  return (
    <Layout slug={`ai-apps/${pageData['URL Slug']}`} footer={footer} header={header} seoMetadata={seoMetadata}>
      <Section textColor="common-white" backgroundColor="#000" paddingY={96} {...(defaultSectionProps as any)}>
        <Breadcrumb breadcrumbs={breadcrumbs} noHome />
        <Container maxWidth="1008px" marginX="auto" paddingTop={56}>
          <Grid
            gridTemplateColumns="minmax(0, 1fr) "
            rowGap="32px"
            marginBottom={96}
            md={{ rowGap: '64px' }}
            lg={{ gridTemplateColumns: '208px auto', columnGap: '116px' }}
          >
            <Sidebar pageData={pageData} />
            <Content pageData={pageData} />
          </Grid>
        </Container>
        <AppsListing apps={apps} />
      </Section>
      <Container display="none" backgroundColor="common-black" xl={{ display: 'block' }}>
        <Flex maxWidth="1216px" marginX="auto">
          <SocialShare {...company} />
        </Flex>
      </Container>
    </Layout>
  );
};

export default AiAppsPage;
