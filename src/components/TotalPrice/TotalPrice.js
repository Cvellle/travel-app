import { Input } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { StyledLabel } from '../Hero/FiltersHero/StyledLabel';

const TotalPrice = ({ offerData }) => {
  const t = useTranslations('TotalPrice');

  const router = useRouter();
  const [adults, setAdults] = useState();
  const [kids, setKids] = useState();

  useEffect(() => {
    setAdults(router.query.adults ?? undefined);
    setKids(router.query.kids ?? undefined);
  }, [router.query]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <StyledLabel className="sidebar" css={{ mb: '8px', ml: 0 }}>
        {t('totalPrice:packagePrice')}
      </StyledLabel>
      <Input
        disabled
        placeholder={offerData?.offer_durations[0].price}
        aria-label="Package price"
      />

      <StyledLabel className="sidebar" css={{ mb: '8px', ml: 0, mt: '16px' }}>
        {t('totalPrice:total')}
      </StyledLabel>
      <Input
        disabled
        placeholder={Math.trunc(
          offerData?.offer_durations[0]?.price * adults +
            offerData?.offer_durations[0]?.price *
              kids *
              (1 - offerData?.kid_discount / 100)
        )}
        aria-label="Total price"
      />
    </div>
  );
};

export default TotalPrice;
