import { Grid } from '@nextui-org/react';
import { useState } from 'react';
import { Container, Link, Spacer, Text } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import Partner from './Partner';

import * as SvgSprite from '@/assets/SvgSprite';

const PartnersList = ({ countryFrom, agencyList }) => {
  const t = useTranslations('Partners');
  const [agencyData, setAgencyData] = useState(
    countryFrom
      ? agencyList.filter((country) => country.country === countryFrom)
      : agencyList
  );

  return (
    <Container css={{ padding: '0', margin: '0' }}>
      <Container
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          padding: '0 0 0 10px',
        }}
      >
        <Link href={`/partners/`} css={{ color: '#000' }}>
          {t('Partners:partners')}
        </Link>
        {countryFrom && (
          <>
            <SvgSprite.IconRightArrow />
            <Text
              css={{
                margin: '0',
                color: '#F5A524',
                textTransform: 'capitalize',
              }}
            >
              {countryFrom}
            </Text>
          </>
        )}
      </Container>
      <Spacer y={2} />
      <Text
        css={{
          textAlign: 'left',
          paddingLeft: '10px',
          fontWeight: '700',
          fontSize: '24px',
          lineHeight: '29px',
        }}
      >
        {t('Partners:agencies')}
      </Text>
      <Spacer y={0.5} />
      <Text
        css={{
          textAlign: 'left',
          paddingLeft: '10px',
          fontWeight: '300',
          fontSize: '20px',
          lineHeight: '24px',
          color: '#8E8E8E',
        }}
      >
        {t('Partners:agenciesList')}{' '}
        {countryFrom && (
          <>
            {t('Partners:agenciesListFrom')}{' '}
            <Text span css={{ textTransform: 'capitalize', color: 'inherit' }}>
              {countryFrom}
            </Text>
          </>
        )}
      </Text>
      <Spacer y={1.5} />
      <Grid.Container
        justify="center"
        css={{ width: '100%', margin: '0', gap: '20px' }}
      >
        {agencyData.map((agency) => (
          <Grid key={agency.id}>
            <Partner agency={agency} />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      textContent: (
        await import(`../../../locales/${locale}/translations.json`)
      ).default,
    },
  };
}

export default PartnersList;
