import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

import {
  AirCond,
  Baby,
  Kitchen,
  Minibar,
  MoneyExc,
  Parking,
  Pets,
  Pool,
  Room,
  Safe,
  Shop,
  Spa,
  Terace,
  Tv,
  Wheelchair,
  Wifi,
} from '@/assets/SvgSprite';

export const ratingCat = [
  {
    id: 1,
    value: 5,
    label: (
      <>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </>
    ),
  },
  {
    id: 2,
    value: 4,
    label: (
      <>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </>
    ),
  },
  {
    id: 3,
    value: 3,
    label: (
      <>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </>
    ),
  },
  {
    id: 4,
    value: 2,
    label: (
      <>
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </>
    ),
  },
  {
    id: 5,
    value: 1,
    label: (
      <>
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </>
    ),
  },
];

export const travelType = [
  {
    id: 1,
    value: 'europe-city',
    label: 'Evropski gradovi',
  },
  {
    id: 2,
    value: 'summer',
    label: 'Letovanje',
  },
  {
    id: 3,
    value: 'new-year',
    label: 'Nova Godina',
  },
  {
    id: 4,
    value: 'far-dest',
    label: 'Daleke destinacije',
  },
  {
    id: 5,
    value: 'winter',
    label: 'Zimovanje',
  },
];

export const transportType = [
  {
    id: 1,
    value: 'AIRPLANE',
    label: 'Transport:airplane',
  },
  {
    id: 2,
    value: 'BUS',
    label: 'Transport:bus',
  },
  {
    id: 3,
    value: 'BOAT',
    label: 'Transport:boat',
  },
  {
    id: 4,
    value: 'NO_TRANSPORT',
    label: 'Transport:self',
  },
];

export const propertyType = [
  {
    id: 1,
    value: 'HOTEL',
    label: 'Accomodation:hotel',
  },
  {
    id: 2,
    value: 'APARTMENT',
    label: 'Accomodation:apartment',
  },
  // {
  //   id: 3,
  //   value: 'private',
  //   label: 'Accomodation:private',
  // },
  // {
  //   id: 4,
  //   value: 'rest',
  //   label: 'Accomodation:rest',
  // },
];

export const serviceType = [
  {
    id: 1,
    value: 'OVERNIGHT',
    label: 'Service:bed',
  },
  {
    id: 2,
    value: 'BED_AND_BREAKFAST',
    label: 'Service:b&b',
  },
  {
    id: 3,
    value: 'HALF_BOARD',
    label: 'Service:half-board',
  },
  {
    id: 4,
    value: 'FULL_ACCOMMODATION',
    label: 'Service:full-board',
  },
  {
    id: 5,
    value: 'ALL_INCLUSIVE',
    label: 'Service:allinc',
  },
];

export const facilities = [
  {
    id: 1,
    checked: false,
    name: 'wifi',
    label: 'Content:wifi',
    img: <Wifi />,
  },
  {
    id: 2,
    checked: false,
    name: 'parking',
    label: 'Content:parking',
    img: <Parking />,
  },
  {
    id: 3,
    checked: false,
    name: 'air_cond',
    label: 'Content:air-cond',
    img: <AirCond />,
  },
  {
    id: 4,
    checked: false,
    name: 'pet_friendly',
    label: 'Content:pet',
    img: <Pets />,
  },
  {
    id: 5,
    checked: false,
    name: 'kitchen',
    label: 'Content:kitchen',
    img: <Kitchen />,
  },
  {
    id: 6,
    checked: false,
    name: 'spa',
    label: 'Content:spa',
    img: <Spa />,
  },
  {
    id: 7,
    checked: false,
    name: 'pool',
    label: 'Content:pool',
    img: <Pool />,
  },
  {
    id: 8,
    checked: false,
    name: 'room_service',
    label: 'Content:room-service',
    img: <Room />,
  },
  {
    id: 9,
    checked: false,
    name: 'convenience_store',
    label: 'Content:store',
    img: <Shop />,
  },
  {
    id: 10,
    checked: false,
    name: 'exchange_office',
    label: 'Content:money',
    img: <MoneyExc />,
  },
  {
    id: 11,
    checked: false,
    name: 'child_care_facilities',
    label: 'Content:babysitting',
    img: <Baby />,
  },
  {
    id: 12,
    checked: false,
    name: 'mini_bar',
    label: 'Content:mini-bar',
    img: <Minibar />,
  },
  {
    id: 13,
    checked: false,
    name: 'tv',
    label: 'Content:tv',
    img: <Tv />,
  },
  {
    id: 14,
    checked: false,
    name: 'balcony',
    label: 'Content:terace',
    img: <Terace />,
  },
  {
    id: 15,
    checked: false,
    name: 'safe',
    label: 'Content:safe',
    img: <Safe />,
  },
  {
    id: 16,
    checked: false,
    name: 'accessibility_friendly',
    label: 'Content:disability',
    img: <Wheelchair />,
  },
];

export const guestReviews = [
  {
    id: 1,
    value: 10,
    label: 'Review:excellent',
  },
  {
    id: 2,
    value: 9,
    label: 'Review:very-good',
  },
  {
    id: 3,
    value: 8,
    label: 'Review:good',
  },
  {
    id: 4,
    value: 7,
    label: 'Review:pleasant',
  },
  {
    id: 5,
    value: 6,
    label: 'Review:ok',
  },
  {
    id: 6,
    value: 5,
    label: 'Review:bad',
  },
];

export const dataList = [
  {
    id: 1,
    title: 'serbian hotel',
    ratingCat: '5',
    travelType: 'winter',
    transportType: 'AIRPLANE',
    propertyType: 'APARTMENT',
    serviceType: 'HALF_BOARD',
    facilities: ['wifi', 'pet-friendly', 'air-cond'],
    guestReviews: 'very-good',
    price: 1000,
  },
  {
    id: 2,
    title: 'montenegro hotel',
    ratingCat: '3',
    travelType: 'summer',
    transportType: 'AIRPLANE',
    propertyType: 'APARTMENT',
    serviceType: 'HALF_BOARD',
    facilities: ['parking', 'kitchen', 'spa'],
    guestReviews: 'very-good',
    price: 1000,
  },
  {
    id: 3,
    title: 'poland hotel',
    ratingCat: '4',
    travelType: 'europe-city',
    transportType: 'AIRPLANE',
    propertyType: 'APARTMENT',
    serviceType: 'ALL_INCLUSIVE',
    facilities: ['kitchen', 'parking', 'swimming-pool'],
    guestReviews: 'excellent',
    price: 2500,
  },
  {
    id: 4,
    title: 'germany hotel',
    ratingCat: '1',
    travelType: 'europe-city',
    transportType: 'BUS',
    propertyType: 'HOTEL',
    serviceType: 'ALL_INCLUSIVE',
    facilities: ['spa', 'swimming-pool', 'room-service'],
    guestReviews: 'excellent',
    price: 2500,
  },
  {
    id: 5,
    title: 'spain hotel',
    ratingCat: '5',
    travelType: 'new-year',
    transportType: 'BUS',
    propertyType: 'HOTEL',
    serviceType: 'FULL_ACCOMMODATION',
    facilities: ['parking', 'store', 'room-service'],
    guestReviews: 'good',
    price: 4500,
  },
  {
    id: 6,
    title: 'macedonian hotel',
    ratingCat: '2',
    travelType: 'new-year',
    transportType: 'BUS',
    propertyType: 'HOTEL',
    serviceType: 'FULL_ACCOMMODATION',
    facilities: ['kids-watch', 'store', 'parking'],
    guestReviews: 'good',
    price: 4500,
  },
  {
    id: 7,
    title: 'bosnian hotel',
    ratingCat: '1',
    travelType: 'summer',
    transportType: 'NO_TRANSPORT',
    propertyType: 'HOTEL',
    serviceType: 'BED_AND_BREAKFAST',
    facilities: ['kids-watch', 'mini-bar', 'money-exch'],
    guestReviews: 'pleasant',
    price: 6500,
  },
  {
    id: 8,
    title: 'bosnian hotel',
    ratingCat: '3',
    travelType: 'winter',
    transportType: 'NO_TRANSPORT',
    propertyType: 'APARTMENT',
    serviceType: 'BED_AND_BREAKFAST',
    facilities: ['safe', 'mini-bar', 'tv'],
    guestReviews: 'pleasant',
    price: 7500,
  },
  {
    id: 9,
    title: 'bulgarian hotel',
    ratingCat: '5',
    travelType: 'summer',
    transportType: 'NO_TRANSPORT',
    propertyType: 'APARTMENT',
    serviceType: 'OVERNIGHT',
    facilities: ['safe', 'terace', 'tv'],
    guestReviews: 'ok',
    price: 8000,
  },
  {
    id: 10,
    title: 'italian hotel',
    ratingCat: '2',
    travelType: 'far-dest',
    transportType: 'AIRPLANE',
    propertyType: 'APARTMENT',
    serviceType: 'OVERNIGHT',
    facilities: ['parking', 'person-disability', 'no-smoking'],
    guestReviews: 'bad',
    price: 9000,
  },
  {
    id: 11,
    title: 'greece hotel',
    ratingCat: '5',
    travelType: 'far-dest',
    transportType: 'SHIP',
    propertyType: 'HOTEL',
    serviceType: 'OVERNIGHT',
    facilities: ['parking'],
    guestReviews: 'bad',
    price: 9500,
  },
];
