import { google } from 'googleapis';

import { appConfig } from '@/config/index';

const oauthClient = new google.auth.OAuth2(
  appConfig.googleAuthClientId,
  appConfig.googleAuthClientSecret,
  appConfig.googleAuthRedirectUrl
);

export { oauthClient };
