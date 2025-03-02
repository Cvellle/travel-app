import { Container } from '@nextui-org/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import {
  StyledTopDestButton,
  TopDescContainer,
  StyledText,
  StyledLink,
} from './StyledTopDesc';
import OfferQueryModal from './OfferQueryModal';

import ConvertDate from '@/components/SinglePageTopDesc/ConvertDate';
import * as SvgSprite from '@/assets/SvgSprite';
import OfferSectionsWrapper from '@/components/OfferSectionsWrapper/OfferSectionsWrapper';
import TravelAgencyModal from '@/features/travelAgency/TravelAgencyModal';

const TopDescription = ({ offerData, offerDurationId, id }) => {
  const t = useTranslations('SingleOfferTopDesc');
  const [readMore, setReadMore] = useState(false);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const mainOffer = offerData?.offer_durations?.find(
    (offer) => offer.id === offerDurationId
  );

  const otherOffers = offerData?.offer_durations?.filter((offer) => {
    return offer.id !== offerDurationId;
  });

  return (
    <OfferSectionsWrapper accordion={false}>
      <TopDescContainer>
        <Container
          css={{
            padding: '0',
          }}
        >
          <StyledText style="offerName">{offerData.name}</StyledText>
          <StyledText style="cityTo">{offerData?.city_to?.name}</StyledText>
          <StyledText style="countryTo">
            <SvgSprite.LocationPin />
            {offerData?.country_to?.name}
          </StyledText>
        </Container>
        <Container
          css={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '0',
          }}
        >
          <Image
            src={offerData?.travel_agency?.logo_url}
            alt="img"
            width={100}
            height={100}
            objectFit="contain"
          />
        </Container>
      </TopDescContainer>
      <StyledText
        css={{
          marginLeft: '0px',
          marginBottom: '20px',
        }}
        style="moreLess"
      >
        {readMore
          ? offerData.description
          : `${offerData?.description?.substring(0, 400)}...`}
        <StyledTopDestButton
          color="transparent"
          size="moreButton"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? (
            <StyledText
              css={{
                color: '#F5A524',
              }}
              style="less"
            >
              {t('TopDesc:less')}
            </StyledText>
          ) : (
            <StyledText
              css={{
                color: '#F5A524',
              }}
              style="more"
            >
              {t('TopDesc:more')}
            </StyledText>
          )}
        </StyledTopDestButton>
      </StyledText>

      <StyledText
        css={{
          marginLeft: '0px',
        }}
        style="agency"
      >
        {t('TopDesc:agency')}{' '}
        <StyledLink
          css={{
            color: '#F5A524',
          }}
          style="agencyLink"
          onClick={handler}
        >
          “{offerData?.travel_agency?.name}”
        </StyledLink>{' '}
        {`, ${offerData?.travel_agency?.country}.`}
      </StyledText>
      {visible && (
        <TravelAgencyModal
          visibleModal={visible}
          SetIfVisible={setVisible}
          travelAgencyInfo={offerData?.travel_agency}
        />
      )}
      <TopDescContainer
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginTop: '20px',
          '@sm': {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            padding: '0',
          },
        }}
      >
        <Container
          css={{
            padding: '0',
            margin: '0 0 30px 0',
            '@sm': { margin: '0' },
          }}
        >
          <StyledText style="mainDate">
            {`${t('TopDesc:tripDate')}:`}
            &nbsp;
            <span>
              {`${' '} ${ConvertDate(mainOffer?.start_date)} - ${ConvertDate(
                mainOffer?.end_date
              )}`}
            </span>
          </StyledText>
          <StyledText style="otherDate">
            {!!otherOffers.length && t('TopDesc:restDates')}{' '}
            {otherOffers?.map((date) => {
              return (
                <StyledLink
                  href={`/details/${id}/${date.id}`}
                  style="otherDatesLink"
                  key={date.id}
                >
                  {`${ConvertDate(date.start_date)} - ${ConvertDate(
                    date.end_date
                  )} ,`}
                </StyledLink>
              );
            })}
          </StyledText>
        </Container>
        <div>
          <OfferQueryModal offer={offerData} mainOffer={mainOffer} />
        </div>
      </TopDescContainer>
    </OfferSectionsWrapper>
  );
};

export default TopDescription;
