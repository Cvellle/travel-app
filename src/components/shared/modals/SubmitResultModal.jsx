import { Modal } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import * as SvgSprite from '@/assets/SvgSprite';
import {
  StyledModalContainer,
  StyledText,
} from '@/components/SinglePageTopDesc/StyledTopDesc';

export const SubmitResultModal = ({ modalOpenProp, setModalStateHandler }) => {
  const t = useTranslations();

  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={modalOpenProp.openModal}
        onClose={() => setModalStateHandler(false)}
      >
        <Modal.Body>
          <StyledModalContainer>
            {modalOpenProp.modalSuccess ? (
              <SvgSprite.QuerySuccess />
            ) : (
              <SvgSprite.ErrorIcon />
            )}
            <StyledText
              css={{
                marginTop: '24px',
                marginBottom: '14px',
              }}
              style="successModal"
            >
              {modalOpenProp.modalText}
            </StyledText>
          </StyledModalContainer>
        </Modal.Body>
      </Modal>
    </>
  );
};
