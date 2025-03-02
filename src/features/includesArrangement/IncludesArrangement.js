import React from 'react';

import OfferSectionsWrapper from '@/components/OfferSectionsWrapper/OfferSectionsWrapper';

const IncludesArrangement = ({ offerData }) => {
  const includes = offerData.offer_included.include;

  return (
    <OfferSectionsWrapper accordion={true} title="offer:include">
      <ul
        style={{
          listStyleType: 'disc',
        }}
      >
        {includes.map((include) => (
          <li key={include}>{include}</li>
        ))}
      </ul>
    </OfferSectionsWrapper>
  );
};

export default IncludesArrangement;
//
