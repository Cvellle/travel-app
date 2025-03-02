import React from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import AccommodationImagesSwiper from '@/features/accommodation/components/accommodationImagesSwiper/AccommodationImagesSwiper';
import AccommodationCardContent from '@/features/accommodation/components/accommodationCardContent/AccommodationCardContent';
import OfferSectionsWrapper from '@/components/OfferSectionsWrapper/OfferSectionsWrapper';
import AccommodationNotes from '@/features/accommodation/components/accommodationNotes/AccommodationNotes';
import { StyledCardWrapper } from '@/features/accommodation/components/accommodationOfferSection/StyledCardWrapper';
import MultiAccommodationDetails from '@/features/accommodation/components/multiAccommodationDetails/MultiAccommodationDetails';

const AccommodationOfferSection = ({ offerData }) => {
  const isMd = useMediaQuery(960);
  const lodgings = offerData?.offer_included?.lodgings;

  let multiAccommodations;
  if (lodgings.length > 1) {
    multiAccommodations = true;
  } else {
    multiAccommodations = false;
  }

  return (
    <OfferSectionsWrapper accordion={true} title="offer:accommodation">
      {lodgings.map((lodging) => (
        <div
          key={lodging.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '25px',
          }}
        >
          <StyledCardWrapper
            css={{
              flexWrap: 'wrap',
              marginBottom: '25px',
              '@sm': { flexWrap: 'nowrap', marginBottom: '35px' },
            }}
          >
            <AccommodationImagesSwiper
              images={lodging.images}
              accommodationName={lodging.title}
            />
            <AccommodationCardContent
              accommodationDetails={offerData?.offer_details}
              accommodation={lodging}
              multiAccommodations={multiAccommodations}
            />
          </StyledCardWrapper>
          {isMd && (
            <div
              style={{
                height: '1px',
                background: 'black',
                margin: '0px 17vw 25px 17vw',
              }}
            ></div>
          )}
        </div>
      ))}
      {multiAccommodations && (
        <MultiAccommodationDetails
          accommodationDetails={offerData?.offer_details}
        />
      )}

      <AccommodationNotes notes={offerData?.offer_included} />
    </OfferSectionsWrapper>
  );
};

export default AccommodationOfferSection;
