import React, { useState } from 'react';
import { Modal } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import { StyledModalBody } from '@/features/travelAgency/travelAgencyModal/StyledModalBody';
import { StyledImg } from '@/features/travelAgency/travelAgencyModal/StyledImg';
import {
  StyledTopDestButton,
  StyledText,
  StyledLink,
} from '@/components/SinglePageTopDesc/StyledTopDesc';
import { StyledLogoInfoWrapper } from '@/features/travelAgency/travelAgencyModal/StyledLogoInfoWrapper';
import { StyledInfoWrapper } from '@/features/travelAgency/travelAgencyModal/StyledInfoWrapper';
import { StyledButton } from '@/features/travelAgency/travelAgencyModal/StyledButton';
import * as SvgSprite from '@/assets/SvgSprite';

const ModalImages = ({ visibleModal, SetIfVisible, travelAgencyInfo }) => {
  const t = useTranslations('SingleOfferTopDesc');

  const closeHandler = () => {
    SetIfVisible(false);
  };

  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visibleModal}
        onClose={closeHandler}
        css={{
          maxWidth: '540px',
          minHeight: 'auto',
          '@sm': { width: '540px' },
        }}
      >
        <StyledModalBody>
          <StyledLogoInfoWrapper>
            <StyledImg
              src={travelAgencyInfo?.logo_url}
              width={124}
              height={118}
              alt="travel agency image"
              objectFit="contain"
              className="travel-agency-img travel-agency"
            />
            <StyledInfoWrapper>
              <StyledText style="agencyName">
                {travelAgencyInfo?.name}
              </StyledText>
              <StyledText style="agencyAddress">
                <SvgSprite.IconAdressPin />
                {travelAgencyInfo?.address}
              </StyledText>
              <StyledText style="agencyPhone">
                <SvgSprite.IconPhone />
                {travelAgencyInfo?.phone}
              </StyledText>
              <StyledText style="agencyWebsite">
                <SvgSprite.IconWebsite />
                <StyledLink
                  href={travelAgencyInfo?.website}
                  style="agencyWebsite"
                >
                  {travelAgencyInfo?.website}
                </StyledLink>
              </StyledText>
            </StyledInfoWrapper>
          </StyledLogoInfoWrapper>
          <StyledText
            css={{
              marginLeft: '0px',
              marginBottom: '20px',
              fontSize: '14px',
              '@sm': {
                fontSize: '16px',
              },
            }}
            style="moreLess"
          >
            {readMore
              ? travelAgencyInfo?.about_us
              : `${travelAgencyInfo?.about_us?.substring(0, 400)}...`}
            <StyledTopDestButton
              color="transparent"
              size="moreButton"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? (
                <StyledText
                  css={{
                    color: '#F5A524',
                  }}
                  style="less"
                >
                  {t('TopDesc:less')}
                </StyledText>
              ) : (
                <StyledText
                  css={{
                    color: '#F5A524',
                  }}
                  style="more"
                >
                  {t('TopDesc:more')}
                </StyledText>
              )}
            </StyledTopDestButton>
          </StyledText>
          <StyledButton
            icon={<SvgSprite.IconList />}
            size="lg"
            className="travel-agency-modal-btn travel-agency-btn"
          >
            {t('Agency:otherOffers')} {travelAgencyInfo?.name}
          </StyledButton>
        </StyledModalBody>
      </Modal>
    </div>
  );
};

export default ModalImages;
