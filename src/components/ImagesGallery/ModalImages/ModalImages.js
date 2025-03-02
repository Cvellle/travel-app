import React from 'react';
import { Modal } from '@nextui-org/react';

import ImagesSwiper from '../ImagesSwiper/ImagesSwiper';

import { StyledModalBody } from '@/components/ImagesGallery/ModalImages/StyledModalBody';

const ModalImages = ({ visibleModal, SetIfVisible, images, title }) => {
  const closeHandler = () => {
    SetIfVisible(false);
  };

  return (
    <div>
      <Modal
        fullScreen
        closeButton
        aria-labelledby="modal-title"
        open={visibleModal}
        onClose={closeHandler}
      >
        <StyledModalBody>
          <ImagesSwiper images={images} />
        </StyledModalBody>
      </Modal>
    </div>
  );
};

export default ModalImages;
