import { styled, Container } from '@nextui-org/react';

export const StyledContainer = styled(Container, {
  // margin: 0,
  // padding: 0,
  variants: {
    variant: {
      sidebar: {
        alignSelf: 'flex-start',
        flexBasis: 'fit-content',
        // border: '1px solid black',
        // minWidth: '342px',
        // minHeight: '100vh',
      },
      children: {
        // flexBasis: 'fit-content',
        // maxWidth: '1024px',
        backgroundColor: '#f8f8f8',
      },
    },
  },
});
