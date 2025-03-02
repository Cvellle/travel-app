import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { Grid } from '@nextui-org/react';
import React from 'react';
import Link from 'next/link';

import { StyledAboutContainer } from './StyledComponents/StyledAboutContainer';
import { InnerAboutContainer } from './StyledComponents/InnerAboutContainer';
import { StyledAboutGeography } from './StyledComponents/StyledAboutGeography';
import Subscribe from './Subscribe';
import { StyeledHeading } from './StyledComponents/StyeledHeading';
import { ContactLink } from './StyledComponents/ContactLink';

export default function About() {
  // hooks
  const t = useTranslations('About');

  return (
    <StyledAboutContainer>
      <Head>
        <title>Putujemo.rs</title>
        <meta name="description" content="Najbolji sajt za putovanja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerAboutContainer
        css={{
          justifyContent: 'center',
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Grid.Container
          css={{
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <Grid
            xs={12}
            css={{
              mb: '2rem',
              height: '70px',
              p: '0 2rem',
              flexWrap: 'wrap',
            }}
          >
            <StyeledHeading
              css={{
                d: 'flex',
                alignItems: 'center',
              }}
            >
              {t('about:heading')}
            </StyeledHeading>
          </Grid>
          <Grid.Container
            css={{
              padding: '3rem 2rem',
              my: '2rem',
            }}
          >
            <Grid xs={12} md={3}>
              <h3
                css={{
                  fontSize: '20px',

                  '@smMax': {
                    mb: '50px',
                  },
                }}
              >
                {t('about:about_us:heading')}
              </h3>
            </Grid>
            <Grid xs={12} md={9} css={{ pt: '5px' }}>
              {t('about:about_us:body')}
            </Grid>
          </Grid.Container>
          <StyledAboutGeography
            css={{
              d: 'flex',
              justifyContent: 'center',
              mx: 'auto',
              my: '2rem',
              alignItems: 'center',
              p: '4rem',
              backgroundImage: `url('images/about/geo.jpg')`,
            }}
          >
            {t('about:geography')}
          </StyledAboutGeography>
          <Grid.Container
            css={{
              padding: '3rem 2rem',
              my: '2rem',
            }}
          >
            <Grid xs={12} md={3}>
              <h3
                css={{
                  fontSize: '20px',

                  '@smMax': {
                    mb: '50px',
                  },
                }}
              >
                {t('about:value:heading')}
              </h3>
            </Grid>
            <Grid xs={12} md={9} css={{ pt: '5px' }}>
              {t('about:value:body')}
            </Grid>
          </Grid.Container>
          <Grid.Container
            css={{
              padding: '3rem 2rem',
              my: '2rem',
            }}
          >
            <Grid xs={12} md={3}>
              <h3
                css={{
                  fontSize: '20px',

                  '@smMax': {
                    mb: '50px',
                  },
                }}
              >
                {t('about:company:heading')}
              </h3>
            </Grid>
            <Grid xs={12} md={9} css={{ pt: '5px', flexWrap: 'wrap' }}>
              {t(`about:company:body.first`)}
              &nbsp;
              <Link
                href={'/contact'}
                css={{ d: 'inline-flex', margin: 0, lineHeight: 'unset' }}
              >
                <ContactLink
                  css={{ d: 'inline-flex', margin: 0, lineHeight: 'unset' }}
                >
                  {' '}
                  {t(`about:company:body.link`)}
                </ContactLink>
              </Link>
              .&nbsp;
              {t(`about:company:body.second`)}
            </Grid>
          </Grid.Container>
        </Grid.Container>
        <Subscribe />
        <Grid.Container>
          <Grid xs={12} css={{ p: '3vw' }}>
            <h3>{t(`about:official.data`)}</h3>
          </Grid>
          <Grid
            xs={12}
            md={3}
            css={{ d: 'flex', flexDirection: 'column', pl: '3vw', mt: '1rem' }}
          >
            <b css={{ d: 'flex', justifyContent: 'flex-start' }}>
              {t(`about:official.name`)}
            </b>
            <p css={{ d: 'flex', justifyContent: 'flex-start' }}>
              TravelApp DOO
            </p>
          </Grid>
          <Grid
            xs={12}
            md={3}
            css={{ d: 'flex', flexDirection: 'column', pl: '3vw', mt: '1rem' }}
          >
            <b css={{ d: 'flex', justifyContent: 'flex-start' }}>
              {t(`about:official.short`)}
            </b>
            <p css={{ d: 'flex', justifyContent: 'flex-start' }}>TravelApp</p>
          </Grid>
          <Grid
            xs={12}
            md={3}
            css={{ d: 'flex', flexDirection: 'column', pl: '3vw', mt: '1rem' }}
          >
            <b css={{ d: 'flex', justifyContent: 'flex-start' }}>
              {t(`about:official.place`)}
            </b>
            <p css={{ d: 'flex', justifyContent: 'flex-start' }}>
              Timocka 2, Belgrade
            </p>
          </Grid>
          <Grid
            xs={12}
            md={3}
            css={{ d: 'flex', flexDirection: 'column', pl: '3vw', mt: '1rem' }}
          >
            <b css={{ d: 'flex', justifyContent: 'flex-start' }}>
              {t(`about:official.email`)}
            </b>
            <p css={{ d: 'flex', justifyContent: 'flex-start' }}>
              office@app.travel
            </p>
          </Grid>
          <Grid
            xs={12}
            md={3}
            css={{ d: 'flex', flexDirection: 'column', pl: '3vw', mt: '1rem' }}
          >
            <b css={{ d: 'flex', justifyContent: 'flex-start' }}>
              {t(`about:official.phone`)}
            </b>
            <p css={{ d: 'flex', justifyContent: 'flex-start' }}>
              +381 11 123456
            </p>
          </Grid>
          <Grid
            xs={12}
            md={3}
            css={{ d: 'flex', flexDirection: 'column', pl: '3vw', mt: '1rem' }}
          >
            <b css={{ d: 'flex', justifyContent: 'flex-start' }}>
              {t(`about:official.code`)}
            </b>
            <p css={{ d: 'flex', justifyContent: 'flex-start' }}>123456789</p>
          </Grid>
          <Grid
            xs={12}
            md={3}
            css={{ d: 'flex', flexDirection: 'column', pl: '3vw', mt: '1rem' }}
          >
            <b css={{ d: 'flex', justifyContent: 'flex-start' }}>
              {t(`about:official.number`)}
            </b>
            <p css={{ d: 'flex', justifyContent: 'flex-start' }}>
              200-100000-30
            </p>
          </Grid>

          {/* <Grid
            xs={12}
            md={3}
            css={{ d: 'flex', flexDirection: 'column', pl: '3vw', mt: '1rem' }}
          >
            <b css={{ d: 'flex', justifyContent: 'flex-start' }}>
              {t(`about:official.id_number`)}
            </b>
            <p css={{ d: 'flex', justifyContent: 'flex-start' }}>
              TravelApp DOO
            </p>
          </Grid> */}

          <Grid
            xs={12}
            md={3}
            css={{ d: 'flex', flexDirection: 'column', pl: '3vw', mt: '1rem' }}
          >
            <b css={{ d: 'flex', justifyContent: 'flex-start' }}>
              {t(`about:official.pdv`)}
            </b>
            <p css={{ d: 'flex', justifyContent: 'flex-start' }}>Da</p>
          </Grid>
          <Grid
            xs={12}
            md={3}
            css={{ d: 'flex', flexDirection: 'column', pl: '3vw', mt: '1rem' }}
          >
            <b css={{ d: 'flex', justifyContent: 'flex-start' }}>
              {t(`about:official.bill`)}
            </b>
            <p css={{ d: 'flex', justifyContent: 'flex-start' }}>
              200-100000-30
            </p>
          </Grid>
          <Grid
            xs={12}
            md={3}
            css={{ d: 'flex', flexDirection: 'column', pl: '3vw', mt: '1rem' }}
          >
            <b css={{ d: 'flex', justifyContent: 'flex-start' }}>
              {t(`about:official.bank`)}
            </b>
            <p css={{ d: 'flex', justifyContent: 'flex-start' }}>OTP banka</p>
          </Grid>
          <Grid
            xs={12}
            md={3}
            css={{ d: 'flex', flexDirection: 'column', pl: '3vw', mt: '1rem' }}
          >
            <b css={{ d: 'flex', justifyContent: 'flex-start' }}>
              {t(`about:official.id_number`)}
            </b>
            <p css={{ d: 'flex', justifyContent: 'flex-start' }}>01233456</p>
          </Grid>
          <Grid
            xs={12}
            md={3}
            css={{ d: 'flex', flexDirection: 'column', pl: '3vw', mt: '1rem' }}
          >
            <b css={{ d: 'flex', justifyContent: 'flex-start' }}>
              {t(`about:official.owner`)}
            </b>
            <p css={{ d: 'flex', justifyContent: 'flex-start' }}>
              Oliver Vuković
            </p>
          </Grid>
        </Grid.Container>
      </InnerAboutContainer>
    </StyledAboutContainer>
  );
}
