import Head from 'next/head';
import { useTranslations } from 'next-intl';
import {
  Grid,
  Input,
  Spacer,
  Textarea,
  Text,
  Container,
} from '@nextui-org/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


import { sendMessageAPI } from '../api/sendMessageAPI';

import { SubmitContactButton } from './StyledComponents/SubmitContactButton';
import { StyledContactContainer } from './StyledComponents/StyledContactContainer';
import { InnerContactContainer } from './StyledComponents/InnerContactContainer';
import { ErrorMessageComponent } from './StyledComponents/ErrorMessageComponent';

export default function Contact() {
  // states
  const [successVisible, setSuccessVisible] = useState(false);
  // hooks
  const t = useTranslations('Contact');
  // yup
  const formSchema = Yup.object().shape({
    first_name: Yup.string().required(t('contact:required:first_name')),
    last_name: Yup.string().required(t('contact:required:last_name')),
    email: Yup.string()
      .email(t('contact:valid:email') && t('contact:valid:email'))
      .required(t('contact:required:email')),
    phone: Yup.string()
      .required(t('contact:required:phone'))
      .matches(/^[+]?[0-9\-\/ ]{5,20}$/, {
        message: `${t('contact:phoneError')}`,
        excludeEmptyString: false,
      }),
    message: Yup.string()
      .required(t('contact:required:message'))
      .min(10, t('contact:required:message:length')),
  });
  // react-hooks-form
  const formOptions = { resolver: yupResolver(formSchema), mode: 'onBlur' };
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty, isValid, errors },
  } = useForm(formOptions);
  // const { errors } = formState;

  async function onSubmit(data) {
    try {
      let res = await sendMessageAPI(data);
      !!res && !!res.error == false && setSuccessVisible(true);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  return (
    <StyledContactContainer>
      <Head>
        <title>Putujemo.rs</title>
        <meta name="description" content="Najbolji sajt za putovanja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerContactContainer css={{ d: 'flex' }}>
        {successVisible ? (
          <Container
            css={{
              d: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
              my: 'auto',
            }}
          >
            {t('contact:success')}
          </Container>
        ) : (
          <Grid.Container
            css={{
              justifyContent: 'center',
              mx: 'auto',
            }}
          >
            <Grid
              xs={12}
              md={12}
              css={{
                borderBottom: '1px solid #F5BC94',
                mb: '5rem',
                height: '70px',
              }}
            >
              <h1
                css={{ fontSize: '24px', height: '70px', lineHeight: '29px' }}
              >
                {t('contact:heading')}
              </h1>
            </Grid>
            <Grid xs={12} md={6}>
              <Text
                css={{
                  fontSize: '20px',
                  '@md': {
                    padding: '0rem calc(100% - 517px) 0 0',
                  },
                  '@smMax': {
                    mb: '50px',
                  },
                }}
              >
                {t('contact:text')}
                <p>{successVisible}</p>
              </Text>
            </Grid>
            <Grid xs={12} md={6}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid.Container gap={2} justify={'space-between'}>
                  <Grid
                    xs={12}
                    md={5.8}
                    className="form-group"
                    css={{
                      flexWrap: 'wrap',
                      p: '0',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Input
                      bordered
                      label={t('contact:first_name')}
                      aria-label="First name"
                      name="first_name"
                      {...register('first_name')}
                      css={{ width: '100%', borderRadius: '0.1rem' }}
                      className={`form-control ${
                        errors.first_name ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessageComponent
                      className="invalid-feedback"
                      css={{ color: 'red' }}
                    >
                      {errors.first_name?.message}
                    </ErrorMessageComponent>
                  </Grid>
                  <Grid
                    xs={12}
                    md={5.8}
                    className="form-group"
                    css={{
                      flexWrap: 'wrap',
                      p: '0',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Input
                      bordered
                      label={t('contact:last_name')}
                      aria-label="Last name"
                      name="last_name"
                      {...register('last_name')}
                      css={{ width: '100%', borderRadius: '0.1rem' }}
                      className={`form-control ${
                        errors.last_name ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessageComponent
                      className="invalid-feedback"
                      css={{ color: 'red' }}
                    >
                      {errors.last_name?.message}
                    </ErrorMessageComponent>
                  </Grid>
                  <Grid
                    xs={12}
                    md={5.8}
                    className="form-group"
                    css={{
                      flexWrap: 'wrap',
                      p: '0.5rem 0 0 0',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Input
                      bordered
                      label={'Email'}
                      aria-label="Email"
                      name="email"
                      {...register('email')}
                      css={{ width: '100%', borderRadius: '0.1rem' }}
                      className={`form-control ${
                        errors.email ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessageComponent
                      className="invalid-feedback"
                      css={{ color: 'red' }}
                    >
                      {errors.email?.message}
                    </ErrorMessageComponent>
                  </Grid>
                  <Grid
                    xs={12}
                    md={5.8}
                    className="form-group"
                    css={{
                      flexWrap: 'wrap',
                      p: '0.5rem 0 0 0',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Input
                      bordered
                      label={t('contact:phone')}
                      aria-label="Phone"
                      name="phone"
                      type="tel"
                      {...register('phone')}
                      css={{ width: '100%', borderRadius: '0.1rem' }}
                      className={`form-control ${
                        errors.phone ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessageComponent
                      className="invalid-feedback"
                      css={{ color: 'red' }}
                    >
                      {errors.phone?.message || ' '}
                    </ErrorMessageComponent>
                  </Grid>
                  <Grid
                    xs={12}
                    className="form-group"
                    css={{
                      flexWrap: 'wrap',
                      p: '0.5rem 0 0',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Textarea
                      bordered
                      label={t('contact:message')}
                      aria-label="Message"
                      name="message"
                      rows={5}
                      {...register('message')}
                      css={{
                        width: '100%',
                      }}
                    />
                    <ErrorMessageComponent
                      className="invalid-feedback"
                      css={{ color: 'red' }}
                    >
                      {errors.message?.message}
                    </ErrorMessageComponent>
                  </Grid>
                  <Spacer y={1} />
                  <Grid xs={12} css={{ p: '0' }}>
                    <SubmitContactButton
                      type="submit"
                      className="btn btn-primary"
                      disabled={!isDirty || !isValid}
                      css={{ opacity: (!isDirty || !isValid) && 0.5 }}
                    >
                      {t('contact:send')}
                    </SubmitContactButton>
                  </Grid>
                </Grid.Container>
              </form>
            </Grid>
          </Grid.Container>
        )}
      </InnerContactContainer>
    </StyledContactContainer>
  );
}
