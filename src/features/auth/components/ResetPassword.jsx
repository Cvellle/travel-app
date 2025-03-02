import {
  Input,
  Text,
  Spacer,
  Button,
  Loading,
  Link as NextUiLink,
} from '@nextui-org/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import * as ReactIcons from 'react-icons/fc';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { StyledAuthFormWrapper } from './Auth.styled';

import { resetPassword } from '@/features/auth';

const ResetPassword = ({ token }) => {
  const [resetPasswordState, setResetPasswordState] = useState({
    status: 'idle',
    errorCode: null,
  });

  const router = useRouter();

  const t = useTranslations('Auth');

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required(t('required:password'))
      .min(6, t('required:password')),
    confirmPassword: Yup.string()
      .required(t('required:password'))
      .oneOf([Yup.ref('password')], t('required:password:match')),
  });

  const formOptions = { resolver: yupResolver(formSchema) };

  const { register, handleSubmit, formState, reset } = useForm(formOptions);

  const { errors } = formState;

  async function onSubmit({ password }) {
    try {
      setResetPasswordState({ ...resetPasswordState, status: 'processing' });
      await resetPassword({ token, password });

      setResetPasswordState({ ...resetPasswordState, status: 'success' });

      reset();

      setTimeout(() => {
        router.replace('/auth/login');
      }, 5000);
    } catch (error) {
      setResetPasswordState({
        status: 'error',
        errorCode: error.response.status,
      });
    }
  }

  return (
    <StyledAuthFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Spacer y={1} />
        <Text h2>{t('resetPasswordTitle')}</Text>
        <Spacer y={0.5} />
        <Text>{t('resetPasswordDesc')}</Text>
        <Spacer y={2} />
        <Input.Password
          label="Password"
          aria-label="Password"
          name="password"
          {...register('password')}
          className={` ${errors.password ? 'is-invalid' : ''}`}
        />
        <Spacer y={1} />
        <Input.Password
          label="Confirm password"
          aria-label="Confirm password"
          name="confirmPassword"
          {...register('confirmPassword')}
          className={` ${errors.confirmPassword ? 'is-invalid' : ''}`}
        />

        <Spacer y={1} />

        <Button
          type="submit"
          disabled={resetPasswordState.status === 'processing'}
          className={!formState.isValid ? 'reset__form--invalid' : ''}
        >
          <span>{t('resetPasswordBtn')}</span>
          {resetPasswordState.status === 'processing' && (
            <span style={{ marginLeft: '10px', display: 'flex' }}>
              <Loading type="spinner" color="white" />
            </span>
          )}
        </Button>
        {resetPasswordState.status === 'success' && (
          <>
            <Spacer y={2} />
            <ReactIcons.FcOk />
            <Text color="success">
              {t('resetPasswordSuccess_1')}{' '}
              <Link href="/auth/login">
                <NextUiLink color="success" underline css={{ fontWeight: 700 }}>
                  {t('resetPasswordSuccess_2')}
                </NextUiLink>
              </Link>{' '}
              {t('resetPasswordSuccess_3')}
            </Text>
          </>
        )}
        {resetPasswordState.status === 'error' &&
          resetPasswordState.errorCode === 404 && (
            <>
              <Spacer y={2} />
              <Text color="error">{t('resetPasswordTokenExp')}</Text>
            </>
          )}
        {resetPasswordState === 'error' &&
          resetPasswordState.errorCode !== 404 && (
            <>
              <Spacer y={2} />
              <Text color="error">{t('errorTryAgain')}</Text>
            </>
          )}
        {!!Object.keys(errors).length &&
          Object.entries(errors).map(([key, value], index) => {
            return (
              <div key={`reset-password-error-${index}-${key}`}>
                <Spacer y={1} />
                <Text color="error">{value.message}</Text>
              </div>
            );
          })}
      </form>
    </StyledAuthFormWrapper>
  );
};

export default ResetPassword;
