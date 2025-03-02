import { StyledHrDividerWrapper } from './HrDivider.styled';

export const HrDivider = ({ text }) => {
  return (
    <StyledHrDividerWrapper>
      <span>{text}</span>
    </StyledHrDividerWrapper>
  );
};
