import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { Container, Grid } from '@nextui-org/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState } from 'react';

import { StyledSubscribeContainer } from './StyledComponents/StyledSubscribeContainer';
import { SubmitSubscribeButton } from './StyledComponents/SubmitSubscribeButton';
import { StyledSubscribeInput } from './StyledComponents/StyledSubscribeInput';

import { ErrorMessageComponent } from '@/features/contact/components/StyledComponents/ErrorMessageComponent';
import { subscribeAPI } from '@/features/subscribe/api/subscribeAPI';
import { SubmitResultModal } from '@/components/shared/modals/SubmitResultModal';

export default function Subscribe() {
  // hooks
  const t = useTranslations();
  // states
  const [modalState, setModalState] = useState({});
  // yup
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email(
        t('About.about:subscribe:valid') && t('About.about:subscribe:valid')
      )
      .required(t('About.about:subscribe:required')),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  // react-hooks-form
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

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
    <Container css={{ p: '0' }}>
      <Head>
        <title>Putujemo.rs</title>
        <meta name="description" content="Najbolji sajt za putovanja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledSubscribeContainer
        css={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <Grid.Container
          css={{
            paddingLeft: 0,
            paddingRight: 0,
            justifyContent: 'center',
          }}
        >
          <Grid xs={12} css={{ d: 'flex', justifyContent: 'center' }}>
            <h3
              css={{
                m: 'auto',
                textAlign: 'center',
              }}
            >
              {t('About.about:subscribe:label')}
            </h3>
          </Grid>
          <Grid
            xs={12}
            css={{
              paddingLeft: 0,
              paddingRight: 0,
              justifyContent: 'center',
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div css={{ display: 'flex' }}>
                <StyledSubscribeInput
                  type="text"
                  id="email"
                  aria-label="Subscribe"
                  name="email"
                  css={{ '@mdMax': { width: '100%' } }}
                  {...register('email')}
                  className={`form-control ${
                    errors.subscribe ? 'is-invalid' : ''
                  }`}
                  placeholder={t('About.about:subscribe:placeholder')}
                  size="30"
                  required
                />
                <SubmitSubscribeButton
                  type="submit"
                  css={{ display: 'inline', '@mdMax': { width: '100%' } }}
                >
                  {t('About.about:subscribe:button')}
                </SubmitSubscribeButton>
              </div>
              <ErrorMessageComponent
                className="invalid-feedback"
                css={{ color: 'red' }}
              >
                {errors.email?.message}
              </ErrorMessageComponent>
            </form>
          </Grid>
        </Grid.Container>
      </StyledSubscribeContainer>
      <SubmitResultModal
        setModalStateHandler={setModalState}
        modalOpenProp={modalState}
      />
    </Container>
  );
}
