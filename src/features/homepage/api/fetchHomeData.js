import { axios } from '@/lib/axios';
// import { AxiosError } from 'axios';

export const fetchHomeData = async () => {
  try {
    const agencies = await axios({
      method: 'get',
      url: `api/data/homepage`,
    });

    return agencies;
  } catch (error) {
    // const errAxios = error as AxiosError;
    // const errMessage = errAxios.message;
    // console.log('FETCH OFFERS ERROR: ', errMessage);
    console.log('error', error);
    // return errMessage;
  }
};
