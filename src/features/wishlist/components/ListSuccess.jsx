import { useTranslations } from 'next-intl';

import * as SvgIcons from '@/assets/SvgSprite';

export const ListSuccess = ({ listSuccessData }) => {
  const t = useTranslations();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SvgIcons.IconCheckmark />
      <p style={{ textAlign: 'center' }}>
        {t('Wishlist.listSuccess_1')}&nbsp;
        <span style={{ fontWeight: 'bold' }}>{listSuccessData.listTitle}</span>
        &nbsp;{t('Wishlist.listSuccess_2')}&nbsp;
        <span style={{ fontWeight: 'bold' }}>
          &quot;{`${listSuccessData.offerTitle}`}&quot;
        </span>
        &nbsp;{t('Wishlist.listSuccess_3')}.
      </p>
    </div>
  );
};
