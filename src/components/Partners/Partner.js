import { Card, Image, Text, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import * as SvgSprite from '@/assets/SvgSprite';

const Partner = ({ agency }) => {
  const t = useTranslations('Partners');
  const {
    name,
    logo,
    address,
    phone,
    website,
    licenceNum,
    country,
    agencyPath,
    websiteName,
  } = agency;

  return (
    <Card css={{ p: '30px 0 32px 32px', w: '300px', '@sm': { w: '420px' } }}>
      <Card.Header
        css={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          px: '0',

          div: {
            margin: '0',
          },

          'img[class*="nextui-image"]': {
            width: '80px',
            '@sm': {
              width: '110px',
            },
          },
        }}
      >
        <Image
          alt={name}
          src={logo}
          css={{
            height: '80px',
            borderRadius: '50%',
            border: '1px solid #F5A524',
            padding: '8px',
            '@sm': {
              height: '110px',
              padding: '15px',
            },
          }}
        />
        <Text
          css={{
            color: '$accents8',
            fontSize: '16px',
            backgroundColor: '#F5BC94',
            borderRadius: '4px 0 0 4px',
            padding: '5px 10px',
          }}
        >
          {t('Partners:licence')} {licenceNum}
        </Text>
      </Card.Header>
      <Card.Body css={{ py: '$2', px: '0' }}>
        <Link href={`/partners/${agencyPath}`} css={{ marginBottom: '5px' }}>
          <Text css={{ fontSize: '24px', fontWeight: '700' }}>
            {name}{' '}
            <Text
              span
              css={{
                color: 'inherit',
                fontSize: 'inherit',
                fontWeight: 'inherit',
              }}
            >
              {t('Partners:agency')}
            </Text>
          </Text>
        </Link>
        <Text
          css={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            svg: { width: '15px' },
          }}
        >
          <SvgSprite.IconAdressPin />
          {address}
        </Text>
        <Text
          css={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            svg: { width: '15px' },
          }}
        >
          <SvgSprite.IconPhone />
          {phone}
        </Text>
        <a href={website} target="_blank" rel="noreferrer">
          <Text
            css={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              svg: { width: '15px' },
              '&:hover': { color: '#F5A524' },
            }}
          >
            <SvgSprite.IconWebsite />
            {websiteName}
          </Text>
        </a>
      </Card.Body>
    </Card>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      textContent: (
        await import(`../../../locales/${locale}/translations.json`)
      ).default,
    },
  };
}

export default Partner;
