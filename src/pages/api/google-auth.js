import { oauthClient } from '@/lib/oauthClient';

async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { tokens } = await oauthClient.getToken(req.query.code);

      return res.status(200).send({ tokens });
    } catch (error) {
      console.log('google-auth.js error: ', error);
      return res.status(500).send('google auth error 2');
    }
  }
}

export default handler;
