import { table } from 'airtableConfig/airtable';

import type { NextApiRequest, NextApiResponse } from 'next';

const buildSlug = (name: string): string =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '');

export const getAiAppsChunkedFromTable = () =>
  new Promise((resolve, reject) => {
    const allRecords: {
      name: string;
      slug: string;
      tagline: string;
      category: string;
      accentColor: string;
      darkColor: string;
      logoUrl: string;
    }[] = [];
    const chunkedRecords: (typeof allRecords)[] = [];
    let currentChunk: typeof allRecords = [];

    table.select({ view: 'Meta, Content, Cover Image' }).eachPage(
      (apps, fetchNextPage) => {
        // eslint-disable-next-line array-callback-return
        apps.forEach(app => {
          const record = {
            name: app.get('App Name') as string,
            slug: buildSlug(app?.get('App Name') as string) || '',
            tagline: (app.get('Tagline (formula)') as string) || '',
            category: (app.get('Category Name') as string) || '',
            accentColor: (app.get('Accent Color') as string) || '',
            darkColor: (app.get('Dark Color') as string) || '',
            logoUrl: (app.get('Brandfetch Logo Url') as string) || '',
          };
          allRecords.push(record);
          currentChunk.push(record);

          if (currentChunk.length === 21) {
            chunkedRecords.push(currentChunk);
            currentChunk = [];
          }
        });
        fetchNextPage();
      },
      err => {
        if (err) {
          console.error(err);
          reject(err);

          return;
        }
        if (currentChunk.length > 0) {
          chunkedRecords.push(currentChunk);
        }
        resolve(chunkedRecords);
      },
    );
  });

const getAiAppsChunked = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const records = await getAiAppsChunkedFromTable();
    res.status(200).json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Something went wrong!' });
  }
};

export default getAiAppsChunked;
