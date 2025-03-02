import { styled, Grid } from '@nextui-org/react';

export const StyledGrid = styled(Grid, {
  variants: {
    style: {
      navCss: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        // '@md': {
        //   flexDirection: 'row',
        // },
      },
      navMob: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
      },
      iconLabelFilterCss: {
        display: 'flex',
        alignItems: 'center',
        mb: '10px',
      },
      inputFilterCss: {
        display: 'flex',
        alignItems: 'center',
        mb: '0.25rem',
        '@md': {
          mr: '10px',
        },
      },
      btnFilterCss: {
        display: 'flex',
        alignItems: 'center',
        mb: '20px',
        mt: '22px',
        '@sm': {
          mt: '0px',
        },
      },
      column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
      sidebar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  },
  '&.sidebar': {
    width: '100%',
    marginRight: 0,
    '&.sidebar__datepicker-wrapper': {
      '@sm': {
        flexDirection: 'column',
      },
      '@md': {
        flexDirection: 'row',
      },
    },
    '@media (min-width: 960px) and (max-width: 1279px)': {
      '&.sidebar__datepicker-wrapper .date-picker-start, &.sidebar__datepicker-wrapper .date-picker-end':
        {
          borderRadius: '15px',
        },
      '&.sidebar__datepicker-wrapper .sidebar_col:last-of-type .date-picker-end':
        {
          borderLeft: 'none',
        },
    },
  },
  '&.sidebar_col': {
    width: '100%',
    alignItems: 'normal',
  },
  '&.sidebar-btn': {
    width: '100%',
    margin: '5px 0 0 0',
  },
});
