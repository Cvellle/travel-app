import {
  Card,
  Grid,
  Text,
  Link as NextUILink,
  Input,
  Modal,
} from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {
  StyledModalContainer,
  StyledText,
} from '../SinglePageTopDesc/StyledTopDesc';
import { SubmitResultModal } from '../shared/modals/SubmitResultModal';

import { StyledButton } from '@/components/Footer/StyledButton';
import { StyledCardBody } from '@/components/Footer/StyledCardBody';
import { StyledCard } from '@/components/Footer/StyledCard';
import { StyledGrid } from '@/components/Footer/StyledGrid';
import { StyledGridContainer } from '@/components/Footer/StyledGridContainer';
import * as SvgSprite from '@/assets/SvgSprite';
import { subscribeAPI } from '@/features/subscribe/api/subscribeAPI';
import { ErrorMessageComponent } from '@/features/contact/components/StyledComponents/ErrorMessageComponent';

export const Footer = () => {
  const t = useTranslations();
  const [modalState, setModalState] = useState(false);

  // yup
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('Contact.contact:valid:email'))
      .required(t('Contact.contact:required:email')),
  });
  // react-hooks-form
  const formOptions = { resolver: yupResolver(formSchema), mode: 'onBlur' };
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm(formOptions);

  async function onSubmit(data) {
    try {
      let res = await subscribeAPI(data);
      !!res &&
        setModalState({
          ...modalState,
          openModal: true,
          modalText: t('Subscribe.Modal:success'),
          modalSuccess: true,
        });
    } catch (error) {
      console.log(error);

      if (error?.response?.status == '409') {
        setModalState({
          ...modalState,
          openModal: true,
          modalText: t('Subscribe.Modal:already'),
          modalSuccess: false,
        });
      } else
        setModalState({
          ...modalState,
          openModal: true,
          modalText: t('Subscribe.Modal:error'),
          modalSuccess: false,
        });

      return error;
    }
  }

  return (
    <>
      <Grid.Container
        css={{
          '@media print': {
            d: 'none',
          },
        }}
      >
        <StyledCard>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid.Container justify="space-around">
              <Grid>
                <Card css={{ background: '#161C37' }} variant="flat">
                  <StyledCardBody>
                    <Text
                      h6
                      size={15}
                      color="white"
                      align="center"
                      css={{ m: 0 }}
                    >
                      {t('Footer.footer:newsletter')}
                    </Text>
                    <StyledGrid variant="form">
                      <Input
                        {...register('email')}
                        clearable
                        shadow={false}
                        type="email"
                        placeholder={t('Footer.footer:placeholderEmail')}
                        width="200px"
                        aria-label="Email"
                        name="email"
                        className={`form-control ${
                          errors.email ? 'is-invalid' : ''
                        }`}
                      />
                      <StyledButton size="mysize" color="mycolor" type="submit">
                        {t('Footer.footer:button')}
                      </StyledButton>
                    </StyledGrid>
                  </StyledCardBody>
                </Card>
              </Grid>
              <ErrorMessageComponent
                className="invalid-feedback"
                css={{ color: 'red' }}
              >
                {errors.email?.message}
              </ErrorMessageComponent>
            </Grid.Container>
          </form>

          <Grid.Container justify="space-around" gap={5}>
            <StyledGrid variant="card">
              <Card css={{ background: '#161C37' }} variant="flat">
                <Card.Body>
                  <Text weight="bold" color="#fff">
                    {t('Footer.footer:arrangements')}
                  </Text>
                  <Card.Divider />
                  <Link css={{ color: '$accents0' }} href="/#">
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:summerHolidays')}
                    </NextUILink>
                  </Link>
                  <Link css={{ color: '$accents0' }} href="/#">
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:europeanCities')}
                    </NextUILink>
                  </Link>
                  <Link css={{ color: '$accents0' }} href="/#">
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:distantDestinations')}
                    </NextUILink>
                  </Link>
                  <Link css={{ color: '$accents0' }} color href="/#">
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:wintering')}
                    </NextUILink>
                  </Link>
                  <Link css={{ color: '$accents0' }} color href="/#">
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:newYear')}
                    </NextUILink>
                  </Link>
                </Card.Body>
              </Card>
            </StyledGrid>
            <StyledGrid variant="card">
              <Card css={{ background: '#161C37' }} variant="flat">
                <Card.Body>
                  <Text weight="bold" color="#fff">
                    {t('Footer.footer:destinations')}
                  </Text>
                  <Card.Divider />
                  <Link css={{ color: '$accents0' }} href="/#">
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:countries')}
                    </NextUILink>
                  </Link>
                  <Link css={{ color: '$accents0' }} href="/#">
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:cities')}
                    </NextUILink>
                  </Link>
                  <Link css={{ color: '$accents0' }} href="/#">
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:hotels')}
                    </NextUILink>
                  </Link>
                  <Link css={{ color: '$accents0' }} href="/#">
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:apartments')}
                    </NextUILink>
                  </Link>
                </Card.Body>
              </Card>
            </StyledGrid>
            <StyledGrid variant="card">
              <Card css={{ background: '#161C37' }} variant="flat">
                <Card.Body>
                  <Text weight="bold" color="#fff">
                    {t('Footer.footer:partners')}
                  </Text>
                  <Card.Divider />
                  <Link
                    css={{ color: '$accents0' }}
                    href="/partners/country/serbia"
                  >
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:serbia')}
                    </NextUILink>
                  </Link>
                  <Link
                    css={{ color: '$accents0' }}
                    href="/partners/country/montenegro"
                  >
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:montenegro')}
                    </NextUILink>
                  </Link>
                  <Link
                    css={{ color: '$accents0' }}
                    href="/partners/country/bosnia"
                  >
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:bosnia')}
                    </NextUILink>
                  </Link>
                  <Link
                    css={{ color: '$accents0' }}
                    href="/partners/country/macedonia"
                  >
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:macedonia')}
                    </NextUILink>
                  </Link>
                </Card.Body>
              </Card>
            </StyledGrid>
            <StyledGrid variant="card">
              <Card css={{ background: '#161C37' }} variant="flat">
                <Card.Body>
                  <Text weight="bold" color="#fff">
                    {t('Footer.footer:company')}
                  </Text>
                  <Card.Divider />
                  <Link href="/about">
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:aboutUs')}
                    </NextUILink>
                  </Link>
                  <Link css={{ color: '$accents0' }} href="/terms">
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:termsAndConditions')}
                    </NextUILink>
                  </Link>
                  <Link css={{ color: '$accents0' }} href="/error-report">
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:reportAnError')}
                    </NextUILink>
                  </Link>
                  <Link css={{ color: '$accents0' }} href="/contact">
                    <NextUILink css={{ color: '$accents0' }}>
                      {t('Footer.footer:contact')}
                    </NextUILink>
                  </Link>
                </Card.Body>
              </Card>
            </StyledGrid>
            <StyledGrid variant="card">
              <Card css={{ background: '#161C37' }} variant="flat">
                <Card.Body>
                  <Text weight="bold" color="#fff">
                    {t('Footer.footer:follow')}
                  </Text>
                  <Card.Divider css={{ marginBottom: '7px' }} />
                  <StyledGridContainer>
                    <Link css={{ color: '$accents0' }} href="/#">
                      <SvgSprite.IconFacebook />
                    </Link>
                    <Link css={{ color: '$accents0' }} href="/#">
                      <SvgSprite.IconInstagram />
                    </Link>
                    <Link css={{ color: '$accents0' }} href="/#">
                      <SvgSprite.IconYoutube />
                    </Link>
                  </StyledGridContainer>
                </Card.Body>
              </Card>
            </StyledGrid>
          </Grid.Container>

          <Text color="white" justify="space-around" align="center">
            {t('Footer.footer:rights')}
          </Text>
        </StyledCard>
      </Grid.Container>

      <SubmitResultModal
        setModalStateHandler={setModalState}
        modalOpenProp={modalState}
      />
    </>
  );
};
