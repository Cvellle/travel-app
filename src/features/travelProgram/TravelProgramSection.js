import React from 'react';

import OfferSectionsWrapper from '@/components/OfferSectionsWrapper/OfferSectionsWrapper';
import SubsectionAccordion from '@/features/subsectionAccordion/components/SubsectionAccordion';

const TravelProgramSection = ({ offerData }) => {
  const itineraries = offerData.offer_included.itinerary;
  return (
    <OfferSectionsWrapper accordion={true} title="offer:travelProgram">
      {itineraries.map((itinerary) => (
        <SubsectionAccordion
          key={itinerary.title}
          title={itinerary.title}
          description={itinerary.description}
        />
      ))}
    </OfferSectionsWrapper>
  );
};

export default TravelProgramSection;
