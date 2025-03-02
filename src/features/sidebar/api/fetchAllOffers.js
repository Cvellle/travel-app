import { axios } from '@/lib/axios';
// import { AxiosError } from 'axios';

export const fetchAllOffers = async (dependencies) => {
  try {
    const offers = await axios({
      method: 'get',
      params: dependencies,
      // url: `/api/offers`,
      // url: `api/offers/filter?limit=10&offer_type=856ae764-8f2a-450f-a045-26667b27fbef&city_to=0f67560c-9dbc-43b8-918f-0a7868bdb75d&start_date=2022-08-12&end_date=2022-12-11&adults=2&kids=1`,
      url: `api/offers/filter`,
    });

    return offers;
  } catch (error) {
    // const errAxios = error as AxiosError;
    // const errMessage = errAxios.message;
    // console.log('FETCH OFFERS ERROR: ', errMessage);
    console.log('error', error);
    // return errMessage;
  }
};
