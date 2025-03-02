import React from 'react';
import { Modal, Image, Text } from '@nextui-org/react';

import { StyledModalBody } from '@/components/ImagesGallery/ModalMobileImages/StyledModalBody';

const ModalMobileImages = ({ visibleModal, SetIfVisible, image, title }) => {
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
          <Text
            b
            css={{
              margin: '0px 0px 10px 0px',
              paddingBottom: '10px',
              borderBottom: '2px solid #F5BC94',
            }}
          >
            {title}
          </Text>
          <Image
            src={image}
            alt="Default Image"
            objectFit="cover"
            css={{
              minHeight: '500px',
            }}
          />
        </StyledModalBody>
      </Modal>
    </div>
  );
};

export default ModalMobileImages;
