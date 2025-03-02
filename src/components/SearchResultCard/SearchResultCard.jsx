import { useState } from 'react';
import Link from 'next/link';
import { Card, Grid, Text, Image } from '@nextui-org/react';

import * as SvgSprite from '@/assets/SvgSprite';
import OfferInfo from '@/components/OfferInfo/OfferInfo';
import { Like, FavouritesList } from '@/features/wishlist';
import { StyledCard } from '@/components/SearchResultCard/StyledCard';
import { StyledRow } from '@/components/SearchResultCard/StyledRow';
import { StyledCardDivider } from '@/components/SearchResultCard/StyledCardDivider';
import { StyledText } from '@/components/SearchResultCard/StyledText';
import { StyledCardFooter } from '@/components/SearchResultCard/StyledCardFooter';
import { StyledGridContainer } from '@/components/SearchResultCard/StyledGridContainer';
import { CardPrice } from '@/components/CardPrice';

export const SearchResultCard = ({ item, index }) => {
  const [favouritesModalState, setFavouritesModalState] = useState('hidden');

  return (
    <Grid css={{ marginTop: index > 0 ? '32px' : 0 }}>
      <Link
        href={`/details/${item.offer_id}/${item.offer_durations_id}${window.location.search}`}
      >
        <StyledCard variant="card" isPressable>
          <StyledRow>
            <StyledCard variant="image">
              <Card.Header
                css={{
                  position: 'absolute',
                  zIndex: 1,
                  top: 10,
                  width: '100%',
                  justifyContent: 'flex-end',
                }}
              >
                <Like setFavouritesModalState={setFavouritesModalState} />
                <FavouritesList
                  favouritesModalState={favouritesModalState}
                  setFavouritesModalState={setFavouritesModalState}
                  offer={item}
                />
              </Card.Header>
              <StyledText className="nextui-image">
                <Image
                  src={item.offer_images[0]}
                  alt={item.country_to}
                  css={{
                    objectFit: 'cover',
                    width: '376px',
                    height: '220px',
                    '@sm': {
                      width: '439px',
                      height: '298px',
                    },
                  }}
                />
              </StyledText>
            </StyledCard>
            <StyledCardFooter
              css={{
                height: '220px',
                '@sm': {
                  height: '298px',
                },
              }}
            >
              <StyledGridContainer variant="container">
                <StyledGridContainer
                  variant="spaceBtw"
                  css={{
                    wrap: 'nowrap',
                    marginBottom: 0,
                    '@sm': { marginBottom: '-16px' },
                  }}
                >
                  <StyledText variant="city">{item.city_to}</StyledText>
                  <StyledText variant="logo">
                    <Image
                      src={item.travel_agency_logo}
                      width="75px"
                      height="45px"
                      alt="Agency logo"
                    />
                  </StyledText>
                </StyledGridContainer>
                <StyledGridContainer variant="location">
                  <SvgSprite.IconLocationPin />
                  <StyledText variant="country">{item.country_to}</StyledText>
                </StyledGridContainer>
                <StyledCardDivider css={{ background: '#000000' }} />
                <StyledGridContainer variant="spaceBtw" wrap="nowrap">
                  <StyledText variant="text" css={{ marginBottom: '11px' }}>
                    {item.description}
                  </StyledText>
                  <OfferInfo
                    isLastMinute={item.is_last_minute}
                    isRecommended={item.is_recommended}
                  />
                </StyledGridContainer>
                <StyledGridContainer variant="spaceBtwRev" wrap="nowrap">
                  <StyledGridContainer variant="icons">
                    <StyledText variant="transportType">
                      {item.transport_type === 'AIRPLANE' ? (
                        <SvgSprite.IconAirplane />
                      ) : item.transport_type === 'BUS' ? (
                        <SvgSprite.IconBus />
                      ) : item.transport_type === 'BOAT' ? (
                        <SvgSprite.IconBoat />
                      ) : item.transport_type === 'NO_TRANSPORT' ? (
                        <SvgSprite.IconCar />
                      ) : null}
                    </StyledText>

                    <StyledText variant="serviceType">
                      {item.service_type === 'OVERNIGHT' ? (
                        <SvgSprite.IconBed />
                      ) : item.service_type === 'BED_AND_BREAKFAST' ? (
                        <SvgSprite.IconCoffee />
                      ) : item.service_type === 'HALF_BOARD' ? (
                        <SvgSprite.IconHalfBoard />
                      ) : item.service_type === 'FULL_ACCOMMODATION' ? (
                        <SvgSprite.IconFullAccommodation />
                      ) : item.service_type === 'ALL_INCLUSIVE' ? (
                        <SvgSprite.IconAllInclusive />
                      ) : null}
                    </StyledText>
                  </StyledGridContainer>
                  <StyledGridContainer variant="priceContainer" wrap="nowrap">
                    <CardPrice price={Math.trunc(item.offer_duration_price)} />
                  </StyledGridContainer>
                </StyledGridContainer>
              </StyledGridContainer>
            </StyledCardFooter>
          </StyledRow>
        </StyledCard>
      </Link>
    </Grid>
  );
};
