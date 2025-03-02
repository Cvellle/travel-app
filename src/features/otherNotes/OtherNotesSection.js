import React from 'react';

import OfferSectionsWrapper from '@/components/OfferSectionsWrapper/OfferSectionsWrapper';
import SubsectionAccordion from '@/features/subsectionAccordion/components/SubsectionAccordion';

const OtherNotesSection = ({ offerData }) => {
  const notes = offerData.offer_included.other;
  return (
    <OfferSectionsWrapper accordion={true} title="offer:notes">
      {notes.map((note) => (
        <SubsectionAccordion
          key={note.title}
          title={note.title}
          description={note.description}
        />
      ))}
    </OfferSectionsWrapper>
  );
};

export default OtherNotesSection;
