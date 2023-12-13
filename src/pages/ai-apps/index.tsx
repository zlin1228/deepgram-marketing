import axios from 'axios';
import { useEffect, useState } from 'react';

import { addApps, fetchAllCachedApps, updateApps } from 'indexDB/dbActions';
import Layout from 'layouts/Layout';
import { initializeApollo } from 'lib/client';
import { GlobalCompanyHeaderFooterQuery } from 'lib/sdk';
import { getAiAppsFirstChunkFromTable } from 'pages/api/ai-apps/getAppsFirstChunk';

import GreenGradient from 'assets/images/green-gradient.webp';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import Section from 'molecules/Section/Section';

import AppsListing from 'components/AiApps/AppsListing';
import SearchHero from 'components/AiApps/SearchHero';
import { isCookieFresh, setTimestampCookie } from 'components/AiApps/utils/utils';
import SocialShare from 'components/ConversionPanel/SocialShare';

import { defaultSectionProps } from 'utils/defaultProps';
import { chunkArray } from 'utils/functions';

import type { IAiApp } from 'indexDB/db';
import type { IComponentFooterRecord, IComponentHeaderRecord } from 'lib/types';
import type { ISeoField } from 'lib/types';
import type { GetServerSideProps, NextPage } from 'next';

interface AiAppsPageProps {
  footer: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  initialData: any;
  featuredApps: any;
  company: any;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const apolloClient = initializeApollo();

  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  const firstChunk = await getAiAppsFirstChunkFromTable();

  const {
    data: { componentFooter, componentHeader, entityCompany },
  } = await apolloClient.query({ query: GlobalCompanyHeaderFooterQuery });

  return {
    props: {
      footer: componentFooter as IComponentFooterRecord,
      header: componentHeader as IComponentHeaderRecord,
      initialData: firstChunk as unknown,
      company: entityCompany,
    },
  };
};

const AiAppsPage: NextPage<AiAppsPageProps> = ({ initialData, footer, header, company }) => {
  const [apps, setApps] = useState(initialData);
  const seoData = {
    title: 'Find AI apps using AI | Deepgram AI Apps Catalog',
    description:
      'Find the best AI apps for image generation, content creation, summarization, SEO, coding, chatbots, and more with Deepgram’s curated AI apps catalog',
    image: {
      url: 'www.datocms-assets.com/96965/1699036467-open-graph-deepgram-ai-apps-page.jpg',
    },
  } as ISeoField;

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
    <Layout slug="ai-apps" seoMetadata={seoData} footer={footer} header={header}>
      <Section
        {...(defaultSectionProps as any)}
        textColor="common-white"
        backgroundColor="#000"
        backgroundSize="1200px auto"
        paddingTop={128}
        xl={{ paddingTop: 160 }}
        css={`
          background-image: url(${GreenGradient.src}) !important;
          margin-bottom: -1px;
          background-position: center center !important;
          background-size: cover !important;
        `}
      >
        <SearchHero data={apps} />
      </Section>
      <Section
        textColor="common-white"
        backgroundColor="#000"
        paddingX={16}
        paddingY={96}
        sm={{ paddingX: 32 }}
        {...(defaultSectionProps as any)}
      >
        <AppsListing apps={apps} isListing />
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
