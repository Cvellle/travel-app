import React, { useState } from 'react';
import { Modal } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import {
  StyledTopDestButton,
  StyledModal,
  StyledModalContainer,
  StyledText,
} from './StyledTopDesc';
import QueryForm from './QueryForm';

import * as SvgSprite from '@/assets/SvgSprite';

const OfferQueryModal = ({ offer, mainOffer }) => {
  const t = useTranslations('SingleOfferTopDesc');
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const [openModal, setOpenModal] = useState(false);

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div>
        <StyledTopDestButton size="applySize" color="orange" onClick={handler}>
          {t('Modal:title')}
        </StyledTopDestButton>
        <StyledModal
          fullScreen
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
          className="styled-modal-cont styled-modal-css"
          css={{
            maxWidth: '540px',
            '@sm': { width: '540px' },
          }}
        >
          <Modal.Body>
            <QueryForm
              setVisible={setVisible}
              setOpenModal={setOpenModal}
              offer={offer}
              mainOffer={mainOffer}
            />
          </Modal.Body>
        </StyledModal>
      </div>

      <div>
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={openModal}
          onClose={closeModalHandler}
        >
          <Modal.Body>
            <StyledModalContainer>
              <SvgSprite.QuerySuccess />
              <StyledText
                css={{
                  marginTop: '24px',
                  marginBottom: '14px',
                }}
                style="successModal"
              >
                {t('Modal:success')}
              </StyledText>
            </StyledModalContainer>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default OfferQueryModal;
