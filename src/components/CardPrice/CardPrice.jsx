import { useTranslations } from 'next-intl';

import { StyledCardPrice } from './CardPrice.styled';

export const CardPrice = ({ price }) => {
  const t = useTranslations();

  return (
    <StyledCardPrice>
      <p className="card__price__text">{t('General.price:from')}</p>{' '}
      <h2 className="card__price__value">{price}&nbsp;&euro;</h2>
    </StyledCardPrice>
  );
};
