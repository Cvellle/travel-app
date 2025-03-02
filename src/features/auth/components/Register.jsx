import { useTranslations } from 'next-intl';
import { Input, Spacer, Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

import { StyledGoogleAuthButton, StyledAuthFormWrapper } from './Auth.styled';

import { useAuth } from '@/providers/authProvider';
import { useGoogleAuth } from '@/hooks/auth/useGoogleAuth';
import { HrDivider } from '@/components/HrDivider';

const Register = () => {
  const t = useTranslations('Auth');

  const router = useRouter();

  const { handleGoogleAuth } = useGoogleAuth();

  const { register: registerUser } = useAuth();

  // yup
  const formSchema = Yup.object().shape({
    name: Yup.string().required(t('required:name')),
    email: Yup.string().required(t('required:email')),
    password: Yup.string()
      .required(t('required:password'))
      .min(6, t('required:email'))
      .matches(),
    confirmPwd: Yup.string()
      .required(t('required:password'))
      .oneOf([Yup.ref('password')], t('required:password:match')),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  // useForm
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  // submit
  async function onSubmit(data) {
    const signupData = {
      email: data.email,
      password: data.password,
    };

    try {
      await registerUser(signupData);

      router.push('/');
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  return (
    <>
      <h1 css={{ fontSize: '20px' }}>{t('registration')}</h1>
      <StyledAuthFormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder={t('name')}
            aria-label="Name"
            name="name"
            {...register('name')}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.name?.message}</div>
          <Spacer y={0.5} />
          <Input
            placeholder="Email"
            aria-label="Email"
            name="email"
            type="email"
            pattern={
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1}).*$/
            }
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
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
          <Spacer y={0.5} />
          <Input.Password
            placeholder={t('confirmPwd')}
            aria-label="Confirm password"
            id="confirmPwd"
            name="confirmPwd"
            type="password"
            {...register('confirmPwd')}
            className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
          <Spacer y={1.5} />
          <Button type="submit">{t('registerBtn')}</Button>
        </form>

        <Spacer y={1} />

        <HrDivider text={`or`} />

        <StyledGoogleAuthButton
          onClick={() => handleGoogleAuth({ type: 'register' })}
          authType="register"
        />
      </StyledAuthFormWrapper>
    </>
  );
};

export default Register;
