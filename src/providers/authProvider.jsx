import { initReactQueryAuth } from 'react-query-auth';
import { Loading } from '@nextui-org/react';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import jwt_decode from 'jwt-decode';

import {
  signinUser,
  signupUser,
  signout,
  getLoggedInUser,
  googleRegister,
} from '@/features/auth';
import { storage } from '@/utils/storage';
import { googleLogin } from '@/features/auth/api/googleLogin';

async function handleUserResponse(data) {
  const decodedToken = jwt_decode(data.refreshToken);
  const expirationTimestamp = decodedToken.exp * 1000;
  const expirationDate = new Date(expirationTimestamp);

  Object.entries(data).forEach(([key, value]) => {
    setCookie(key, value, { expires: expirationDate });
  });

  console.log('from handle user response');

  // const user = await getLoggedInUser();

  return data;
}

async function loadUser() {
  if (getCookie('accessToken')) {
    try {
      const data = await getLoggedInUser();

      return data;
    } catch (error) {
      console.log('Error getting logged in user: ', error);
      return null;
    }
  }

  return null;
}

async function loginFn(data) {
  let response = null;

  if (data.isGoogleAuth) {
    if (storage.get('googleAuthType') === 'register') {
      response = await googleRegister({ token: data.accessToken });
    }

    if (storage.get('googleAuthType') === 'login') {
      response = await googleLogin({ token: data.accessToken });
    }
  } else {
    response = await signinUser(data);
  }

  const user = await handleUserResponse(response);

  if (storage.get('googleAuthType')) {
    storage.clear('googleAuthType');
  }

  return user;
}

async function registerFn(data) {
  const response = await signupUser(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  try {
    const refreshTokenId = getCookie('refreshTtoken_id');

    if (!refreshTokenId) return;

    await signout(refreshTokenId);

    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    deleteCookie('refreshToken_id');
  } catch (error) {
    console.log('logout error: ', error);
    return error;
  }
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loading />
      </div>
    );
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth(authConfig);
