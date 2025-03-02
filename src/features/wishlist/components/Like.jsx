import { StyledButton } from './Like.styled';

import * as SvgSprite from '@/assets/SvgSprite';

export const Like = ({ setFavouritesModalState }) => {
  return (
    <>
      <StyledButton
        onPress={() => {
          setFavouritesModalState('visible');
        }}
        css={{ minWidth: 'unset', background: 'rgba(0,0,0,0)' }}
      >
        <SvgSprite.IconUnlike />
      </StyledButton>
    </>
  );
};
