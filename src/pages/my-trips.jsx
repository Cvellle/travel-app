import { useState, useEffect } from 'react';
import { Loading, Container } from '@nextui-org/react';

import { MainLayout } from '@/components/Layout';
import { useAuth } from '@/providers/authProvider';
import { SingleWishlist } from '@/features/wishlist';
import { getRandomItem } from '@/utils/helpers';

const heroImages = [
  {
    imgSrc: '/images/hero/santorini.jpg',
    imgText:
      'Photo by <a href="https://unsplash.com/@dgw_unsplash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan</a> on <a href="https://unsplash.com/s/photos/santorini?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    imgSrc: '/images/hero/varadero.jpg',
    imgText:
      'Photo by <a href="https://unsplash.com/@gbnl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gower Brown</a> on <a href="https://unsplash.com/s/photos/varadero?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    imgSrc: '/images/hero/machu-picchu.jpg',
    imgText:
      'Photo by <a href="https://unsplash.com/@victorhwn725?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Victor He</a> on <a href="https://unsplash.com/s/photos/machu-picchu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    imgSrc: '/images/hero/rio.jpg',
    imgText:
      'Photo by <a href="https://unsplash.com/@agustindiazg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Agustin Diaz Gargiulo</a> on <a href="https://unsplash.com/s/photos/rio-de-janeiro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    imgSrc: '/images/hero/taj-mahal.jpg',
    imgText:
      'Photo by <a href="https://unsplash.com/@jovynchamb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jovyn Chamb</a> on <a href="https://unsplash.com/s/photos/taj-mahal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    imgSrc: '/images/hero/thailand.jpg',
    imgText:
      'Photo by <a href="https://unsplash.com/@bekoz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">M o e</a> on <a href="https://unsplash.com/s/photos/thailand-beach?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    imgSrc: '/images/hero/venice.jpg',
    imgText:
      'Photo by <a href="https://unsplash.com/@cobblepot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kit Suman</a> on <a href="https://unsplash.com/s/photos/venice?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    imgSrc: '/images/hero/hero_img.jpg',
    imgText: '',
  },
];

const MyTrips = () => {
  const [counter, setCounter] = useState(0);

  const { user } = useAuth();

  return (
    <Container lg css={{ paddingTop: '25px', paddingBottom: '25px' }}>
      {/* {!!user.favorite_lists.length && counter !== user.favorite_lists.length && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          ></div>
          <Loading color="white" css={{ zIndex: 1001 }} />
        </div>
      )} */}
      {user.favorite_lists.map((list) => (
        <SingleWishlist key={list.id} wishlist={list} setCounter={setCounter} />
      ))}
    </Container>
  );
};

MyTrips.getLayout = function getLayout(page) {
  return <MainLayout heroFilters={false}>{page}</MainLayout>;
};

export default MyTrips;

export async function getServerSideProps({ locale }) {
  const heroBgImage = getRandomItem(heroImages);
  return {
    props: {
      textContent: (await import(`../../locales/${locale}/translations.json`))
        .default,
      heroBgImage,
    },
  };
}
