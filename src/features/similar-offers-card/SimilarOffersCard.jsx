import { Card, Grid, Row, Text, Col, Image } from '@nextui-org/react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useTranslations } from 'next-intl';

import { CardPrice } from '@/components/CardPrice';

export const SimilarOffersCard = ({ similarOffer }) => {
  return (
    <Grid.Container gap={5} justify="center" css={{ gap: '20px' }}>
      <Card
        css={{
          w: '376px',
          h: '321px',
          margin: '35px 0px',
          boxShadow: ' 0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
        variant="flat"
      >
        <Card.Header
          css={{ position: 'absolute', zIndex: 1, top: 5, right: 0 }}
        >
          <Col></Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={similarOffer?.offer_images[0]}
            width="100%"
            height="220px"
            objectFit="cover"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          css={{
            position: 'absolute',
            bgBlur: '#ffffff66',
            bg: '#fff',
            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
            bottom: 0,
            zIndex: 1,
            margin: '$0',
            alignItems: 'flex-end',
          }}
        >
          <Col>
            <Text
              justify="flex-start"
              weight="bold"
              margin="0"
              css={{
                letterSpacing: '0.1em',
                fontSize: '16px',
                '@sm': {
                  fontSize: '28px',
                },
              }}
            >
              {similarOffer?.city_to_name}
            </Text>
            <Row
              align="center"
              css={{
                gap: '5px',
              }}
            >
              <HiOutlineLocationMarker weight="bold" />
              <Text
                weight="normal"
                margin="0"
                css={{
                  letterSpacing: '0.1em',
                  fontSize: '14px',
                  '@sm': {
                    fontSize: '16px',
                  },
                }}
              >
                {similarOffer?.country_to_name}
              </Text>
            </Row>
            <CardPrice price={similarOffer?.price} />
          </Col>
          <Row align="center" justify="flex-end" margin="0">
            <div>
              <Image
                src={similarOffer.travel_agency_logo_url}
                alt="Agency logo"
                width="75px"
                objectFit="cover"
                height={45}
              />
            </div>
          </Row>
        </Card.Footer>
      </Card>
    </Grid.Container>
  );
};
