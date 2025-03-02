import { Card, Grid, Row, Text, Col, Button, Image } from '@nextui-org/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useTranslations } from 'next-intl';

import { CardPrice } from '@/components/CardPrice';

export const OffersCard = ({
  destination,
  bgImage,
  country,
  price,
  agencyLogo,
}) => {
  return (
    <Grid.Container gap={5} justify="center" css={{ gap: '20px' }}>
      <Card css={{ w: '393px', h: '555px', margin: '0 0 50px' }}>
        <Card.Header
          css={{ position: 'absolute', zIndex: 1, top: 5, right: 0 }}
        >
          <Col>
            <Text
              size={12}
              weight="bold"
              align="right"
              transform="uppercase"
              color="#ffffffAA"
            >
              <AiOutlineHeart fontSize="35px" />
              <AiFillHeart fontSize="35px" display="none" />
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={`${bgImage}`}
            width="100%"
            height="66%"
            objectFit="cover"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: 'absolute',
            bgBlur: '#ffffff66',
            bg: '#fff',
            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
            bottom: 0,
            zIndex: 1,
            flexDirection: 'column',
            margin: '$0',
          }}
        >
          <Col align="center" justify="center">
            <Text
              weight="bold"
              size={32}
              margin="0"
              css={{ letterSpacing: '0.1em' }}
            >
              {/* {city.name.toUpperCase()} */}
              {destination}
              {/* Barselona */}
            </Text>
            <Row
              align="center"
              justify="center"
              css={{
                width: '50%',
                borderBottom: '1px solid #F5BC94',
                // marginBottom: '15px',
                gap: '5px',
              }}
            >
              <HiOutlineLocationMarker weight="bold" />
              <Text
                weight="normal"
                size={16}
                margin="0"
                css={{ letterSpacing: '0.1em' }}
              >
                {/* Španija */}
                {country}
              </Text>
            </Row>
            <CardPrice price={price} />
          </Col>
          <Row align="center" justify="flex-end" margin="0">
            <div>
              <Image
                src={`${agencyLogo}`}
                width="75px"
                height="45px"
                alt="Agency logo"
              />
            </div>
          </Row>
        </Card.Footer>
      </Card>

      {/* kartice za laptop 1440 */}
    </Grid.Container>
  );
};
