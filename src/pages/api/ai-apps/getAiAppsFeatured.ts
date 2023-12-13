import { table } from 'airtableConfig/airtable';

import type { NextApiRequest, NextApiResponse } from 'next';

const buildSlug = (name: string): string =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '');

export const getAiAppsFeaturedFromTable = () =>
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

    table.select({ view: 'Meta, Content, Cover Image', maxRecords: 20 }).eachPage(
      (apps, fetchNextPage) => {
        // eslint-disable-next-line array-callback-return
        apps.forEach(app =>
          allRecords.push({
            name: app.get('App Name') as string,
            slug: buildSlug(app?.get('App Name') as string) || '',
            tagline: (app.get('Tagline (formula)') as string) || '',
            category: (app.get('Category Name') as string) || '',
            accentColor: (app.get('Accent Color') as string) || '',
            darkColor: (app.get('Dark Color') as string) || '',
            logoUrl: (app.get('Brandfetch Logo Url') as string) || '',
          }),
        );
        fetchNextPage();
      },
      err => {
        if (err) {
          console.error(err);
          reject(err);

          return;
        }
        resolve(allRecords);
      },
    );
  });

const getAiAppsFeatured = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const records = await getAiAppsFeaturedFromTable();
    res.status(200).json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Something went wrong!' });
  }
};

export default getAiAppsFeatured;
