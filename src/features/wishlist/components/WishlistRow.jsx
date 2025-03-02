import { Text } from '@nextui-org/react';

import {
  StyledModalRow,
  StyledOfferAvatar,
  StyledOfferTitleWrapper,
  StyledCheckmarkWrapper,
} from './FavouritesList.styled';

import {
  makeOfferFavourite,
  removeFavouriteOfferWithDurationId,
} from '@/features/wishlist';
import * as SvgIcons from '@/assets/SvgSprite';

export const WishlistRow = ({ list, offer, user, refetchUser, index }) => {
  const offerIsAlreadyInList = list.durationIds.includes(
    offer.offer_durations_id
  );

  return (
    <StyledModalRow
      className={`single__list ${offerIsAlreadyInList ? 'offer__liked' : ''}`}
      onClick={async () => {
        if (offerIsAlreadyInList) {
          await removeFavouriteOfferWithDurationId({
            favouriteListId: list.id,
            offerDurationId: offer.offer_durations_id,
          });
        } else {
          await makeOfferFavourite({
            favouriteListId: list.id,
            offerDurationId: offer.offer_durations_id,
          });
        }

        await refetchUser();
      }}
    >
      <StyledOfferAvatar
        text={list.name}
        index={index}
        listsNumber={user.favorite_lists.length}
      />
      <StyledOfferTitleWrapper>
        <Text weight="medium" className="offer__title">
          {list.name}
        </Text>
        {offerIsAlreadyInList && (
          <StyledCheckmarkWrapper>
            <SvgIcons.IconCheckmark />
          </StyledCheckmarkWrapper>
        )}
      </StyledOfferTitleWrapper>
    </StyledModalRow>
  );
};
