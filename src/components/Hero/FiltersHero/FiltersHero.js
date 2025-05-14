import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Dropdown, Text } from '@nextui-org/react';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import format from 'date-fns/format';

import { StyledLabel } from '@/components/Hero/FiltersHero/StyledLabel';
import { StyledGrid } from '@/components/Hero/StyledGrid';
import { StyledFiltersContainer } from '@/components/Hero/FiltersHero/StyledFiltersContainer';
import { StyledButton } from '@/components/Hero/FiltersHero/StyledButton';
import { StyledHeroTitle } from '@/components/Hero/HeroContainer/StyledHeroTitle';
import { StyledFiltersSectionHolder } from '@/components/Hero/FiltersHero/StyledFiltersSectionHolder';
import { StyledInput } from '@/components/Hero/FiltersHero/StyledInput';
import { StyledText } from '@/components/Hero/FiltersHero/StyledText';
import 'react-datepicker/dist/react-datepicker.css';
import * as SvgSprite from '@/assets/SvgSprite';
import { useFetchAllOffers } from '@/hooks/sidebar/useFetchAllOffers';
import { useStore } from '@/stores/offers';
import { usePayload } from '@/stores/payload';

export const FiltersHero = ({
  allOfferTypes,
  allCountriesTo = [],
  allCountriesFrom = [],
  allCitiesFrom = [],
  allCitiesTo = [],
  startDateSearch,
  endDateSearch,
  adultsSearch,
  kidsSearch,
  sidebar = false,
  arrangement = true,
}) => {
  const t = useTranslations('Hero');
  const router = useRouter();
  const data = router.query;

  const offerName = allOfferTypes?.filter((offer) => {
    if (offer.id === data.offer_type) {
      return offer;
    }
  });
  const countryFrom = allCountriesFrom?.filter((country) => {
    if (country.id === data.country_from) {
      return country;
    }
  });
  const cityFrom = allCitiesFrom?.filter((city) => {
    if (city.id === data.city_from) {
      return city;
    }
  });
  const countryTo = allCountriesTo?.filter((country) => {
    if (country.id === data.country_to) {
      return country;
    }
  });
  const cityTo = allCitiesTo?.filter((city) => {
    if (city.id === data.city_to) {
      return city;
    }
  });

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [destFrom, setDestFrom] = useState('');
  const [destTo, setDestTo] = useState('');

  const [offerType, setOfferType] = useState('');
  const [offerTypeId, setOfferTypeId] = useState('');
  const [countryFromDest, setCountryFromDest] = useState('');
  const [countryFromDestId, setCountryFromDestId] = useState('');
  const [cityFromDest, setCityFromDest] = useState('');
  const [cityFromDestId, setCityFromDestId] = useState('');
  const [countryToDest, setCountryToDest] = useState('');
  const [countryToDestId, setCountryToDestId] = useState('');
  const [cityToDest, setCityToDest] = useState('');
  const [cityToDestId, setCityToDestId] = useState('');

  const [offerTypeCheck, setOfferTypeCheck] = useState(false);
  const [destFromCheck, setDestFromCheck] = useState(false);
  const [destToCheck, setDestToCheck] = useState(false);
  const [startDateCheck, setStartDateCheck] = useState(false);
  const [endDateCheck, setEndDateCheck] = useState(false);

  const [offerTypeError, setOfferTypeError] = useState(false);
  const [destFromError, setDestFromError] = useState(false);
  const [destToError, setDestToError] = useState(false);
  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);

  const querySchema = yup.object().shape({
    adults: yup
      .number()
      .typeError(t('hero:errorIntAdults'))
      .integer(t('hero:errorIntAdults'))
      .min(1, t('hero:errorMinValueAdults'))
      .max(9, t('hero:errorMaxValue'))
      .required(t('hero:errorMsg')),
    kids: yup
      .number()
      .typeError(t('hero:errorIntKids'))
      .integer(t('hero:errorIntKids'))
      .min(0, t('hero:errorMinValueKids'))
      .max(9, t('hero:errorMaxValue'))
      .required(t('hero:errorMsg')),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(querySchema),
    mode: 'onBlur',
  });

  const submitForm = (data, e) => {
    if (!offerTypeCheck) {
      setOfferTypeError(true);
      if (!destFromCheck) {
        setDestFromError(true);
      }
      if (!destToCheck) {
        setDestToError(true);
      }
      if (!startDateCheck && !startDateSearch) {
        setStartDateError(true);
      }
      if (!endDateCheck && !endDateSearch) {
        setEndDateError(true);
      }
      return;
    }
    e.preventDefault();
    data.offer_type = offerTypeId;

    if (countryFromDest) {
      data.country_from = countryFromDestId;
      delete data.city_from;
    } else if (cityFromDest) {
      data.city_from = cityFromDestId;
      delete data.country_from;
    }

    if (countryToDest) {
      data.country_to = countryToDestId;
      delete data.city_to;
    } else if (cityToDest) {
      data.city_to = cityToDestId;
      delete data.country_to;
    }

    let dateStart = format(
      startDate ? startDate : new Date(startDateSearch),
      'yyyy-MM-dd'
    );
    let dateEnd = format(
      endDate ? endDate : new Date(endDateSearch),
      'yyyy-MM-dd'
    );
    data.start_date = dateStart;
    data.end_date = dateEnd;

    if (router.query.transport_type) {
      data.transport_type = router.query.transport_type;
    }
    if (router.query.accommodation_type) {
      data.accommodation_type = router.query.accommodation_type;
    }
    if (router.query.service_type) {
      data.service_type = router.query.service_type;
    }
    if (router.query.star_rating) {
      data.star_rating = router.query.star_rating;
    }
    if (router.query.facilitiesArr) {
      data.facilitiesArr = router.query.facilitiesArr;
    }
    if (router.query.rating) {
      data.rating = router.query.rating;
    }
    if (router.query.price) {
      data.price = router.query.price;
    }
    if (router.query.travel_agencies_srb) {
      data.travel_agencies_srb = router.query.travel_agencies_srb;
    }
    if (router.query.travel_agencies_mac) {
      data.travel_agencies_mac = router.query.travel_agencies_mac;
    }
    if (router.query.travel_agencies_mn) {
      data.travel_agencies_mn = router.query.travel_agencies_mn;
    }
    if (router.query.travel_agencies_ba) {
      data.travel_agencies_ba = router.query.travel_agencies_ba;
    }
    // if (router.query.travel_agencies) {
    //   data.travel_agencies = router.query.travel_agencies;
    // }
    if (router.query.order_by) {
      data.order_by = router.query.order_by;
    }

    router.push({
      pathname: '/searchresults',
      query: { ...data },
    });
  };

  const setDestinationFrom = (name, id) => {
    setDestFromCheck(true);
    setCityFromDest(name);
    setCityFromDestId(id);
    setDestFrom(name);
    setCountryFromDest('');
  };

  const setDestinationTo = (name, id) => {
    setDestToCheck(true);
    setCityToDest(name);
    setCityToDestId(id);
    setDestTo(name);
    setCountryToDest('');
  };

  useEffect(() => {
    setOfferType(!!offerType ? offerType : offerName?.lengt ?hofferName[0]?.name : null);
    setOfferTypeId(offerTypeId ? offerTypeId : data?.offer_type);
    if (offerType) {
      setOfferTypeCheck(true);
    }
    setDestFrom(
      destFrom
        ? destFrom
        : countryFrom[0]?.name
        ? countryFrom[0]?.name
        : cityFrom[0]?.name
    );
    setCountryFromDest(
      countryFromDest ? countryFromDest : countryFrom[0]?.name
    );
    setCountryFromDestId(
      countryFromDestId ? countryFromDestId : data?.country_from
    );
    setCityFromDest(cityFromDest ? cityFromDest : cityFrom[0]?.name);
    setCityFromDestId(cityFromDestId ? cityFromDestId : data?.city_from);
    if (cityFromDest) {
      setCountryFromDest('');
    }
    if (countryFromDest) {
      setCityFromDest('');
    }
    if (destFrom) {
      setDestFromCheck(true);
    }
    setDestTo(
      destTo
        ? destTo
        : countryTo[0]?.name
        ? countryTo[0]?.name
        : cityTo[0]?.name
    );
    setCountryToDest(countryToDest ? countryToDest : countryTo[0]?.name);
    setCountryToDestId(countryToDestId ? countryToDestId : data?.country_to);
    setCityToDest(cityToDest ? cityToDest : cityTo[0]?.name);
    setCityToDestId(cityToDestId ? cityToDestId : data?.city_to);
    if (cityToDest) {
      setCountryToDest('');
    }
    if (countryToDest) {
      setCityToDest('');
    }
    if (destTo) {
      setDestToCheck(true);
    }
  }, [
    offerType,
    offerName,
    offerTypeId,
    destFrom,
    countryFrom,
    countryFromDest,
    countryFromDestId,
    cityFrom,
    cityFromDest,
    cityFromDestId,
    destTo,
    countryTo,
    countryToDest,
    countryToDestId,
    cityTo,
    cityToDest,
    cityToDestId,
    startDate,
    data,
  ]);

  const [isUseEffectDone, setIsUseEffectDone] = useState(false);

  // const [limit, setLimit] = useState(10);
  const limit = usePayload((state) => state.limit);
  const list = useStore((state) => state.list);
  const setList = useStore((state) => state.setList);

  const transportTypeArr = usePayload((state) => state.transportTypeArr);
  const propertyTypeArr = usePayload((state) => state.propertyTypeArr);
  const ratingCatArr = usePayload((state) => state.ratingCatArr);
  const serviceTypeArr = usePayload((state) => state.serviceTypeArr);
  const arrayOfFacilities = usePayload((state) => state.arrayOfFacilities);
  const allAgenciesArr = usePayload((state) => state.allAgenciesArr);
  const guestReviewsArr = usePayload((state) => state.guestReviewsArr);
  const selectedPrice = usePayload((state) => state.selectedPrice);

  const { data: allOffers, isLoading: allOffersLoading } = useFetchAllOffers(
    {
      onSuccess: (data) => {
        // console.log(data);
        setList(data);
      },
      enabled: isUseEffectDone,
    },
    {
      limit: limit,
      offer_type: router.query.offer_type ?? undefined,
      country_from: router.query.country_from ?? undefined,
      country_to: router.query.country_to ?? undefined,
      city_from: router.query.city_from ?? undefined,
      city_to: router.query.city_to ?? undefined,
      adults: router.query.adults ?? undefined,
      kids: router.query.kids ?? undefined,
      start_date: router.query.start_date ?? undefined,
      end_date: router.query.end_date ?? undefined,

      star_rating: ratingCatArr,
      transport_type: transportTypeArr,
      accommodation_type: propertyTypeArr,
      offer_services: serviceTypeArr,
      rating: guestReviewsArr,
      travel_agencies: allAgenciesArr,
      minimum_price: selectedPrice[0],
      maximum_price: selectedPrice[1],
      order_by: router.query.order_by ?? undefined,

      ...arrayOfFacilities,
    }
  );

  return (
    <StyledFiltersSectionHolder className={sidebar ? 'sidebar' : null}>
      <StyledHeroTitle
        h2
        color="white"
        margin="1"
        className={sidebar ? 'sidebar' : null}
      >
        {t('hero:title')}
      </StyledHeroTitle>
      <form onSubmit={handleSubmit(submitForm)} autoComplete="off">
        <StyledFiltersContainer className={sidebar ? 'sidebar' : null}>
          {arrangement ? (
            <StyledGrid className={sidebar ? 'sidebar' : null}>
              <StyledGrid style="iconLabelFilterCss">
                {sidebar ? (
                  <SvgSprite.IconMap color="black" />
                ) : (
                  <SvgSprite.IconMap color="#fff" />
                )}
                <StyledLabel className={sidebar ? 'sidebar' : null}>
                  {t('hero:arrangement')}
                </StyledLabel>
              </StyledGrid>

              <StyledGrid style="column">
                <StyledGrid
                  style="inputFilterCss"
                  className={sidebar ? 'sidebar' : null}
                  css={{
                    width: '100%',
                    '@md': {
                      width: '175px',
                    },
                  }}
                >
                  <Dropdown size="lg">
                    <Dropdown.Button
                      color="cv"
                      css={{
                        py: '22px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        zIndex: 1,
                        '@md': {
                          minWidth: '175px',
                        },
                      }}
                    >
                      <div className="nextui-button-text nextui-button-text-right">
                        {offerType}
                      </div>
                    </Dropdown.Button>

                    <Dropdown.Menu
                      {...register('offer_type')}
                      name="offer_type"
                      aria-label="User Actions"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={offerType}
                      css={{
                        width: 'auto',
                      }}
                      onAction={(key) => {
                        setOfferType(key.substr(0, key.lastIndexOf(' ')));
                        setOfferTypeId(key.split(' ').pop());
                        setOfferTypeCheck(true);
                        setOfferTypeError(false);
                      }}
                    >
                      {allOfferTypes?.map((offer) => {
                        return (
                          <Dropdown.Item
                            size="sm"
                            key={offer.name + ' ' + offer.id}
                            className="styled__checkbox__label styled__checkbox__label--default"
                            css={{
                              '&:hover': {
                                color: 'white',
                                fontWeight: 'bold',
                                background: '#161C37',
                              },
                            }}
                          >
                            {offer.name}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </StyledGrid>
                <StyledText className="error-msg">
                  {offerTypeError ? t('hero:errorMsg') : null}
                </StyledText>
              </StyledGrid>
            </StyledGrid>
          ) : null}
          <StyledGrid className={sidebar ? 'sidebar' : null}>
            <StyledGrid style="iconLabelFilterCss">
              {sidebar ? (
                <SvgSprite.IconLocation color="black" />
              ) : (
                <SvgSprite.IconLocation color="#fff" />
              )}
              <StyledLabel className={sidebar ? 'sidebar' : null}>
                {t('hero:destination')}
              </StyledLabel>
            </StyledGrid>

            <StyledGrid style={sidebar ? 'sidebar' : 'navCss'}>
              <StyledGrid
                style="column"
                className={sidebar ? 'sidebar_col' : null}
              >
                <StyledGrid
                  style="inputFilterCss"
                  className={sidebar ? 'sidebar' : null}
                  css={{
                    width: '100%',
                    '@md': {
                      width: '175px',
                    },
                  }}
                >
                  <Dropdown size="lg">
                    <Dropdown.Button
                      color="cv"
                      css={{
                        py: '22px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        zIndex: 1,
                        '@md': {
                          minWidth: '175px',
                        },
                      }}
                    >
                      {destFrom ? destFrom : t('hero:placeholderFrom')}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      {...register('country_from')}
                      name="country_from"
                      aria-label="country_from"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={countryFromDest}
                      onAction={(key) => {
                        setDestFrom(key.substr(0, key.lastIndexOf(' ')));
                        setCountryFromDest(key.substr(0, key.lastIndexOf(' ')));
                        setCountryFromDestId(key.split(' ').pop());
                        setCityFromDest('');
                        setDestFromCheck(true);
                        setDestFromError(false);
                      }}
                    >
                      {allCountriesFrom?.map((country) => {
                        return (
                          <Dropdown.Item
                            size="sm"
                            className="styled__checkbox__label styled__checkbox__label--default"
                            key={country.name + ' ' + country.id}
                            css={{
                              height: 'auto',
                              fontWeight: 'bold',
                              '&:hover': {
                                background: 'white',
                              },
                            }}
                          >
                            {country.name}
                            <div>
                              {country.cities?.map((city) => {
                                return (
                                  <div key={city.id}>
                                    <Text
                                      onClick={() => {
                                        setDestinationFrom(city.name, city.id);
                                      }}
                                      css={{
                                        '&:hover': {
                                          color: 'white',
                                          fontWeight: 'bold',
                                          background: '#161C37',
                                        },
                                      }}
                                    >
                                      {city.name}
                                    </Text>
                                  </div>
                                );
                              })}
                            </div>
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </StyledGrid>

                <StyledText className="error-msg">
                  {destFromError ? t('hero:errorMsg') : null}
                </StyledText>
              </StyledGrid>

              <StyledGrid
                style="column"
                className={sidebar ? 'sidebar_col' : null}
              >
                <StyledGrid
                  style="inputFilterCss"
                  className={sidebar ? 'sidebar' : null}
                  css={{
                    width: '100%',
                    '@md': {
                      width: '175px',
                    },
                  }}
                >
                  <Dropdown size="lg">
                    <Dropdown.Button
                      color="cv"
                      css={{
                        py: '22px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        zIndex: 1,
                        '@md': {
                          minWidth: '175px',
                        },
                      }}
                    >
                      {destTo ? destTo : t('hero:placeholderTo')}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      {...register('country_to')}
                      name="country_to"
                      aria-label="country_to"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={countryToDest}
                      onAction={(key) => {
                        setDestTo(key.substr(0, key.lastIndexOf(' ')));
                        setCountryToDest(key.substr(0, key.lastIndexOf(' ')));
                        setCountryToDestId(key.split(' ').pop());
                        setCityToDest('');
                        setDestToCheck(true);
                        setDestToError(false);
                      }}
                    >
                      {allCountriesTo?.map((country) => {
                        return (
                          <Dropdown.Item
                            size="sm"
                            className="styled__checkbox__label styled__checkbox__label--default"
                            key={country.name + ' ' + country.id}
                            css={{
                              height: 'auto',
                              fontWeight: 'bold',
                              '&:hover': {
                                background: 'white',
                              },
                            }}
                          >
                            {country.name}

                            <div>
                              {country.cities?.map((city) => {
                                return (
                                  <div key={city.id}>
                                    <Text
                                      css={{
                                        '&:hover': {
                                          // color: 'white',
                                          fontWeight: 'bold',
                                          background: '#161C37',
                                        },
                                      }}
                                      onClick={() =>
                                        setDestinationTo(city.name, city.id)
                                      }
                                    >
                                      {city.name}
                                    </Text>
                                  </div>
                                );
                              })}
                            </div>
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </StyledGrid>
                <StyledText className="error-msg">
                  {destToError ? t('hero:errorMsg') : null}
                </StyledText>
              </StyledGrid>
            </StyledGrid>
          </StyledGrid>
          <StyledGrid className={sidebar ? 'sidebar' : null}>
            <StyledGrid style="iconLabelFilterCss">
              {sidebar ? (
                <SvgSprite.IconCalendar color="black" />
              ) : (
                <SvgSprite.IconCalendar color="#fff" />
              )}
              <StyledLabel className={sidebar ? 'sidebar' : null}>
                {t('hero:date')}
              </StyledLabel>
            </StyledGrid>
            <StyledGrid
              style="inputFilterCss"
              css={{ mb: 0 }}
              className={sidebar ? 'sidebar sidebar__datepicker-wrapper' : null}
            >
              <StyledGrid
                style="column"
                className={sidebar ? 'sidebar_col' : null}
              >
                <style>
                  {`.date-picker-start {
                    padding: 10px 0px 10px 10px;
                    border-radius: 15px 0 0 15px;
                    border: none;
                    width: 136px;
                    text-align: center;
                    font-size: 1rem;
                    text-align:left;       
                    background: #EFEFEF;  
                    }
                    .date-picker{
                    margin-bottom: 0.25rem;                
                    }
                    .react-datepicker__close-icon::after {
                      background: #161C37;
                    }
                    .date-picker button {
                      right: 3px;
                    }
                    .sidebar {
                      width: 100%;
                    }
                    }
                    `}
                </style>
                <DatePicker
                  {...register('start_date')}
                  name="start-date"
                  placeholderText={t('hero:placeholderCheckIn')}
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    // console.log(date);
                    if (date) {
                      setStartDateCheck(true);
                      setStartDateError(false);
                    } else {
                      setStartDateCheck(false);
                      setStartDateError(true);
                    }
                  }}
                  isClearable={true}
                  wrapperClassName="date-picker"
                  minDate={new Date()}
                  className={
                    sidebar ? 'sidebar date-picker-start' : 'date-picker-start'
                  }
                  value={startDate ? startDate : startDateSearch}
                />
                <StyledText className="error-msg">
                  {startDateError ? t('hero:errorMsg') : null}
                </StyledText>
              </StyledGrid>
              <StyledGrid
                style="column"
                className={sidebar ? 'sidebar_col' : null}
              >
                <style>
                  {`
                  .date-picker-end {
                    padding: 10px 0px 10px 10px;
                    border-radius: 0 15px 15px 0;
                    border: none;
                    width: 136px;
                    text-align: center;
                    font-size: 1rem;
                    text-align:left;
                    border-left: 1px dashed black;   
                    background: #EFEFEF;    
                    }  
                    .sidebar {
                      width: 100%;
                    }                                                                   
                `}
                </style>
                <DatePicker
                  {...register('end_date')}
                  name="end-date"
                  placeholderText={t('hero:placeholderCheckOut')}
                  selected={endDate}
                  onChange={(date) => {
                    setEndDate(date);
                    if (date) {
                      setEndDateCheck(true);
                      setEndDateError(false);
                    } else {
                      setEndDateCheck(false);
                      setEndDateError(true);
                    }
                  }}
                  isClearable={true}
                  wrapperClassName="date-picker"
                  minDate={startDate}
                  className={
                    sidebar ? 'sidebar date-picker-end' : 'date-picker-end'
                  }
                  value={endDate ? endDate : endDateSearch}
                />
                <StyledText className="error-msg">
                  {endDateError ? t('hero:errorMsg') : null}
                </StyledText>
              </StyledGrid>
            </StyledGrid>
          </StyledGrid>
          <StyledGrid
            css={{ mb: '16px' }}
            className={sidebar ? 'sidebar' : null}
          >
            <StyledGrid style="iconLabelFilterCss">
              {sidebar ? (
                <SvgSprite.IconPerson color="black" />
              ) : (
                <SvgSprite.IconPerson color="#fff" />
              )}
              <StyledLabel className={sidebar ? 'sidebar' : null}>
                {t('hero:people')}
              </StyledLabel>
            </StyledGrid>
            <StyledGrid
              style="inputFilterCss"
              className={sidebar ? 'sidebar' : null}
              css={{ width: '100%' }}
            >
              <StyledInput
                {...register('adults')}
                type="number"
                name="adults"
                helperText={errors.adults?.message}
                helperColor="error"
                size="lg"
                clearable
                placeholder={t('hero:placeholderAdults')}
                initialValue={adultsSearch ? adultsSearch : 1}
                animated={false}
                shadow={false}
                aria-label="adults"
                css={{ maxWidth: '135px', minWidth: '100px' }}
                className={
                  sidebar ? 'sidebar_input clearable-adult' : 'clearable-adult'
                }
              />
              <StyledInput
                {...register('kids')}
                name="kids"
                type="number"
                helperText={errors.kids?.message}
                helperColor="error"
                size="lg"
                clearable
                placeholder={t('hero:placeholderKids')}
                initialValue={kidsSearch ? kidsSearch : 0}
                animated={false}
                css={{ maxWidth: '135px', minWidth: '100px' }}
                shadow={false}
                aria-label="kids"
                className={
                  sidebar ? 'sidebar_input clearable-kids' : 'clearable-kids'
                }
              />
            </StyledGrid>
          </StyledGrid>
          <StyledGrid
            style="btnFilterCss"
            className={sidebar ? 'sidebar-btn' : null}
          >
            <StyledButton
              type="submit"
              size="sm"
              css={{
                minWidth: '100%',
                background: '#F5BC94',
                px: '22px',
                py: '22px',
              }}
              className={sidebar ? 'sidebar' : null}
              onPress={() => setIsUseEffectDone(true)}
            >
              {t('hero:searchBtn')}
            </StyledButton>
          </StyledGrid>
        </StyledFiltersContainer>
      </form>
    </StyledFiltersSectionHolder>
  );
};
