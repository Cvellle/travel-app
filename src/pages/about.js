import Head from 'next/head';

import { MainLayout } from '@/components/Layout';
import About from '@/features/about/components/About';
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

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>Putujemo.rs</title>
        <meta name="description" content="Najbolji sajt za putovanja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </div>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return <MainLayout heroFilters={false}>{page}</MainLayout>;
};

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
