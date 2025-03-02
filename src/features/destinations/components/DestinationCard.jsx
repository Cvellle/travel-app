import { Card, Grid, Text, Button, Row } from '@nextui-org/react';

import StyledDestinationCard from './StyledComponents/StyledDestinationCard';

export default function DestinationCard({ destination, bgImage }) {
  return (
    <StyledDestinationCard
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Card
        css={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          display: 'flex',
          justifyContent: 'center',

          '@mdMax': {
            borderRadius: '0 0 4px 4px',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          },
        }}
      >
        <Card.Header
          css={{
            p: '72px 0 0',
            m: 'auto',
            '@mdMax': {
              p: '17px 0 0 0',
            },
          }}
        >
          {/* ??? */}
          {/* <Text> {'destination.agency'}</Text> */}
        </Card.Header>
        <Card.Body css={{ mx: 'auto', p: '0' }}>
          <Text
            css={{
              fontSize: '24px',
              '@mdMax': {
                fontSize: '16px',
                marginLeft: '13px',
                fontWeight: '$bold',
              },
            }}
          >
            {destination}
          </Text>
        </Card.Body>
        <Card.Footer
          css={{
            p: 0,
            m: 'auto',
            p: '0 0 74px',
            '@mdMax': {
              p: '0 0 14px 0',
            },
          }}
        >
          <Button
            size="sm"
            css={{
              m: 'auto',
              backgroundColor: '#F5BC94',
              p: '14px 22px',
              borderRadius: '10px',
              gap: '10px',

              '@mdMax': {
                backgroundColor: 'unset',
                fontSize: '14px',
                margin: 'unset',
                minWidth: '0',
                paddingLeft: '3px',
                marginLeft: '10px',
                color: '#000',
                '&:hover': {},
              },
            }}
          >
            Pogledaj ponudu
          </Button>
        </Card.Footer>
      </Card>
    </StyledDestinationCard>
  );
}
