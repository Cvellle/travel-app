import { getCookie } from 'cookies-next';

export const getRandomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

export const checkUserAuthState = () => {
  return getCookie('access_token');
};

export const getRandomInteger = ({ arrayLength }) => {
  return Math.floor(Math.random() * arrayLength);
};
