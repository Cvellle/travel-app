import { useTranslations } from 'next-intl';
import { Input, Button, Spacer } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

import {
  StyledGoogleAuthButton,
  StyledAuthFormWrapper,
  StyledAuthLink,
} from './Auth.styled';

import { useAuth } from '@/providers/authProvider';
import { useGoogleAuth } from '@/hooks/auth/useGoogleAuth';
import { HrDivider } from '@/components/HrDivider';

export default function Login() {
  // hooks
  const t = useTranslations('Auth');

  const router = useRouter();

  const { login, logout } = useAuth();

  const { handleGoogleAuth } = useGoogleAuth();

  // yup
  const formSchema = Yup.object().shape({
    email: Yup.string().required(t('required:email')),
    password: Yup.string().required(t('required:password')),
  });
  const formOptions = { resolver: yupResolver(formSchema) };

  // react-hooks-form
  const { register, handleSubmit, reset, formState } = useForm(formOptions);

  const { errors } = formState;

  async function onSubmit(data) {
    await login(data);

    router.push('/');
  }

  return (
    <>
      <h1 css={{ fontSize: '20px' }}>{t('login')}</h1>
      <StyledAuthFormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder={t('email')}
            aria-label="Email"
            name="email"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>

          <Spacer y={0.5} />

          <Input.Password
            placeholder={t('password')}
            id="password"
            aria-label="password"
            name="password"
            type="password"
            {...register('password')}
            className={`${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>

          <Spacer y={0.5} />

          <Button type="submit">{t('login')}</Button>
        </form>
        <Spacer y={1} />
        <StyledAuthLink href="/auth/forgot-password">
          Zaboravili ste lozinku?
        </StyledAuthLink>
        <Spacer y={1} />
        <HrDivider text={`or`} />
        <StyledGoogleAuthButton
          onClick={() => handleGoogleAuth({ type: 'login' })}
          authType="login"
        />
        <Spacer y={1} />
        <span>Nemate nalog?</span>&nbsp;
        <StyledAuthLink href="/auth/register" color="orange">
          Registrujte se
        </StyledAuthLink>
      </StyledAuthFormWrapper>
    </>
  );
}
