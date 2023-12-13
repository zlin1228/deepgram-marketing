import { getServerSideSitemapLegacy } from 'next-sitemap';

import type { GetServerSideProps } from 'next';

const siteUrl = 'https://deepgram.com';

export const GetAppSlugs = async () => {
  const data = await fetch(`${siteUrl}/api/ai-apps/getAiAppsMeta`, {
    method: 'GET',
  });
  const res = await data.json();

  return res;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const data = await GetAppSlugs();

  const fields = data?.map((app: any) => ({
    loc: `${siteUrl}/ai-apps/${app.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 0.7,
  }));

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {
  // console
}
