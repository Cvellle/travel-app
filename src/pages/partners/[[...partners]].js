import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, Text } from '@nextui-org/react';

import { getRandomItem } from '@/utils/helpers';
import PartnersList from '@/components/Partners/PartnersList';
import Partner from '@/components/Partners/Partner';
import { agencyList } from '@/components/Partners/Data';
import { MainLayout } from '@/components/Layout';

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

const Partners = () => {
  const [loading, setLoading] = useState(true);
  const [partners, setPartners] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setPartners(router.query.partners ?? []);
      setLoading(false);
    }
  }, [router.isReady]);

  if (partners?.length === 2) {
    const countryFrom = partners[1];
    return (
      <Container
        css={{
          padding: '15px',
          margin: '0',
          maxWidth: 'initial',
          width: '100%',
          '@sm': {
            padding: '40px 60px 120px',
          },
        }}
      >
        <PartnersList countryFrom={countryFrom} agencyList={agencyList} />
      </Container>
    );
  } else if (partners?.length === 1) {
    const agency = agencyList.find(
      (agency) => agency.agencyPath === partners[0]
    );
    return (
      <Container
        css={{
          padding: '15px',
          margin: '0',
          maxWidth: 'initial',
          width: '100%',
          '@sm': {
            padding: '40px 60px 120px',
          },
        }}
      >
        <Text h1>Agencija {partners[0]}</Text>
        <Partner agency={agency} />
      </Container>
    );
  }

  if (loading) return <p>loading...</p>;

  return (
    <Container
      css={{
        padding: '15px',
        margin: '0',
        maxWidth: 'initial',
        width: '100%',
        '@sm': {
          padding: '40px 60px 120px',
        },
      }}
    >
      <PartnersList agencyList={agencyList} />
    </Container>
  );
};

Partners.getLayout = function getLayout(page) {
  return (
    <MainLayout heroFilters={false} sidebar={false}>
      {page}
    </MainLayout>
  );
};

export default Partners;

export async function getServerSideProps({ locale }) {
  const heroBgImage = getRandomItem(heroImages);
  return {
    props: {
      textContent: (
        await import(`../../../locales/${locale}/translations.json`)
      ).default,
      heroBgImage,
    },
  };
}
