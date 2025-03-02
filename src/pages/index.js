import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import { QueryClient, dehydrate } from 'react-query';

import { Tabs, Tab } from '@/components/Tabs';
import { MainLayout } from '@/components/Layout';
import { getRandomItem } from '@/utils/helpers';
import DestinationCard from '@/features/destinations/components/DestinationCard';
import { fetchHomeData } from '@/features/homepage/api/fetchHomeData';
import { OffersCard } from '@/components/OffersCard/OffersCard';
import { StyledHomepageWrapper } from '@/styles/StyledHomepageWrapper';

export const heroImages = [
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

export default function Home() {
  const t = useTranslations('Home');

  // Fake DB
  const cities = [
    {
      id: 1,
      name: 'Belgrade',
      country: 'Serbia',
      lastMinute: true,
      popularOffer: false,
      isPopular: true,
      price: '99€',
      logo: 'https://www.kontiki.rs/deploy/images/logo.png',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Be%C5%BEanijski_Blokovi_EDIT.jpg/1200px-Be%C5%BEanijski_Blokovi_EDIT.jpg',
    },
    {
      id: 2,
      name: 'Novi Sad',
      country: 'Serbia',
      lastMinute: false,
      popularOffer: true,
      isPopular: true,
      price: '89€',
      logo: 'https://www.vivatravel.rs/photo/102308/p/16:10',
      image:
        'https://dobrocinstvo.rs/wp-content/uploads/2020/08/naslovna-Novi-Sad.jpg',
    },
    {
      id: 3,
      name: 'Istanbul',
      country: 'Turkey',
      lastMinute: false,
      popularOffer: true,
      isPopular: true,
      price: '109€',
      logo: 'https://fantast.rs/images/logo_mob.png',
      image:
        'https://go2travelling.net/wp-content/uploads/2019/11/istanbul_blog.jpg',
    },
    {
      id: 4,
      name: 'Thasos',
      country: 'Greece',
      lastMinute: false,
      popularOffer: true,
      isPopular: false,
      price: '129€',
      logo: 'https://www.najboljeizsrbije.com/files/prijave/m60_bb_02-4f04e46ac881.jpg',
      image:
        'https://www.greeka.com/photos/eastern-aegean/thassos/greeka_galleries/11-480.jpg',
    },
    {
      id: 5,
      name: 'Halkidiki',
      country: 'Greece',
      lastMinute: false,
      popularOffer: true,
      isPopular: true,
      price: '129€',
      logo: 'https://cms.filiptravel.rs/b2cImages/San/Logos/logo-filiptravel.png',
      image:
        'https://thumbs.dreamstime.com/b/beach-halkidiki-sithonia-greece-beautiful-sandy-78359862.jpg',
    },
    {
      id: 6,
      name: 'Budapest',
      country: 'Hungary',
      lastMinute: false,
      popularOffer: true,
      isPopular: false,
      price: '79€',
      logo: 'https://mojakartica.rs/wp-content/uploads/2019/12/robinzon.jpg',
      image:
        'https://go2travelling.net/wp-content/uploads/2019/11/istanbul_blog.jpg',
    },
    {
      id: 7,
      name: 'Prague',
      country: 'Czechia',
      lastMinute: true,
      popularOffer: true,
      isPopular: true,
      price: '89€',
      logo: 'https://www.prevozvukovic.com/wp-content/uploads/2017/10/Turisticka-agencija-iz-Prijedora.jpg',
      image:
        'https://www.anadventurousworld.com/wp-content/uploads/2019/01/where-to-stay-in-prague.jpg',
    },
    {
      id: 8,
      name: 'Sofia',
      country: 'Bulgaria',
      lastMinute: false,
      popularOffer: false,
      isPopular: false,
      price: '69€',
      logo: 'https://img.sur.ly/favicons/g/gallileo.me.ico',
      image:
        'https://go2travelling.net/wp-content/uploads/2019/11/istanbul_blog.jpg',
    },
    {
      id: 9,
      name: 'Morroco',
      country: 'Morroco',
      lastMinute: false,
      popularOffer: true,
      isPopular: false,
      price: '179€',
      logo: 'https://balkanfun.travel/sites/default/files/Balkan-Fun-Logo-od-2009.png',
      image:
        'https://www.funtravelnis.rs/wp-content/uploads/2019/09/Morocco_Rif.jpg',
    },
    {
      id: 10,
      name: 'Morroco',
      country: 'Morroco',
      lastMinute: false,
      popularOffer: true,
      isPopular: false,
      price: '189€',
      logo: 'https://pbs.twimg.com/profile_images/562940334192095232/0YtDRjSK_400x400.jpeg',
      image:
        'http://www.love2travel.rs/source/storage/trips/May2019/Love%202%20Travel%20-%20%C4%8Cudesni%20Maroko%2011%20dna%20(8).jpg',
    },
    {
      id: 11,
      name: 'Morroco',
      country: 'Morroco',
      lastMinute: false,
      popularOffer: true,
      isPopular: true,
      price: '159€',
      logo: 'https://www.kontiki.rs/deploy/images/logo.png',
      image: 'https://www.portotravel.rs/wp-content/uploads/2017/09/maroko.jpg',
    },
  ];

  // const tabs = [
  //   'Program putovanja',
  //   'Aranžman uključuje',
  //   'Aranžman ne uključuje',
  //   'Smeštaj',
  //   'Izleti',
  //   'Napomene',
  // ];

  return (
    <StyledHomepageWrapper>
      <Head>
        <title>Putujemo.rs</title>
        <meta name="description" content="Najbolji sajt za putovanja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Tabs>
        <Tab
          label={t('label:popularOffer')}
          tabName={t('tabName:popularOffer')}
        >
          <Swiper
            slidesPerView={1.27}
            breakpoints={{
              300: {
                slidesPerView: 1.0,
              },
              327: {
                slidesPerView: 1.0,
              },
              375: {
                slidesPerView: 1.0,
              },
              425: {
                slidesPerView: 1.0,
              },
              500: {
                slidesPerView: 1.1,
              },
              525: {
                slidesPerView: 1.15,
              },
              550: {
                slidesPerView: 1.2,
              },
              575: {
                slidesPerView: 1.25,
              },
              600: {
                slidesPerView: 1.3,
              },
              625: {
                slidesPerView: 1.35,
              },
              650: {
                slidesPerView: 1.4,
              },
              675: {
                slidesPerView: 1.45,
              },
              700: {
                slidesPerView: 1.47,
              },
              725: {
                slidesPerView: 1.49,
              },
              750: {
                slidesPerView: 1.5,
              },
              775: {
                slidesPerView: 1.65,
              },
              1023: {
                slidesPerView: 2.15,
              },
              1439: {
                slidesPerView: 3.25,
              },
              1658: {
                slidesPerView: 3.5,
              },
              2456: {
                slidesPerView: 4.5,
              },
            }}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Pagination, Navigation]}
            className={'homepage-swiper arrow-swiper'}
          >
            {cities?.map((city) =>
              city.popularOffer ? (
                <SwiperSlide key={city.id} className="swiper-slide">
                  <OffersCard
                    destination={city.name}
                    bgImage={city.image}
                    country={city.country}
                    price={city.price}
                    agencyLogo={city.logo}
                  />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </Tab>
        <Tab
          label={'label:lastMinuteOffer'}
          tabName={t('tabName:lastMinuteOffer')}
        >
          Last minute
        </Tab>
        <Tab tabName={t('tabName:all')}>
          <p>Sve</p>
        </Tab>
      </Tabs>

      <Tabs>
        {[t('tabName:popularDestinations'), t('tabName:all')].map(
          (offer, index, array) => {
            return (
              <Tab
                label={offer.toLowerCase()}
                tabName={
                  array.length - 1 === index ? offer : offer.toUpperCase()
                }
                key={offer.toLowerCase()}
              >
                <Swiper
                  slidesPerView={1.46}
                  breakpoints={{
                    374: {
                      slidesPerView: 1.7,
                    },
                    425: {
                      slidesPerView: 1.7,
                    },
                    565: {
                      slidesPerView: 2.5,
                    },
                    788: {
                      slidesPerView: 3.2,
                    },
                    1050: {
                      slidesPerView: 3,
                    },
                    2456: {
                      slidesPerView: 3.5,
                    },
                  }}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  navigation
                  modules={[Pagination, Navigation]}
                  className={'homepage-swiper arrow-swiper'}
                >
                  {cities?.map((city) =>
                    city.isPopular ? (
                      <SwiperSlide key={city.id}>
                        <DestinationCard
                          destination={city.name}
                          bgImage={city.image}
                        />
                      </SwiperSlide>
                    ) : null
                  )}
                </Swiper>
              </Tab>
            );
          }
        )}
      </Tabs>
    </StyledHomepageWrapper>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps({ locale }) {
  const heroBgImage = getRandomItem(heroImages);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('fetchHomeData', fetchHomeData);
  return {
    props: {
      textContent: (await import(`../../locales/${locale}/translations.json`))
        .default,
      heroBgImage,
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
