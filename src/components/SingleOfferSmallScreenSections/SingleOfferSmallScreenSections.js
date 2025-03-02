import React from 'react';

import AccommodationOfferSection from '@/features/accommodation/components/AccommodationOfferSection';
import AdditionalExcursionsSection from '@/features/additionalExcursions/components/AdditionalExcursionsSection';
import ExcludesArrangement from '@/features/excludesArrangement/ExcludesArrangement';
import IncludesArrangement from '@/features/includesArrangement/IncludesArrangement';
import OtherNotesSection from '@/features/otherNotes/OtherNotesSection';
import TravelProgramSection from '@/features/travelProgram/TravelProgramSection';
import { StyledComponentsWrapper } from '@/components/SingleOfferSmallScreenSections/StyledComponentsWrapper';

const SingleOfferSmallScreenSections = ({ offer }) => {
  return (
    <div>
      <StyledComponentsWrapper>
        <TravelProgramSection offerData={offer} />
      </StyledComponentsWrapper>
      <StyledComponentsWrapper>
        <IncludesArrangement offerData={offer} />
      </StyledComponentsWrapper>
      <StyledComponentsWrapper>
        <ExcludesArrangement offerData={offer} />
      </StyledComponentsWrapper>
      <StyledComponentsWrapper>
        <AccommodationOfferSection offerData={offer} />
      </StyledComponentsWrapper>
      <StyledComponentsWrapper>
        <AdditionalExcursionsSection offerData={offer} />
      </StyledComponentsWrapper>
      <StyledComponentsWrapper>
        <OtherNotesSection offerData={offer} />
      </StyledComponentsWrapper>
    </div>
  );
};

export default SingleOfferSmallScreenSections;
