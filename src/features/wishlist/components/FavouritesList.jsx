import { useState } from 'react';
import { Modal, Text } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import { AddNewList } from './AddNewList';
import { ListSuccess } from './ListSuccess';
import { WishlistRow } from './WishlistRow';
import {
  StyledTransparentButton,
  StyledAddButton,
  StyledModalRow,
} from './FavouritesList.styled';

import { useAuth } from '@/providers/authProvider';
import * as SvgIcons from '@/assets/SvgSprite';

export const FavouritesList = ({
  favouritesModalState,
  setFavouritesModalState,
  offer,
}) => {
  const [activeStep, setActiveStep] = useState('displayList');
  const [listSuccessData, setListSuccessData] = useState(null);

  const { user, refetchUser } = useAuth();

  const t = useTranslations();

  return (
    <Modal
      scroll
      aria-labelledby="modal-title"
      open={favouritesModalState === 'visible'}
      className={'modal__favourite-list'}
      css={{
        paddingBottom: '12px',
        width: '90%',
        maxWidth: '500px',
        margin: 'auto',
        '::-webkit-scrollbar-track': {
          cursor: 'pointer',
        },
        '::-webkit-scrollbar': {
          width: '6px',
          borderRadius: '4px',
          cursor: 'pointer',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#f5a524',
          borderRadius: '4px',
          width: '8px',
          height: '100px',
          cursor: 'pointer',
        },
        '@sm': {
          width: '500px',
        },
      }}
    >
      <Modal.Header justify="space-between">
        {activeStep !== 'displayList' && (
          <StyledTransparentButton onClick={() => setActiveStep('displayList')}>
            <SvgIcons.IconArrowLeft />
          </StyledTransparentButton>
        )}
        <Text id="modal-title" size={20} weight="medium">
          {t('Wishlist.addToWishlist')}
        </Text>
        <StyledTransparentButton
          type="button"
          onClick={() => setFavouritesModalState('hidden')}
        >
          <SvgIcons.IconClose />
        </StyledTransparentButton>
      </Modal.Header>

      <Modal.Body css={{ paddingInline: 0 }}>
        {activeStep === 'displayList' && (
          <>
            <StyledModalRow
              className="single__list"
              onClick={() => setActiveStep('createNewList')}
            >
              <StyledAddButton>
                <SvgIcons.IconPlus />
              </StyledAddButton>
              <Text weight="medium">
                <StyledTransparentButton>
                  {t('Wishlist.createListAddOffer')}
                </StyledTransparentButton>
              </Text>
            </StyledModalRow>
            {!!user.favorite_lists.length &&
              user.favorite_lists.map((list, index) => {
                return (
                  <WishlistRow
                    key={list.id}
                    list={list}
                    offer={offer}
                    user={user}
                    refetchUser={refetchUser}
                    index={index}
                  />
                );
              })}
          </>
        )}

        {activeStep === 'createNewList' && (
          <AddNewList
            offer={offer}
            setListSuccessData={setListSuccessData}
            setActiveStep={setActiveStep}
            refetchUser={refetchUser}
          />
        )}

        {activeStep === 'listSuccess' && (
          <ListSuccess listSuccessData={listSuccessData} />
        )}
      </Modal.Body>
    </Modal>
  );
};
