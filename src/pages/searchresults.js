import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { QueryClient, dehydrate } from 'react-query';

import { fetchHomeData } from '@/features/homepage/api/fetchHomeData';
import { MainLayout } from '@/components/Layout';
import { SearchResultList } from '@/components/SearchResultList';
import { getRandomItem } from '@/utils/helpers';
import SelectDropdown from '@/components/Select/SelectDropdown';
import ResultsNumber from '@/components/ResultsNumber/ResultsNumber';
import {
  StyledSearchResultTopWrapper,
  StyledSearchResultTop,
} from '@/components/StyledComponents/SearchResultTop.styled';

const heroImages = [
  {
    imgSrc: '/images/hero/santorini.jpg',
    imgText:
      'Photo by <a href="https://unsplash.com/@dgw_unsplash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan</a> on <a href="https://unsplash.com/s/photos/santorini?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    imgSrc: '/images/hero/varadero.jpg',
    mgText:
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

export default function SearchResults() {
  const t = useTranslations('SearchResults');

  return (
    <div>
      <Head>
        <title>Putujemo.rs</title>
        <meta name="description" content="Najbolji sajt za putovanja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledSearchResultTopWrapper>
        <StyledSearchResultTop>
          <SelectDropdown
            options={[
              {
                type: '',
                order: '',
                name: t('Recommendation'),
              },
              { type: 'order_by', order: 'price_asc', name: t('Price:lowest') },
              {
                type: 'order_by',
                order: 'price_desc',
                name: t('Price:highest'),
              },
            ]}
            label={t('Sort:label')}
            css={{ marginRight: '2rem' }}
          />
          <ResultsNumber />
        </StyledSearchResultTop>
      </StyledSearchResultTopWrapper>
      <SearchResultList />
    </div>
  );
}

SearchResults.getLayout = function getLayout(page) {
  return (
    <MainLayout sidebar={true} heroFilters={false}>
      {page}
    </MainLayout>
  );
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
