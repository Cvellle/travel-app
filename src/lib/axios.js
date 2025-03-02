import Axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import jwt_decode from 'jwt-decode';

import { appConfig } from '@/config/index';
import { refreshToken } from '@/features/auth';

function authRequestInterceptor(config) {
  const token = getCookie('access_token');

  if (token && !config.url.includes('refresh')) {
    config.headers.authorization = `Bearer ${token}`;
  }

  config.headers.Accept = 'application/json';
  config.headers['Content-Type'] = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: appConfig.appApiUrl,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },

  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const oldRefreshToken = getCookie('refresh_token');
      const oldRefreshTokenId = getCookie('refresh_token_id');

      try {
        const newTokens = await refreshToken({
          refreshToken: oldRefreshToken,
          refreshTokenId: oldRefreshTokenId,
        });

        const decodedToken = jwt_decode(newTokens.refresh_token);
        const expirationTimestamp = decodedToken.exp * 1000;
        const expirationDate = new Date(expirationTimestamp);

        Object.entries(newTokens).forEach(([key, value]) => {
          setCookie(key, value, { expires: expirationDate });
        });

        return axios(originalRequest);
      } catch (error) {
        return error;
      }
    }
    return Promise.reject(error);
  }
);
