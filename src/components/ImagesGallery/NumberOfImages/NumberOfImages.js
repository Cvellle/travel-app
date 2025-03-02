import React from 'react';
import { Text } from '@nextui-org/react';
import { FaRegImages } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { StyledGridContainer } from '@/components/ImagesGallery/NumberOfImages/StyledGridContainer';

const NumberOfImages = ({ imagesNum, imagesShowed }) => {
  return (
    <StyledGridContainer
      css={{
        width: 'auto',
      }}
    >
      <IconContext.Provider value={{ color: 'white' }}>
        <FaRegImages />
      </IconContext.Provider>
      <Text css={{ color: 'white', margin: '0px 0px 0px 10px' }}>{`+ ${
        imagesNum - imagesShowed
      }`}</Text>
    </StyledGridContainer>
  );
};

export default NumberOfImages;
