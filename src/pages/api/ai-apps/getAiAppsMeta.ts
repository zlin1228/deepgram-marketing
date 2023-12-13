import { table } from 'airtableConfig/airtable';

import type { NextApiRequest, NextApiResponse } from 'next';

const buildSlug = (name: string): string =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '');

export const getAiAppsMetaFromTable = () =>
  new Promise((resolve, reject) => {
    const allRecords: { name: string; slug: string }[] = [];

    table.select({ view: 'Meta, Content, Cover Image' }).eachPage(
      (apps, fetchNextPage) => {
        // eslint-disable-next-line array-callback-return
        apps.forEach(app =>
          allRecords.push({ name: app.get('App Name') as string, slug: buildSlug(app?.get('App Name') as string) }),
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

const getAiAppsMeta = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const records = await getAiAppsMetaFromTable();
    res.status(200).json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Something went wrong!' });
  }
};

export default getAiAppsMeta;
