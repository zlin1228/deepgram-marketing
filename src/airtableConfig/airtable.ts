/* eslint-disable import/prefer-default-export */
import Airtable from 'airtable';

// Authenticate
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.NEXT_AIRTABLE_ACCESS_TOKEN,
});

// Initialize a base
const base = Airtable.base(process.env.NEXT_AIRTABLE_BASE_ID as string);

// Reference a table
const table = base(process.env.NEXT_AIRTABLE_TABLE_NAME as string);

export { table };
