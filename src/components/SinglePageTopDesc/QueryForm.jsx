import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  Container,
  Input,
  Row,
  Spacer,
  Text,
  Textarea,
} from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';

import { InputError, StyledTopDestButton } from './StyledTopDesc';
import ConvertDate from './ConvertDate';

import { sendOfferAPI } from '@/features/details/api/sendOfferAPI';

const QueryForm = ({ setVisible, setOpenModal, offer, mainOffer }) => {
  // hooks
  const t = useTranslations();
  const router = useRouter();

  // states
  const [phoneCheckbox, setPhoneCheckbox] = useState(null);
  const [emailCheckbox, setEmailCheckbox] = useState(null);
  const [adults, setAdults] = useState();
  const [kids, setKids] = useState();

  const querySchema = yup.object().shape({
    name: yup.string().required(`${t('SingleOfferTopDesc.Modal:fieldError')}`),
    require_answer_phone: yup
      .bool()
      .oneOf([false], 'Checkbox selection is required'),
    require_answer_email: yup
      .bool()
      .oneOf([false], 'Checkbox selection is required'),
    phone: yup
      .string()
      .required(`${t('SingleOfferTopDesc.Modal:fieldError')}`)
      .matches(/^[+]?[0-9\-\/ ]{5,20}$/, {
        message: `${t('SingleOfferTopDesc.Modal:phoneError')}`,
        excludeEmptyString: false,
      })
      .max(20)
      .typeError(`${t('SingleOfferTopDesc.Modal:phoneError')}`),
    email: yup
      .string()
      .email(`${t('SingleOfferTopDesc.Modal:emailError')}`)
      .required(`${t('SingleOfferTopDesc.Modal:fieldError')}`)
      .when('require_answer_email', {
        is: true,
        then: yup.string().required('Must enter email address'),
      }),
    inquiry: yup
      .string()
      .required(`${t('SingleOfferTopDesc.Modal:fieldError')}`),
    checkboxGroupValidation: yup.object().shape(
      {
        require_answer_phone: yup.bool().when('require_answer_email', {
          is: (require_answer_email) => !require_answer_email,
          then: yup.bool().oneOf([true], 'At least one needs to be checked'),
        }),
        require_answer_email: yup.bool().when('require_answer_phone', {
          is: (require_answer_phone) => !require_answer_phone,
          then: yup.bool().oneOf([true], 'At least one needs to be checked'),
        }),
      },
      [
        ['require_answer_phone', 'require_answer_email'],
        ['require_answer_email', 'require_answer_phone'],
      ]
    ),
  });

  // react-hooks-form
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid, errors },
  } = useForm({
    resolver: yupResolver(querySchema),
    mode: 'onBlur',
  });

  const submitForm = async (data, e) => {
    e.preventDefault();
    let sendData = {
      ...data,
      offer_duration_id: router.query.offerDurationId,
      require_answer_phone: !!phoneCheckbox,
      require_answer_email: !!emailCheckbox,
    };

    const { checkboxGroupValidation, ...finalData } = sendData;

    try {
      let res = await sendOfferAPI(finalData);
      !!res && setOpenModal(true);
    } catch (error) {
      console.log(error);
      return error;
    }
    setVisible(false);
  };

  useEffect(() => {
    setAdults(router.query.adults ?? undefined);
    setKids(router.query.kids ?? undefined);
  }, [router.query]);

  return (
    <>
      <Container css={{ padding: '0' }}>
        <Text css={{ fontSize: '20px' }}>
          {t('SingleOfferTopDesc.Modal:title')}
        </Text>
        <Spacer y={1} />
        <Text
          css={{
            width: '80%',
            marginRight: 'auto',
            marginLeft: '0',
            marginBottom: '20px',
            paddingBottom: '5px',
            borderBottom: '1px solid #F5BC94',
          }}
        >
          {t('SingleOfferTopDesc.Modal:intro')}
        </Text>
        <Container css={{ padding: '0' }}>
          <Text>
            {t('SingleOfferTopDesc.Modal:destination')} {offer?.city_to?.name}
          </Text>
          <Text>
            {t('SingleOfferTopDesc.Modal:transport')}{' '}
            {offer?.transport_prices[0]?.transport_type === 'AIRPLANE'
              ? t('Sidebar.Transport:airplane')
              : offer?.transport_prices[0]?.transport_type === 'BUS'
              ? t('Sidebar.Transport:bus')
              : offer?.transport_prices[0]?.transport_type === 'BOAT'
              ? t('Sidebar.Transport:boat')
              : offer?.transport_prices[0]?.transport_type === 'NO_TRANSPORT'
              ? t('Sidebar.Transport:self')
              : null}
          </Text>
          <Text>
            {t('SingleOfferTopDesc.Modal:accommodation')}{' '}
            {offer.offer_included.lodgings[0].title}
          </Text>
          <Text>
            {t('SingleOfferTopDesc.Modal:service')}{' '}
            {/* {mainOffer?.offer_services.map((service) => ( */}
            {/* <span>{`${' '}${mainOffer?.offer_services?.service_type},`}</span> */}
            {/* ))} */}
            {mainOffer?.offer_services[0]?.service_type === 'OVERNIGHT'
              ? t('Sidebar.Service:bed')
              : mainOffer?.offer_services[0]?.service_type ===
                'BED_AND_BREAKFAST'
              ? t('Sidebar.Service:b&b')
              : mainOffer?.offer_services[0]?.service_type === 'HALF_BOARD'
              ? t('Sidebar.Service:half-board')
              : mainOffer?.offer_services[0]?.service_type ===
                'FULL_ACCOMMODATION'
              ? t('Sidebar.Service:full-board')
              : mainOffer?.offer_services[0]?.service_type === 'ALL_INCLUSIVE'
              ? t('Sidebar.Service:allinc')
              : null}
          </Text>
          <Text>
            {t('SingleOfferTopDesc.Modal:date')}
            {`${' '} ${ConvertDate(mainOffer?.start_date)} - ${ConvertDate(
              mainOffer?.end_date
            )}`}
          </Text>
          <Text>
            {t('SingleOfferTopDesc.Modal:adults')} {adults}
          </Text>
          <Text>
            {t('SingleOfferTopDesc.Modal:kids')} {kids}
          </Text>
          <Spacer y={0.5} />
          <Text b>
            {t('SingleOfferTopDesc.Modal:price')} &nbsp;
            {Math.trunc(
              offer.offer_durations[0].price * adults +
                offer.offer_durations[0].price *
                  kids *
                  (1 - offer.kid_discount / 100)
            )}
            &euro;
          </Text>
        </Container>
        <Spacer y={1} />
        <form onSubmit={handleSubmit(submitForm)}>
          <Row justify="space-between" css={{ gap: '16px' }}>
            <Container css={{ padding: '0' }}>
              <Input
                clearable
                bordered
                color="warning"
                size="lg"
                {...register('name')}
                name="name"
                helperText={errors?.name?.message}
                type="text"
                placeholder={t('SingleOfferTopDesc.Modal:nameHolder')}
                label={t('SingleOfferTopDesc.Modal:name')}
                css={{
                  flex: '1',
                  label: { color: '#000' },
                  'div[class*="bordered-true"]': {
                    borderRadius: '8px',
                  },
                  'p[class*="nextui-input-helper-text"]': {
                    fontSize: '10px',
                    color: 'red',
                    margin: '5px 0 0 0',
                    '@sm': {
                      fontSize: '12px',
                    },
                  },
                }}
              />
            </Container>
            <Container css={{ padding: '0' }}>
              <Input
                clearable
                bordered
                color="warning"
                size="lg"
                name="phone"
                helperText={errors?.phone?.message}
                placeholder={t('SingleOfferTopDesc.Modal:phoneHolder')}
                label={t('SingleOfferTopDesc.Modal:phone')}
                type="tel"
                {...register('phone')}
                css={{
                  flex: '1',
                  label: { color: '#000' },
                  'div[class*="bordered-true"]': {
                    borderRadius: '8px',
                  },
                  'p[class*="nextui-input-helper-text"]': {
                    fontSize: '10px',
                    color: 'red',
                    margin: '5px 0 0 0',
                    '@sm': {
                      fontSize: '12px',
                    },
                  },
                }}
              />
            </Container>
          </Row>
          <Spacer y={1} />
          <Container css={{ padding: '0' }}>
            <Input
              clearable
              bordered
              fullWidth
              color="warning"
              size="lg"
              name="email"
              helperText={errors?.email?.message}
              {...register('email')}
              placeholder={t('SingleOfferTopDesc.Modal:emailHolder')}
              label={t('SingleOfferTopDesc.Modal:email')}
              css={{
                label: { color: '#000' },
                'div[class*="bordered-true"]': {
                  borderRadius: '8px',
                },
                'p[class*="nextui-input-helper-text"]': {
                  fontSize: '10px',
                  color: 'red',
                  margin: '5px 0 0 0',
                  '@sm': {
                    fontSize: '12px',
                  },
                },
              }}
            />
          </Container>
          <Spacer y={1} />
          <Container css={{ padding: '0' }}>
            <Textarea
              bordered
              fullWidth
              clearable
              color="warning"
              size="lg"
              name="inquiry"
              {...register('inquiry')}
              label={t('SingleOfferTopDesc.Modal:textarea')}
              placeholder={t('SingleOfferTopDesc.Modal:textareaHolder')}
              helperText={errors.inquiry?.message}
              css={{
                textarea: { minHeight: '140px' },
                label: { color: '#000' },
                'div[class*="bordered-true"]': {
                  borderRadius: '8px',
                },
                'p[class*="nextui-input-helper-text"]': {
                  fontSize: '10px',
                  color: 'red',
                  margin: '5px 0 0 0',
                  '@sm': {
                    fontSize: '12px',
                  },
                },
              }}
            />
          </Container>
          <Spacer y={1} />
          <Row
            justify="space-between"
            css={{ flexDirection: 'column', '@sm': { flexDirection: 'row' } }}
          >
            <Text css={{ fontSize: '12px', '@sm': { fontSize: '16px' } }}>
              {t('SingleOfferTopDesc.Modal:notify')}{' '}
            </Text>
            <Checkbox
              {...register('checkboxGroupValidation.require_answer_email')}
              name="require_answer_email"
              value={emailCheckbox}
              onChange={setEmailCheckbox}
              size="sm"
              color="warning"
              css={{
                'div[class*="nextui-checkbox-container"]': {
                  borderRadius: '2px',
                },
              }}
            >
              <Text css={{ fontSize: '12px', '@sm': { fontSize: '16px' } }}>
                {t('SingleOfferTopDesc.Modal:emailCheck')}
              </Text>
            </Checkbox>
            <Checkbox
              {...register('checkboxGroupValidation.require_answer_phone')}
              name=" require_answer_phone"
              value={phoneCheckbox}
              onChange={setPhoneCheckbox}
              size="sm"
              color="warning"
              css={{
                'div[class*="nextui-checkbox-container"]': {
                  borderRadius: '2px',
                },
              }}
            >
              <Text css={{ fontSize: '12px', '@sm': { fontSize: '16px' } }}>
                {t('SingleOfferTopDesc.Modal:phoneCheck')}
              </Text>
            </Checkbox>
          </Row>
          <Spacer y={1} />
          <InputError color={'redColor'} css={{ mb: '2rem', color: 'red' }}>
            {(phoneCheckbox !== null || emailCheckbox !== null) &&
              !phoneCheckbox &&
              !emailCheckbox &&
              t('SingleOfferTopDesc.Modal:checkboxError')}
          </InputError>
          <StyledTopDestButton
            size="sendQuery"
            color="orange"
            type="submit"
            disabled={!isValid || (!phoneCheckbox && !emailCheckbox)}
          >
            {t('SingleOfferTopDesc.Modal:title')}
          </StyledTopDestButton>
        </form>
      </Container>
    </>
  );
};

export default QueryForm;
