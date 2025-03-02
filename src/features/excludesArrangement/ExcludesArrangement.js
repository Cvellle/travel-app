import React from 'react';

import OfferSectionsWrapper from '@/components/OfferSectionsWrapper/OfferSectionsWrapper';

const ExcludesArrangement = ({ offerData }) => {
  const excludes = offerData.offer_included.exclude;
  return (
    <OfferSectionsWrapper accordion={true} title="offer:exclude">
      <ul
        style={{
          listStyleType: 'disc',
        }}
      >
        {excludes.map((exclude) => (
          <li key={exclude}>{exclude}</li>
        ))}
      </ul>
    </OfferSectionsWrapper>
  );
};

export default ExcludesArrangement;
