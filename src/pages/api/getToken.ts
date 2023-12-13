import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const tokenURL = process.env.NEXT_PUBLIC_TOKEN_URL || 'https://deepgram.com/.netlify/functions/deepgram_token';

  try {
    const token = await axios.get(tokenURL);
    res.status(200).json({ api_key: token.data.key });
  } catch (err) {
    res.status(500).json(err);
  }
}
