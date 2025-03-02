import React from 'react';

import { MainLayout } from '@/components/Layout';
import ErrorSubmit from '@/features/errorSubmit/components/ErrorSubmit';
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
];

const ErrorSubmitComponent = () => {
  return <ErrorSubmit />;
};

ErrorSubmitComponent.getLayout = function getLayout(page) {
  return <MainLayout heroFilters={false}>{page}</MainLayout>;
};

export default ErrorSubmitComponent;

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
