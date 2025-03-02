import { useTranslations } from 'next-intl';
import { Grid } from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';

import { StyledHeroContainer } from '@/components/Hero/HeroContainer/StyledHeroContainer';
import { StyledHeroTitle } from '@/components/Hero/HeroContainer/StyledHeroTitle';
import NavBar from '@/components/Hero/NavBar/NavBar';
import { FiltersHero } from '@/components/Hero/FiltersHero';
import { useFetchHomeData } from '@/hooks/homepage/useFetchHomeData';

export const Hero = ({ heroFilters = true, heroBgImage }) => {
  const t = useTranslations('Hero');
  const [allOfferTypes, setAllOfferTypes] = useState([]);
  const [allCountriesFrom, setAllCountriesFrom] = useState([]);
  const [allCountriesTo, setAllCountriesTo] = useState([]);
  const [allCitiesFrom, setAllCitiesFrom] = useState([]);
  const [allCitiesTo, setAllCitiesTo] = useState([]);

  const { data: offerTypes, isLoading: offerTypesLoad } = useFetchHomeData({
    onSuccess: (data) => {
      setAllOfferTypes(data?.offerTypes);
      setAllCountriesFrom(data?.countries_from);
      setAllCountriesTo(data?.countries_to);
      setAllCitiesFrom(data?.cities_from);
      setAllCitiesTo(data?.cities_to);
    },
  });

  return (
    <StyledHeroContainer
      size="heroSize"
      color="heroColor"
      utils="heroUtils"
      style="css"
      css={{
        position: 'relative',
        // '@media print': {
        //   d: 'none',
        // },
      }}
    >
      {heroFilters && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.3)',
              zIndex: 99,
            }}
          ></div>
          <Image
            src={heroBgImage?.imgSrc}
            alt="Hero background image"
            priority
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <NavBar />
      {!heroFilters && (
        <Grid.Container
          direction="column"
          alignItems="center"
          css={{ mb: '88px', mt: '74px' }}
        >
          <StyledHeroTitle h2 color="white" margin="1">
            {t('hero:title')}
          </StyledHeroTitle>
        </Grid.Container>
      )}
      {heroFilters && (
        <FiltersHero
          allOfferTypes={allOfferTypes}
          allCountriesFrom={allCountriesFrom}
          allCountriesTo={allCountriesTo}
          allCitiesFrom={allCitiesFrom}
          allCitiesTo={allCitiesTo}
        />
      )}
    </StyledHeroContainer>
  );
};
