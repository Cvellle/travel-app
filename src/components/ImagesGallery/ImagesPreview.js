import React, { useState } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import NumberOfImages from '@/components/ImagesGallery/NumberOfImages/NumberOfImages';
import ModalImages from '@/components/ImagesGallery/ModalImages/ModalImages';
import { StyledGridContainer } from '@/components/ImagesGallery/ImagesPreview/StyledGridContainer';
import { StyledGrid } from '@/components/ImagesGallery/ImagesPreview/StyledGrid';
import { StyledImage } from '@/components/ImagesGallery/ImagesPreview/StyledImage';
import MobileImagesSwiper from '@/components/ImagesGallery/MobileImagesSwiper/MobileImagesSwiper';

const ImagesPreview = ({ offerData }) => {
  const isMd = useMediaQuery(960);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  return (
    <>
      {isMd ? (
        <MobileImagesSwiper
          images={offerData.offer_images}
          title={offerData?.city_to?.name}
        />
      ) : (
        <StyledGridContainer
          fluid
          style="main"
          direction="row"
          wrap="nowrap"
          onClick={handler}
        >
          {visible && (
            <ModalImages
              visibleModal={visible}
              SetIfVisible={setVisible}
              images={offerData?.offer_images}
            />
          )}
          <StyledGrid style="main">
            <StyledImage
              src={offerData.offer_images[0]}
              alt="Default Image"
              objectFit="cover"
              height={670}
              style="bigScreen"
            />
          </StyledGrid>
          <StyledGridContainer
            direction="column"
            style="imgHolder"
            css={{ width: '50%' }}
          >
            <StyledGrid style="imgHolder">
              <StyledImage
                src={offerData.offer_images[1]}
                alt="Default Image"
                objectFit="cover"
                height={330}
                style="bigScreen"
              />
            </StyledGrid>
            <StyledGrid style="imgHolderTwo">
              <StyledImage
                src={offerData.offer_images[2]}
                alt="Default Image"
                objectFit="cover"
                height={330}
                style="bigScreen"
              />
              <NumberOfImages
                imagesNum={offerData.offer_images.length}
                imagesShowed={3}
              />
            </StyledGrid>
          </StyledGridContainer>
        </StyledGridContainer>
      )}
    </>
  );
};

export default ImagesPreview;
