import React, { useMemo } from 'react';
import { Modal, Text } from '@nextui-org/react';
import dynamic from 'next/dynamic';

import { StyledModalBody } from '@/features/accommodation/components/accommodationModal/StyledModalBody';
import { StyledIconTitleWrapper } from '@/features/accommodation/components/accommodationModal/StyledIconTitleWrapper';
import * as SvgSprite from '@/assets/SvgSprite';

const ModalMap = ({ visibleModal, SetIfVisible, location, locationName }) => {
  const closeHandler = () => {
    SetIfVisible(false);
  };

  const Map = useMemo(
    () =>
      dynamic(
        () =>
          import(
            '@/features/accommodation/components/accommodationMap/AccommodationMap'
          ),
        {
          loading: () => <p>A map is loading</p>,
          ssr: false,
        }
      ),
    []
  );

  return (
    <div>
      <Modal
        fullScreen
        closeButton
        aria-labelledby="modal-title"
        open={visibleModal}
        onClose={closeHandler}
        css={{
          padding: '39px 0px',
          '@sm': {
            padding: '50px',
          },
        }}
      >
        <StyledModalBody>
          <StyledIconTitleWrapper>
            <SvgSprite.IconLocationPin />
            <Text b css={{ margin: '0px 0px 0px 10px' }}>
              {locationName}
            </Text>
          </StyledIconTitleWrapper>

          <Map location={location} locationName={locationName} />
        </StyledModalBody>
      </Modal>
    </div>
  );
};

export default ModalMap;
