import { oauthClient } from '@/lib/oauthClient';

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const url = oauthClient.generateAuthUrl({
        scope: 'https://www.googleapis.com/auth/userinfo.email',
      });
      console.log({ url });

      return res.status(200).send({ url });
    } catch (error) {
      console.log('generate-gauth-url.js error: ', error);
      res.status(500).send('google auth error 1');
    }
  }
}
