import { useState } from 'react';
import { Card, Grid, Text } from '@nextui-org/react';

import SearchResultCardSwiper from '@/components/SearchResultCardSwiper/SearchResultCardSwiper';

const SRCmob = () => {
  const [list, setList] = useState([
    {
      id: 1,
      city: 'Venecija',
      img: 'https://www.vivatravel.rs/photo/63904/p/16:10',
      country: 'Italija',
      offerInfo: 'lastMinute',
      logo: 'https://www.kontiki.rs/deploy/images/logo.png',
      price: '100',
      text: 'Autobuski prevoz i 1 noćenje sa doručkom u hotelu sa 3*. Cene i datume za ostale polaske pogledajte u programu.',
      bus: true,
      stay: true,
      breakfast: true,
    },
    {
      id: 2,
      city: 'Istanbul',
      img: 'https://a.cdn-hotels.com/gdcs/production10/d1672/6d376854-ca74-414c-b907-9228326100c3.jpg',
      country: 'Turska',
      offerInfo: 'ourRecommendation',
      logo: 'https://fantast.rs/images/logo-fantast-transparent.png',
      price: '200',
      text: 'Autobuski prevoz i 1 noćenje u hotelu sa 2*. Cene i datume za ostale polaske pogledajte u programu.',
      bus: true,
      stay: true,
      breakfast: false,
    },
    {
      id: 3,
      city: 'Barselona',
      img: 'https://letoimore.com/wp-content/uploads/2014/05/Barcelona.jpg',
      country: 'Spanija',
      offerInfo: null,
      logo: 'https://www.modenatravel.com/wp-content/uploads/2017/01/MODENA-TRAVEL-LOGO-250pxZVEZDICE-cyanorange3.png',
      price: '300',
      text: '1 noćenje sa doručkom u hotelu sa 3*. Cene i datume za ostale polaske pogledajte u programu.',
      bus: false,
      stay: true,
      breakfast: true,
    },
    {
      id: 4,
      city: 'Pariz',
      img: 'https://www.vivatravel.rs/photo/63904/p/16:10',
      country: 'Francuska',
      offerInfo: 'lastMinute',
      logo: 'https://www.kontiki.rs/deploy/images/logo.png',
      price: '400',
      text: 'Noćenje u hotelu sa 2*. Cene i datume za ostale polaske pogledajte u programu.',
      bus: false,
      stay: true,
      breakfast: false,
    },
  ]);

  return (
    <Grid>
      {list.map((item, index) => (
        <Grid key={item.id}>
          <Card>
            <SearchResultCardSwiper />
            <Text>{item.city}</Text>
            <Text>{item.country}</Text>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SRCmob;
