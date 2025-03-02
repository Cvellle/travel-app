import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { Grid, Input, Container, Textarea, Text } from '@nextui-org/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { submitErrorAPI } from '../api/submitErrorAPI';

import { SubmitErrorButton } from './StyledComponents/SubmitErrorButton';
import { StyledErrorSubmitContainer } from './StyledComponents/StyledSubmitErrorContainer';
import { InnerErrorSubmitContainer } from './StyledComponents/InnerErrorSubmitContainer';

import { StyeledHeading } from '@/features/about/components/StyledComponents/StyeledHeading';
import { ErrorMessageComponent } from '@/features/contact/components/StyledComponents/ErrorMessageComponent';

export default function ErrorSubmit() {
  // states
  const [successVisible, setSuccessVisible] = useState(false);
  // hooks
  const t = useTranslations('ErrorSubmit');
  // yup
  const formSchema = Yup.object().shape({
    page_url: Yup.string()
      .required(t('errorSubmit:required:page_url'))
      .matches(/[www|http:|https:]+[^\s]+[\w]/, {
        message: `${t('errorSubmit:error')}`,
        excludeEmptyString: false,
      }),
    description: Yup.string()
      .required(t('errorSubmit:required:message'))
      .min(10, t('errorSubmit:required:message:length')),
  });
  const formOptions = { resolver: yupResolver(formSchema), mode: 'onBlur' };
  // react-hooks-form
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid, errors },
  } = useForm(formOptions);
  // const { errors } = formState;

  async function onSubmit(data) {
    console.log(data);
    try {
      let res = await submitErrorAPI(data);
      !!res && !!res.error == false && setSuccessVisible(true);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  return (
    <StyledErrorSubmitContainer>
      <Head>
        <title>Putujemo.rs</title>
        <meta page_url="description" content="Najbolji sajt za putovanja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <InnerErrorSubmitContainer css={{ d: 'flex' }}>
        {successVisible ? (
          <Container
            css={{
              d: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
              my: 'auto',
            }}
          >
            {t('errorSubmit:success')}
          </Container>
        ) : (
          <>
            {' '}
            <StyeledHeading
              css={{
                height: '70px',
                lineHeight: '29px',
                borderBottom: '1px solid #F5BC94',
                mb: '5rem',
                height: '70px',
              }}
            >
              {t('errorSubmit:heading')}
            </StyeledHeading>
            <form
              onSubmit={handleSubmit(onSubmit)}
              css={{
                '@sm': { width: '100%' },
                '@md': {
                  w: '50%',
                },
              }}
            >
              <Grid.Container
                css={{
                  justifyContent: 'center',
                  mx: 'auto',
                }}
              >
                <Grid xs={12}>
                  <Text
                    css={{
                      w: '100%',
                      fontSize: '20px',
                      '@smMax': {
                        mb: '50px',
                      },
                    }}
                  >
                    {t('errorSubmit:text')}
                  </Text>
                </Grid>
                <Grid
                  xs={12}
                  md={7}
                  lg={5}
                  css={{
                    flexWrap: 'wrap',
                    p: '0',
                    mt: '3rem',
                  }}
                >
                  <Input
                    bordered
                    label={t('errorSubmit:page_url')}
                    aria-label="page_url"
                    page_url="page_url"
                    {...register('page_url')}
                    css={{
                      width: '100%',
                      borderRadius: '0.1rem',
                      p: '0 0',
                      m: 'auto',
                    }}
                    className={`form-control ${
                      errors.page_url ? 'is-invalid' : ''
                    }`}
                  />
                  <ErrorMessageComponent
                    className="invalid-feedback"
                    css={{ color: 'red' }}
                  >
                    {errors.page_url?.message}
                  </ErrorMessageComponent>
                  <Textarea
                    bordered
                    label={t('errorSubmit:message')}
                    aria-label="Message"
                    name="description"
                    rows={5}
                    {...register('description')}
                    css={{ mt: '1rem', width: '100%' }}
                  />
                  <ErrorMessageComponent
                    className="invalid-feedback"
                    css={{ color: 'red' }}
                  >
                    {errors.description?.message}
                  </ErrorMessageComponent>
                  <SubmitErrorButton
                    type="submit"
                    css={{
                      m: '1rem 0 0 auto',
                      opacity: (!isDirty || !isValid) && 0.5,
                    }}
                    className="btn btn-primary"
                    disabled={!isDirty || !isValid}
                  >
                    {t('errorSubmit:send')}
                  </SubmitErrorButton>
                </Grid>
              </Grid.Container>
            </form>
          </>
        )}
      </InnerErrorSubmitContainer>
    </StyledErrorSubmitContainer>
  );
}
