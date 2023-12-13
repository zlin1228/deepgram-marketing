/* eslint-disable @typescript-eslint/no-var-requires */
import { Deepgram } from '@deepgram/sdk';
import dotenv from 'dotenv';

import type { HandlerEvent } from '@netlify/functions';

dotenv.config();

const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY as string);
const deepgramProjectId = process.env.DEEPGRAM_PROJECT_ID as string;

const buildCorsHeaders = (event: HandlerEvent, methods: string) => {
  // set default Access-Control-Allow-Origin to the current deployed URL
  let corsOrigin = process.env.URL;

  // get "allow-list" CORS domains from environment variable
  const cors = process.env.DEEPGRAM_SERVERLESS_CORS;

  // get "origin" or referer from request headers
  const origin = event.headers.origin || event.headers.host;

  try {
    // do we have an allow-list and origin?
    if (cors && origin) {
      // parse the origin as a URL
      const eventOrigin = new URL(origin);

      // get allow-list as an array
      const corsDomains = [process.env.URL, process.env.DEPLOY_URL, ...cors.split(', ')];

      // find the current request origin in the allow-list
      const thisCors = corsDomains.indexOf(eventOrigin.origin);

      // if in the allow-list, over-ride the Access-Control-Allow-Origin
      if (thisCors > -1) {
        corsOrigin = corsDomains[thisCors];
      }
    }

    return {
      'Access-Control-Allow-Origin': corsOrigin,
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': methods,
      Allow: methods,
      Vary: 'Origin',
    };
  } catch (corsErr) {
    return {
      'Access-Control-Allow-Origin': corsOrigin,
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': methods,
      Allow: methods,
      Vary: 'Origin',
    };
  }
};

exports.handler = async function (event: HandlerEvent) {
  const headers = buildCorsHeaders(event, 'GET, OPTIONS');

  switch (event.httpMethod) {
    case 'OPTIONS':
      return {
        statusCode: 200,
        body: 'OK',
        headers,
      };
    case 'GET':
      try {
        const key = await deepgram.keys.create(deepgramProjectId, 'Temporary key', ['usage:write'], {
          timeToLive: 5,
        });

        return {
          statusCode: 200,
          body: JSON.stringify(key),
          headers,
        };
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);

        try {
          return {
            statusCode: 500,
            body: JSON.stringify(await deepgram.projects.list()),
            headers,
          };
        } catch (errTwo) {
          return {
            statusCode: 500,
            body: 'API key still doesnt work',
          };
        }
      }

    default:
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
        headers,
      };
  }
};
