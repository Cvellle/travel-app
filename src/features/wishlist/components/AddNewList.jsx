import { Text, Input, Spacer } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslations } from 'next-intl';

import { StyledNewWishlistForm } from './AddNewList.styled';
import { StyledCreateNewListButton } from './FavouritesList.styled';

import { createNewFavouritesList } from '@/features/wishlist';

const querySchema = yup.object().shape({
  title: yup
    .string()
    .min(3, 'Naziv liste mora sadržati najmanje 3 karaktera')
    .max(60, 'Naziv liste može imati najviše 60 karaktera')
    .required('Naziv liste je obavezan'),
});

export const AddNewList = ({
  offer,
  setListSuccessData,
  setActiveStep,
  refetchUser,
}) => {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(querySchema),
  });

  const onSubmit = async ({ title }) => {
    try {
      await createNewFavouritesList({
        title,
        offerDurationId: offer.offer_durations_id,
      });

      await refetchUser();

      setListSuccessData({
        listTitle: title,
        offerTitle: offer.name,
      });

      setActiveStep('listSuccess');

      reset();
    } catch (error) {
      console.log('error: ', error);
      return error.message;
    }
  };

  return (
    <StyledNewWishlistForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        clearable
        bordered
        label="Naziv"
        placeholder="Moji omiljeni aranžmani"
        animated={false}
        css={{ width: '100%' }}
        {...register('title')}
      />
      <Spacer y={1.5} />
      <StyledCreateNewListButton type="submit">
        <Text color="white">{t('Wishlist.createNewList')}</Text>
      </StyledCreateNewListButton>
    </StyledNewWishlistForm>
  );
};
