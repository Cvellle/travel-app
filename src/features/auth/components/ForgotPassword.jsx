import { Input, Text, Spacer, Button } from '@nextui-org/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import * as ReactIcons from 'react-icons/fc';

import { StyledAuthFormWrapper } from './Auth.styled';

import { forgotPassword } from '@/features/auth';

const ForgotPassword = () => {
  const [resetPasswordState, setResetPasswordState] = useState({
    status: 'idle',
    errorCode: null,
  });

  const t = useTranslations('Auth');

  const formSchema = Yup.object().shape({
    email: Yup.string().email().required(t('required:email')),
  });
  const formOptions = { resolver: yupResolver(formSchema) };

  const { register, handleSubmit, formState, reset } = useForm(formOptions);

  const { errors } = formState;

  async function onSubmit({ email }) {
    try {
      await forgotPassword({ email });

      setResetPasswordState({ ...resetPasswordState, status: 'success' });

      reset();
    } catch (error) {
      console.log(error);
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
        <Text h2>{t('forgotPasswordTitle')}</Text>
        <Spacer y={0.5} />
        <Text>{t('forgotPasswordDesc')}</Text>
        <Spacer y={2} />
        <Input
          label="Email"
          aria-label="Email"
          name="email"
          {...register('email')}
          className={` ${errors.email ? 'is-invalid' : ''}`}
        />

        <Spacer y={1} />

        <Button
          type="submit"
          className={!formState.isValid ? 'reset__form--invalid' : ''}
        >
          {t('forgotPasswordBtn')}
        </Button>
        {resetPasswordState.status === 'success' && (
          <>
            <Spacer y={2} />
            <ReactIcons.FcOk />
            <Text color="success">{t('forgotPasswordSuccess')}</Text>
          </>
        )}
        {resetPasswordState.status === 'error' && (
          <>
            <Spacer y={2} />
            <Text color="error">{t('errorTryAgain')}</Text>
          </>
        )}
        {errors.email && (
          <>
            <Spacer y={1} />
            <Text color="error">{t('errorInvalidEmail')}</Text>
          </>
        )}
      </form>
    </StyledAuthFormWrapper>
  );
};

export default ForgotPassword;
