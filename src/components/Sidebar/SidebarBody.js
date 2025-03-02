import { Container, Text } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  transportType,
  propertyType,
  serviceType,
  ratingCat,
  facilities,
  guestReviews,
} from 'src/constants';
import { QueryClient, dehydrate } from 'react-query';

import {
  SidebarFilterTitle,
  SidebarContainer,
  SidebarFilterCheckbox,
  SidebarFilterCheckboxGroup,
  CollapseEdited,
  StyledSidebarButton,
} from './StyledSidebar';
import RangeSlider from './RangeSlider';

import { fetchAllOffers } from '@/features/sidebar/api/fetchAllOffers';
import { fetchAllAgencies } from '@/features/sidebar/api/fetchAllAgencies';
import { ExitCross } from '@/assets/SvgSprite';
import { useFetchAllOffers } from '@/hooks/sidebar/useFetchAllOffers';
import { useFetchAllAgencies } from '@/hooks/sidebar/useFetchAllAgencies';
import { useStore } from '@/stores/offers';
import { usePayload } from '@/stores/payload';

const SidebarBody = ({ closeHandler }) => {
  const t = useTranslations('Sidebar');

  const router = useRouter();

  const list = useStore((state) => state.list);
  const setList = useStore((state) => state.setList);

  const [isUseEffectDone, setIsUseEffectDone] = useState(false);

  useEffect(() => {
    setIsUseEffectDone(true);
    setOfferType(router.query.offer_type ?? undefined);
    setCountryFrom(router.query.country_from ?? undefined);
    setCountryTo(router.query.country_to ?? undefined);
    setCityFrom(router.query.city_from ?? undefined);
    setCityTo(router.query.city_to ?? undefined);
    setAdults(router.query.adults ?? undefined);
    setKids(router.query.kids ?? undefined);
    setStartDate(router.query.start_date ?? undefined);
    setEndDate(router.query.end_date ?? undefined);

    setOrderBy(router.query.order_by ?? undefined);

    setTransportTypeArr(router.query.transport_type?.split(',') ?? []);
    setPropertyTypeArr(router.query.accommodation_type?.split(',') ?? []);
    setServiceTypeArr(router.query.service_type?.split(',') ?? []);
    setRatingCatArr(
      router.query.star_rating?.split(',').map((star) => parseInt(star)) ?? []
    );

    let newArrayofFacilities = {};
    const facilitiesQueryArray = router.query.facilitiesArr?.split(',');
    facilitiesQueryArray?.forEach((element) => {
      newArrayofFacilities[element] = true;
    });
    setFacilitiesArr((prevState) => {
      const newState = prevState.map((facility) => {
        if (
          facilitiesQueryArray?.find((currentFac) => {
            return currentFac === facility.name;
          })
        ) {
          return { ...facility, checked: true };
        } else return facility;
      });
      return newState;
    });
    setArrayOfFacilities(newArrayofFacilities);

    const ratingParamsArr =
      router.query.rating?.split(',').map((rev) => parseInt(rev)) ?? [];
    setGuestReviewsArr(ratingParamsArr);

    setSelectedPrice(router.query.price?.split(',') ?? selectedPrice);

    const serbianAgenciesParam =
      router.query.travel_agencies_srb?.split(',') ?? [];
    setSerbianAgenciesArr(serbianAgenciesParam);

    const macedoniaAgenciesParam =
      router.query.travel_agencies_mac?.split(',') ?? [];
    setMacedoniaAgenciesArr(macedoniaAgenciesParam);

    const montenegroAgenciesParam =
      router.query.travel_agencies_mn?.split(',') ?? [];
    setMontenegroAgenciesArr(montenegroAgenciesParam);

    const bosniaAgenciesParam =
      router.query.travel_agencies_ba?.split(',') ?? [];
    setBosniaAgenciesArr(bosniaAgenciesParam);

    const allAgenciesParams = [
      ...serbianAgenciesParam,
      ...macedoniaAgenciesParam,
      ...montenegroAgenciesParam,
      ...bosniaAgenciesParam,
    ];

    setAllAgenciesArr(allAgenciesParams);
  }, []);

  const ratingCatArr = usePayload((state) => state.ratingCatArr);
  const setRatingCatArr = usePayload((state) => state.setRatingCatArr);
  const transportTypeArr = usePayload((state) => state.transportTypeArr);
  const setTransportTypeArr = usePayload((state) => state.setTransportTypeArr);
  const propertyTypeArr = usePayload((state) => state.propertyTypeArr);
  const setPropertyTypeArr = usePayload((state) => state.setPropertyTypeArr);
  const serviceTypeArr = usePayload((state) => state.serviceTypeArr);
  const setServiceTypeArr = usePayload((state) => state.setServiceTypeArr);
  const [facilitiesArr, setFacilitiesArr] = useState(facilities);
  const handleChangeChecked = (id) => {
    const facilitiesStateList = facilitiesArr;
    const changeCheckedFacilities = facilitiesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setFacilitiesArr(changeCheckedFacilities);
  };

  const [arrayOfFacilities, setArrayOfFacilities] = useState({});
  // const arrayOfFacilities = usePayload((state) => state.arrayOfFacilities);
  // const setArrayOfFacilities = usePayload(
  //   (state) => state.setArrayOfFacilities
  // );

  const guestReviewsArr = usePayload((state) => state.guestReviewsArr);
  const setGuestReviewsArr = usePayload((state) => state.setGuestReviewsArr);

  const selectedPrice = usePayload((state) => state.selectedPrice);
  const setSelectedPrice = usePayload((state) => state.setSelectedPrice);

  const [allAgencies, setAllAgencies] = useState([]);
  const [serbianAgencies, setSerbianAgencies] = useState([]);
  const [serbianAgenciesArr, setSerbianAgenciesArr] = useState([]);

  const [macedoniaAgencies, setMacedoniaAgencies] = useState([]);
  const [macedoniaAgenciesArr, setMacedoniaAgenciesArr] = useState([]);

  const [montenegroAgencies, setMontenegroAgencies] = useState([]);
  const [montenegroAgenciesArr, setMontenegroAgenciesArr] = useState([]);

  const [bosniaAgencies, setBosniaAgencies] = useState([]);
  const [bosniaAgenciesArr, setBosniaAgenciesArr] = useState([]);

  const [croatiaAgencies, setCroatiaAgencies] = useState([]);
  const [croatiaAgenciesArr, setCroatiaAgenciesArr] = useState([]);

  const allAgenciesArr = usePayload((state) => state.allAgenciesArr);
  const setAllAgenciesArr = usePayload((state) => state.setAllAgenciesArr);

  // const [limit, setLimit] = useState(10);
  const limit = usePayload((state) => state.limit);
  const [offerType, setOfferType] = useState();
  const [countryFrom, setCountryFrom] = useState();
  const [countryTo, setCountryTo] = useState();
  const [cityFrom, setCityFrom] = useState();
  const [cityTo, setCityTo] = useState();
  const [adults, setAdults] = useState();
  const [kids, setKids] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [orderBy, setOrderBy] = useState();

  const { data: allOffers, isLoading: allOffersLoading } = useFetchAllOffers(
    {
      onSuccess: (data) => {
        // console.log(data);
        setList(data);
      },
      enabled: isUseEffectDone,
    },
    {
      star_rating: ratingCatArr,
      transport_type: transportTypeArr,
      accommodation_type: propertyTypeArr,
      offer_services: serviceTypeArr,
      travel_agencies: allAgenciesArr,
      rating: guestReviewsArr,
      minimum_price: selectedPrice[0],
      maximum_price: selectedPrice[1],
      limit: limit,
      offer_type: offerType,
      country_from: countryFrom,
      country_to: countryTo,
      city_from: cityFrom,
      city_to: cityTo,
      adults: adults,
      kids: kids,
      start_date: startDate,
      end_date: endDate,
      order_by: orderBy,

      ...arrayOfFacilities,
    }
  );
  const { data: allAgenciesQuery, isLoading: allAgenciesLoading } =
    useFetchAllAgencies({
      onSuccess: (data) => {
        setAllAgencies(data.travelAgencies);
        const serbia = data?.travelAgencies?.filter(
          (agency) => agency.country === 'Srbija'
        );
        setSerbianAgencies(serbia);
        const macedonia = data?.travelAgencies?.filter(
          (agency) => agency.country === 'Severna Makedonija'
        );
        setMacedoniaAgencies(macedonia);
        const montenegro = data?.travelAgencies?.filter(
          (agency) => agency.country === 'Crna Gora'
        );
        setMontenegroAgencies(montenegro);
        const bosnia = data?.travelAgencies?.filter(
          (data) => data.country === 'Bosna i Hercegovina'
        );
        setBosniaAgencies(bosnia);
        const croatia = data?.travelAgencies?.filter(
          (agency) => agency.country === 'Hrvatska'
        );
        setCroatiaAgencies(croatia);
      },
    });

  const resetParams = () => {
    const queryCopy = router.query;
    delete queryCopy.transport_type;
    delete queryCopy.accommodation_type;
    delete queryCopy.service_type;
    delete queryCopy.star_rating;
    delete queryCopy.facilitiesArr;
    delete queryCopy.rating;
    delete queryCopy.price;
    delete queryCopy.travel_agencies_srb;
    delete queryCopy.travel_agencies_mac;
    delete queryCopy.travel_agencies_mn;
    delete queryCopy.travel_agencies_ba;
    router.replace(
      {
        query: queryCopy,
      },
      undefined,
      { shallow: true }
    );

    setTransportTypeArr([]);
    setPropertyTypeArr([]);
    setServiceTypeArr([]);
    setRatingCatArr([]);
    setFacilitiesArr([]);
    setArrayOfFacilities({});
    setAllAgenciesArr([]);
    setSerbianAgenciesArr([]);
    setMacedoniaAgenciesArr([]);
    setMontenegroAgenciesArr([]);
    setBosniaAgenciesArr([]);

    setGuestReviewsArr([]);
    setSelectedPrice([1, 10000]);
  };

  return (
    <Container
      css={{
        padding: '30px 0',
        maxWidth: '302px',
        '@sm': { padding: '0' },
      }}
    >
      <SidebarContainer
        style="sidebarHeader"
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 24px',
          '@sm': {
            padding: '0',
          },
        }}
      >
        <SidebarFilterTitle
          style="main"
          css={{
            margin: '0',
          }}
        >
          {t('SidebarBody:title')}
        </SidebarFilterTitle>
        <StyledSidebarButton
          color="transparent"
          size="resetSize"
          onClick={resetParams}
        >
          {t('SidebarBody:reset')}
        </StyledSidebarButton>
        <StyledSidebarButton
          color="transparent"
          size="resetSize"
          onPress={closeHandler}
          css={{ padding: '0', '@sm': { display: 'none' } }}
        >
          <ExitCross />
        </StyledSidebarButton>
      </SidebarContainer>
      {/* RANGE 1*/}
      <CollapseEdited title={t('SidebarBody:budget')} expanded divider={false}>
        <SidebarContainer
          style="rangeDiv"
          css={{
            padding: '10px 0px 20px',
          }}
        >
          <Text css={{ paddingLeft: '20px', marginBottom: '10px' }}>
            {t('Budget:from')} {selectedPrice[0]} - {selectedPrice[1]}€
            {/* {t('Budget:from')} 0 - 10000€ */}
          </Text>
          <RangeSlider
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />
        </SidebarContainer>
      </CollapseEdited>
      {/* TIP PREVOZA 3*/}
      <CollapseEdited
        title={t('SidebarBody:transport')}
        expanded
        divider={false}
      >
        <SidebarContainer
          style="helperDiv"
          css={{
            padding: '0px',
            marginBottom: '10px',
          }}
        >
          <SidebarFilterCheckboxGroup
            aria-label="transport"
            value={transportTypeArr}
            onChange={(...params) => {
              if (params[0].length === 0) {
                const queryCopy = {
                  ...router.query,
                };
                delete queryCopy['transport_type'];
                router.replace(
                  {
                    query: queryCopy,
                  },
                  undefined,
                  { shallow: true }
                );
                delete router.query['transport_type'];
              } else {
                router.replace(
                  {
                    query: {
                      ...router.query,
                      transport_type: params.join(','),
                    },
                  },
                  undefined,
                  { shallow: true }
                );
              }
              setTransportTypeArr(...params);
            }}
          >
            {transportType.map((item) => {
              return (
                <SidebarFilterCheckbox
                  value={item.value}
                  size="sm"
                  key={item.id}
                  className="styled__checkbox__label styled__checkbox__label--default"
                >
                  {t(item.label)}
                </SidebarFilterCheckbox>
              );
            })}
          </SidebarFilterCheckboxGroup>
        </SidebarContainer>
      </CollapseEdited>
      {/* TIP SMESTAJA 4*/}
      <CollapseEdited
        title={t('SidebarBody:accomodation')}
        expanded
        divider={false}
      >
        <SidebarContainer
          style="helperDiv"
          css={{
            padding: '0px',
            marginBottom: '10px',
          }}
        >
          <SidebarFilterCheckboxGroup
            color="warning"
            aria-label="Property-type"
            value={propertyTypeArr}
            onChange={(...params) => {
              if (params[0].length === 0) {
                const queryCopy = {
                  ...router.query,
                };
                delete queryCopy['accommodation_type'];
                router.replace(
                  {
                    query: queryCopy,
                  },
                  undefined,
                  { shallow: true }
                );
                delete router.query['accommodation_type'];
              } else {
                router.replace(
                  {
                    query: {
                      ...router.query,
                      accommodation_type: params.join(','),
                    },
                  },
                  undefined,
                  { shallow: true }
                );
              }
              setPropertyTypeArr(...params);
            }}
          >
            {propertyType.map((item) => {
              return (
                <SidebarFilterCheckbox
                  value={item.value}
                  size="sm"
                  key={item.id}
                  className="styled__checkbox__label styled__checkbox__label--default"
                >
                  {t(item.label)}
                </SidebarFilterCheckbox>
              );
            })}
          </SidebarFilterCheckboxGroup>
        </SidebarContainer>
      </CollapseEdited>
      {/* VRSTA USLUGE 5 */}
      <CollapseEdited title={t('SidebarBody:service')} expanded divider={false}>
        <SidebarContainer
          style="helperDiv"
          css={{
            padding: '0px',
            marginBottom: '10px',
          }}
        >
          <SidebarFilterCheckboxGroup
            color="warning"
            aria-label="Service-type"
            value={serviceTypeArr}
            onChange={(...params) => {
              if (params[0].length === 0) {
                const queryCopy = {
                  ...router.query,
                };
                delete queryCopy['service_type'];
                router.replace(
                  {
                    query: queryCopy,
                  },
                  undefined,
                  { shallow: true }
                );
                delete router.query['service_type'];
              } else {
                router.replace(
                  {
                    query: {
                      ...router.query,
                      service_type: params.join(','),
                    },
                  },
                  undefined,
                  { shallow: true }
                );
              }
              setServiceTypeArr(...params);
            }}
          >
            {serviceType.map((item) => {
              return (
                <SidebarFilterCheckbox
                  value={item.value}
                  size="sm"
                  key={item.id}
                  className="styled__checkbox__label styled__checkbox__label--default"
                >
                  {t(item.label)}
                </SidebarFilterCheckbox>
              );
            })}
          </SidebarFilterCheckboxGroup>
        </SidebarContainer>
      </CollapseEdited>
      {/* KATEGORIJA 6 */}
      <CollapseEdited
        title={t('SidebarBody:category')}
        expanded
        divider={false}
      >
        <SidebarContainer
          style="helperDiv"
          css={{
            padding: '0px',
            marginBottom: '10px',
          }}
        >
          <SidebarFilterCheckboxGroup
            color="warning"
            aria-label="Category"
            value={ratingCatArr}
            onChange={(...params) => {
              if (params[0].length === 0) {
                const queryCopy = {
                  ...router.query,
                };
                delete queryCopy['star_rating'];
                router.replace(
                  {
                    query: queryCopy,
                  },
                  undefined,
                  { shallow: true }
                );
                delete router.query['star_rating'];
              } else {
                router.replace(
                  {
                    query: { ...router.query, star_rating: params.join(',') },
                  },
                  undefined,
                  { shallow: true }
                );
              }
              setRatingCatArr(...params);
            }}
          >
            {ratingCat.map((item) => {
              return (
                <SidebarFilterCheckbox
                  value={item.value}
                  size="sm"
                  key={item.id}
                  className="styled__checkbox__label styled__checkbox__label--default"
                  style="starsCheckbox"
                >
                  {item.label}
                </SidebarFilterCheckbox>
              );
            })}
          </SidebarFilterCheckboxGroup>
        </SidebarContainer>
      </CollapseEdited>
      {/* SADRZAJ 7 */}
      <CollapseEdited title={t('SidebarBody:content')} expanded divider={false}>
        <SidebarContainer
          style="helperDiv"
          css={{
            padding: '0px',
            marginBottom: '10px',
          }}
        >
          <SidebarContainer
            style="facilitiesDiv"
            css={{
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {facilitiesArr.map((item) => {
              return (
                <SidebarFilterCheckbox
                  isSelected={item.checked}
                  onChange={(...params) => {
                    handleChangeChecked(item.id);
                    if (!params[0]) {
                      //if checkbox is unchecked
                      const facilitiesObjCopy = { ...arrayOfFacilities };
                      delete facilitiesObjCopy[item.name];
                      setArrayOfFacilities(facilitiesObjCopy);
                      const queryCopy = {
                        ...router.query,
                        facilitiesArr:
                          Object.keys(facilitiesObjCopy).toString(),
                      };
                      if (!queryCopy.facilitiesArr.length) {
                        delete queryCopy.facilitiesArr;
                      }
                      router.replace(
                        {
                          query: queryCopy,
                        },
                        undefined,
                        { shallow: true }
                      );
                    } else {
                      //if checkbox is checked
                      router.replace(
                        {
                          query: {
                            ...router.query,
                            facilitiesArr: Object.keys({
                              ...arrayOfFacilities,
                              [item.name]: true,
                            }).join(','),
                          },
                        },
                        undefined,
                        { shallow: true }
                      );
                      setArrayOfFacilities((prevState) => {
                        return {
                          ...prevState,
                          [item.name]: params[0],
                        };
                      });
                    }
                  }}
                  size="sm"
                  key={item.id}
                  style="facilitiesCheckbox"
                  className="styled__checkbox__label styled__checkbox__label--default"
                >
                  {item.img} {t(item.label)}
                </SidebarFilterCheckbox>
              );
            })}
          </SidebarContainer>
        </SidebarContainer>
      </CollapseEdited>
      {/* OCENE GOSTIJU 8 */}
      {/* <CollapseEdited
        title={t('SidebarBody:review')}
        expanded
        divider={false}
      >
        <SidebarContainer
          style="helperDiv"
          css={{
            padding: '0px',
            marginBottom: '10px',
          }}
        >
          <SidebarFilterCheckboxGroup
            color="warning"
            aria-label="Guest rating"
            value={guestReviewsArr}
            onChange={(...params) => {
              if (params[0].length === 4 && params[0].includes(3)) {
                const queryCopy = {
                  ...router.query,
                };
                delete queryCopy['rating'];
                router.replace(
                  {
                    query: queryCopy,
                  },
                  undefined,
                  { shallow: true }
                );
                delete router.query['rating'];
                setGuestReviewsArr([]);
              } else {
                let lessFiveArr = [4, 3, 2, 1];
                let paramArr = [...params[0]];
                if (paramArr.includes(5) && !paramArr.includes(3)) {
                  paramArr = paramArr.concat(lessFiveArr);
                } else if (!paramArr.includes(5) && paramArr.includes(3)) {
                  const ratingsToDeleteSet = new Set(lessFiveArr);
                  paramArr = paramArr.filter((name) => {
                    return !ratingsToDeleteSet.has(name);
                  });
                }
                setGuestReviewsArr(paramArr);
                router.replace(
                  {
                    query: { ...router.query, rating: paramArr.join(',') },
                  },
                  undefined,
                  { shallow: true }
                );
              }
            }}
          >
            {guestReviews.map((item) => {
              return (
                <SidebarFilterCheckbox
                  value={item.value}
                  size="sm"
                  key={item.id}
                  className="styled__checkbox__label styled__checkbox__label--default"
                >
                  {t(item.label)}
                </SidebarFilterCheckbox>
              );
            })}
          </SidebarFilterCheckboxGroup>
        </SidebarContainer>
      </CollapseEdited> */}

      {/*Agencije*/}
      <CollapseEdited
        title={t('Sidebar:agencies')}
        expanded={false}
        divider={false}
        css={{
          'div[role=button]': {
            paddingBottom: '0',
          },
          borderBottom: 'none',
        }}
      >
        <SidebarContainer
          style="helperDiv"
          css={{
            padding: '0px 0px 0px 15px',
            // marginBottom: '10px',
          }}
        >
          <CollapseEdited
            title={t('Sidebar:agencySerbia')}
            expanded={false}
            divider={false}
            css={{
              'div[role=button]': {
                paddingBottom: '15px',
              },
            }}
          >
            <SidebarFilterCheckboxGroup
              color="warning"
              aria-label="Serbian-agencies"
              value={serbianAgenciesArr}
              onChange={(...params) => {
                if (params[0].length === 0) {
                  const queryCopy = {
                    ...router.query,
                  };
                  delete queryCopy['travel_agencies_srb'];
                  router.replace(
                    {
                      query: queryCopy,
                    },
                    undefined,
                    { shallow: true }
                  );
                  delete router.query['travel_agencies_srb'];
                } else {
                  router.replace(
                    {
                      query: {
                        ...router.query,
                        travel_agencies_srb: params.join(','),
                      },
                    },
                    undefined,
                    { shallow: true }
                  );
                }
                setSerbianAgenciesArr(...params);
                setAllAgenciesArr([
                  ...montenegroAgenciesArr,
                  ...bosniaAgenciesArr,
                  ...macedoniaAgenciesArr,
                  ...croatiaAgenciesArr,
                  ...params[0],
                ]);
              }}
            >
              {serbianAgencies?.map((item) => {
                return (
                  <SidebarFilterCheckbox
                    value={item.id}
                    size="sm"
                    key={item.id}
                    className="styled__checkbox__label styled__checkbox__label--default"
                  >
                    {item.name}
                  </SidebarFilterCheckbox>
                );
              })}
            </SidebarFilterCheckboxGroup>
          </CollapseEdited>

          {/*macedonia*/}
          <CollapseEdited
            title={t('Sidebar:agencyMacedonia')}
            expanded={false}
            divider={false}
            css={{
              'div[role=button]': {
                paddingBottom: '15px',
              },
            }}
          >
            <SidebarFilterCheckboxGroup
              color="warning"
              aria-label="Macedonian-agencies"
              value={macedoniaAgenciesArr}
              onChange={(...params) => {
                if (params[0].length === 0) {
                  const queryCopy = {
                    ...router.query,
                  };
                  delete queryCopy['travel_agencies_mac'];
                  router.replace(
                    {
                      query: queryCopy,
                    },
                    undefined,
                    { shallow: true }
                  );
                  delete router.query['travel_agencies_mac'];
                } else {
                  router.replace(
                    {
                      query: {
                        ...router.query,
                        travel_agencies_mac: params.join(','),
                      },
                    },
                    undefined,
                    { shallow: true }
                  );
                }
                setMacedoniaAgenciesArr(...params);
                setAllAgenciesArr([
                  ...serbianAgenciesArr,
                  ...bosniaAgenciesArr,
                  ...montenegroAgenciesArr,
                  ...croatiaAgenciesArr,
                  ...params[0],
                ]);
              }}
            >
              {macedoniaAgencies?.map((item) => {
                return (
                  <SidebarFilterCheckbox
                    value={item.id}
                    size="sm"
                    key={item.id}
                    className="styled__checkbox__label styled__checkbox__label--default"
                  >
                    {item.name}
                  </SidebarFilterCheckbox>
                );
              })}
            </SidebarFilterCheckboxGroup>
          </CollapseEdited>

          {/*montenegro*/}
          <CollapseEdited
            title={t('Sidebar:agencyMontenegro')}
            expanded={false}
            divider={false}
            css={{
              'div[role=button]': {
                paddingBottom: '15px',
              },
            }}
          >
            <SidebarFilterCheckboxGroup
              color="warning"
              aria-label="Montenegro-agencies"
              value={montenegroAgenciesArr}
              onChange={(...params) => {
                if (params[0].length === 0) {
                  const queryCopy = {
                    ...router.query,
                  };
                  delete queryCopy['travel_agencies_mn'];
                  router.replace(
                    {
                      query: queryCopy,
                    },
                    undefined,
                    { shallow: true }
                  );
                  delete router.query['travel_agencies_mn'];
                } else {
                  router.replace(
                    {
                      query: {
                        ...router.query,
                        travel_agencies_mn: params.join(','),
                      },
                    },
                    undefined,
                    { shallow: true }
                  );
                }
                setMontenegroAgenciesArr(...params);
                setAllAgenciesArr([
                  ...serbianAgenciesArr,
                  ...bosniaAgenciesArr,
                  ...macedoniaAgenciesArr,
                  ...croatiaAgenciesArr,
                  ...params[0],
                ]);
              }}
            >
              {montenegroAgencies?.map((item) => {
                return (
                  <SidebarFilterCheckbox
                    value={item.id}
                    size="sm"
                    key={item.id}
                    className="styled__checkbox__label styled__checkbox__label--default"
                  >
                    {item.name}
                  </SidebarFilterCheckbox>
                );
              })}
            </SidebarFilterCheckboxGroup>
          </CollapseEdited>

          {/*Bosnia*/}
          <CollapseEdited
            title={t('Sidebar:agencyBosnia')}
            expanded={false}
            divider={false}
            css={{
              'div[role=button]': {
                paddingBottom: '15px',
              },
            }}
          >
            <SidebarFilterCheckboxGroup
              color="warning"
              aria-label="Bosnian-agencies"
              value={bosniaAgenciesArr}
              onChange={(...params) => {
                if (params[0].length === 0) {
                  const queryCopy = {
                    ...router.query,
                  };
                  delete queryCopy['travel_agencies_ba'];
                  router.replace(
                    {
                      query: queryCopy,
                    },
                    undefined,
                    { shallow: true }
                  );
                  delete router.query['travel_agencies_ba'];
                } else {
                  router.replace(
                    {
                      query: {
                        ...router.query,
                        travel_agencies_ba: params.join(','),
                      },
                    },
                    undefined,
                    { shallow: true }
                  );
                }
                setBosniaAgenciesArr(...params);
                setAllAgenciesArr([
                  ...serbianAgenciesArr,
                  ...montenegroAgenciesArr,
                  ...macedoniaAgenciesArr,
                  ...croatiaAgenciesArr,
                  ...params[0],
                ]);
              }}
            >
              {bosniaAgencies?.map((item) => {
                return (
                  <SidebarFilterCheckbox
                    value={item.id}
                    size="sm"
                    key={item.id}
                    className="styled__checkbox__label styled__checkbox__label--default"
                  >
                    {item.name}
                  </SidebarFilterCheckbox>
                );
              })}
            </SidebarFilterCheckboxGroup>
          </CollapseEdited>

          {/*Croatia*/}
          {/* <CollapseEdited
            title={t('Sidebar:agencyCroatia')}
            expanded={false}
            divider={false}
            css={{
              'div[role=button]': {
                paddingBottom: '15px',
              },
            }}
          >
            <SidebarFilterCheckboxGroup
              color="warning"
              aria-label="Croatian-agencies"
              value={croatiaAgenciesArr}
              onChange={(...params) => {
                if (params[0].length === 0) {
                  const queryCopy = {
                    ...router.query,
                  };
                  delete queryCopy['travel_agencies_hr'];
                  router.replace(
                    {
                      query: queryCopy,
                    },
                    undefined,
                    { shallow: true }
                  );
                  delete router.query['travel_agencies_hr'];
                } else {
                  router.replace(
                    {
                      query: {
                        ...router.query,
                        travel_agencies_hr: params.join(','),
                      },
                    },
                    undefined,
                    { shallow: true }
                  );
                }
                setCroatiaAgenciesArr(...params);
                setAllAgenciesArr([
                  ...serbianAgenciesArr,
                  ...montenegroAgenciesArr,
                  ...macedoniaAgenciesArr,
                  ...bosniaAgenciesArr,
                  ...params[0],
                ]);
              }}
            >
              {croatiaAgencies?.map((item) => {
                return (
                  <SidebarFilterCheckbox
                    value={item.id}
                    size="sm"
                    key={item.id}
                    className="styled__checkbox__label styled__checkbox__label--default"
                  >
                    {item.name}
                  </SidebarFilterCheckbox>
                );
              })}
            </SidebarFilterCheckboxGroup>
          </CollapseEdited> */}
        </SidebarContainer>
      </CollapseEdited>
      <SidebarContainer style="sidebarFooter">
        <StyledSidebarButton
          onPress={closeHandler}
          color="orange"
          size="applySize"
        >
          {t('SidebarBody:show')} {list?.length} {t('SidebarBody:results')}
        </StyledSidebarButton>
      </SidebarContainer>
    </Container>
  );
};

export async function getServerSideProps({ locale }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('fetchAllOffers', fetchAllOffers);
  await queryClient.prefetchQuery('fetchAllAgencies', fetchAllAgencies);
  return {
    props: {
      textContent: (
        await import(`../../../locales/${locale}/translations.json`)
      ).default,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default SidebarBody;
