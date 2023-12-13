import { table } from 'airtableConfig/airtable';

import type { NextApiRequest, NextApiResponse } from 'next';

export const getAppRecordFromTable = async (urlSlug: string) => {
  try {
    const queryResult = await table
      .select({ view: 'Meta, Content, Cover Image', filterByFormula: `LOWER({URL Slug}) = LOWER("${urlSlug}")` })
      .firstPage();

    if (queryResult && queryResult.length > 0) {
      const appRecord = queryResult[0].fields;

      return appRecord;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const aiApp = async (req: NextApiRequest, res: NextApiResponse) => {
  const { appSlug } = req.query;

  try {
    const appRecord = await getAppRecordFromTable(appSlug as string);
    if (appRecord) {
      res.status(200).json(appRecord);
    } else {
      res.status(404).json({ msg: 'App not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Something went wrong!' });
  }
};

export default aiApp;
