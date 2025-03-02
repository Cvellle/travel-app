import { StyledText } from '@/components/OfferInfo/StyledText';

const OfferInfo = (props) => {
  if (props.isLastMinute)
    return (
      <StyledText
        variant="lastMinute"
        css={{ color: '#FFFFFF', textTransform: 'uppercase' }}
      >
        Last minute
      </StyledText>
    );
  if (props.isRecommended)
    return (
      <StyledText variant="ourRecommendation" css={{ color: '#FFFFFF' }}>
        Naša preporuka
      </StyledText>
    );
  else return null;
};

export default OfferInfo;
