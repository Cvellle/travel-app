import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { QueryClient, dehydrate } from 'react-query';
import { useRouter } from 'next/router';
import format from 'date-fns/format';
import { Container, Grid } from '@nextui-org/react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MainLayout } from '@/components/Layout';
import SingleOfferSmallScreenSections from '@/components/SingleOfferSmallScreenSections/SingleOfferSmallScreenSections';
import TopDescription from '@/components/SinglePageTopDesc/TopDescription';
import { SimilarOffersSwiper } from '@/features/similar-offers-swiper/SimilarOffersSwiper';
import AccommodationOfferSection from '@/features/accommodation/components/AccommodationOfferSection';
import TravelProgramSection from '@/features/travelProgram/TravelProgramSection';
import OtherNotesSection from '@/features/otherNotes/OtherNotesSection';
import IncludesArrangement from '@/features/includesArrangement/IncludesArrangement';
import ExcludesArrangement from '@/features/excludesArrangement/ExcludesArrangement';
import AdditionalExcursionsSection from '@/features/additionalExcursions/components/AdditionalExcursionsSection';
import ImagesPreview from '@/components/ImagesGallery/ImagesPreview';
import { Tab, TabsSection } from '@/components/Tabs';
import { fetchSingleOffer } from '@/features/singleOffer';
import { useGetSingleOffer } from '@/hooks/offers/useGetSingleOffer';
import { fetchSimilarOffers } from '@/features/similarOffers/api/fetchSimilarOffers';
import { useGetSimilarOffers } from '@/hooks/offers/useGetSimilarOffers';
import { getRandomItem } from '@/utils/helpers';
import { FiltersHero } from '@/components/Hero/FiltersHero';
import { useFetchHomeData } from '@/hooks/homepage/useFetchHomeData';
import { SidebarWrapper } from '@/components/Sidebar/StyledSidebar';
import TotalPrice from '@/components/TotalPrice/TotalPrice';

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

const OfferDetails = ({ id, offerDurationId }) => {
  const [allOfferTypes, setAllOfferTypes] = useState([]);
  const [allCountriesFrom, setAllCountriesFrom] = useState([]);
  const [allCountriesTo, setAllCountriesTo] = useState([]);
  const [allCitiesFrom, setAllCitiesFrom] = useState([]);
  const [allCitiesTo, setAllCitiesTo] = useState([]);

  const [startDateSearch, setStartDateSearch] = useState('');
  const [endDateSearch, setEndDateSearch] = useState('');

  const router = useRouter();
  const data = router.query;

  const adultsSearch = data?.adults;
  const kidsSearch = data?.kids;

  const { data: offerTypes, isLoading: offerTypesLoad } = useFetchHomeData({
    onSuccess: (data) => {
      setAllOfferTypes(data?.offerTypes);
      setAllCountriesFrom(data?.countries_from);
      setAllCountriesTo(data?.countries_to);
      setAllCitiesFrom(data?.cities_from);
      setAllCitiesTo(data?.cities_to);
    },
  });

  useEffect(() => {
    if (data.start_date && data.end_date) {
      setStartDateSearch(format(new Date(data?.start_date), 'MM/dd/yyy'));
      setEndDateSearch(format(new Date(data?.end_date), 'MM/dd/yyy'));
    }
  }, [data]);

  const t = useTranslations('SingleOfferTopDesc');
  const isMd = useMediaQuery(960);

  const { data: offer } = useGetSingleOffer(id);
  const { data: similarOffers } = useGetSimilarOffers(offerDurationId);

  const tabs = [
    'Tabs:travelProgram',
    'Tabs:arrangementIncludes',
    'Tabs:arrangementExcludes',
    'Tabs:accommodation',
    'Tabs:additionalExcursions',
    'Tabs:otherNotes',
  ];

  const content = [
    <div key="1">
      <br />
      <br />
      <br />
      <TravelProgramSection key="1" offerData={offer} />
    </div>,
    <IncludesArrangement key="2" offerData={offer} />,
    <ExcludesArrangement key="3" offerData={offer} />,
    <AccommodationOfferSection offerData={offer} key="4" />,
    <AdditionalExcursionsSection offerData={offer} key="5" />,
    <OtherNotesSection offerData={offer} key="6" />,
  ];

  return (
    <div>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <div style={{ margin: '60px 0px 90px 0px' }}>
          <TopDescription
            offerData={offer}
            offerDurationId={offerDurationId}
            id={id}
          />
        </div>
        <Grid
          css={{
            flexDirection: 'column',
            display: 'flex',
            margin: '0px 0px 85px 0',
            rowGap: '30px',
            '@sm': {
              flexDirection: 'row',
              columnGap: '16px',
            },
          }}
        >
          <SidebarWrapper
            css={{
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              maxWidth: '700px',
              margin: '0 auto',
              boxShadow: 'none',
              '@sm': {
                borderRadius: '24px',
                width: '380px',
              },
            }}
          >
            <Container css={{ padding: '0' }}>
              <FiltersHero
                sidebar={true}
                arrangement={false}
                allOfferTypes={allOfferTypes}
                allCountriesFrom={allCountriesFrom}
                allCountriesTo={allCountriesTo}
                allCitiesFrom={allCitiesFrom}
                allCitiesTo={allCitiesTo}
                startDateSearch={startDateSearch}
                endDateSearch={endDateSearch}
                adultsSearch={adultsSearch}
                kidsSearch={kidsSearch}
              />
            </Container>
            <TotalPrice offerData={offer} />
          </SidebarWrapper>
          <ImagesPreview offerData={offer} />
        </Grid>
        {isMd ? (
          <SingleOfferSmallScreenSections offer={offer} />
        ) : (
          <TabsSection>
            {tabs.map((tab, index) => {
              return (
                <Tab
                  label={tab.toLowerCase()}
                  tabName={t(tab)}
                  key={tab.toLowerCase()}
                >
                  <div style={{ marginTop: '40px' }}></div>
                  <div id={`${tab.toLowerCase()}`} className="card">
                    {content[index]}
                  </div>
                </Tab>
              );
            })}
          </TabsSection>
        )}
      </div>
      <div
        style={{
          marginLeft: '24px',
        }}
      >
        <SimilarOffersSwiper similarOffers={similarOffers} />
      </div>
    </div>
  );
};

OfferDetails.getLayout = function getLayout(page) {
  return <MainLayout heroFilters={false}>{page}</MainLayout>;
};
export async function getServerSideProps({ locale, params }) {
  const heroBgImage = getRandomItem(heroImages);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('fetchSingleOffer', () =>
    fetchSingleOffer(params.offerId)
  );
  await queryClient.prefetchQuery('fetchSimilarOffers', () =>
    fetchSimilarOffers(params.offerDurationId)
  );

  return {
    props: {
      textContent: (
        await import(`../../../../locales/${locale}/translations.json`)
      ).default,
      heroBgImage,
      dehydratedState: dehydrate(queryClient),
      id: params.offerId,
      offerDurationId: params.offerDurationId,
    },
  };
}

export default OfferDetails;
