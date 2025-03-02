import React, { useState, useMemo, useEffect } from 'react';
import { Grid, Dropdown, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

import { StyledSelectDropdownWrapper } from './SelectDropdown.styled';

import * as SvgIcons from '@/assets/SvgSprite';
import { useFetchAllOffers } from '@/hooks/sidebar/useFetchAllOffers';
import { useStore } from '@/stores/offers';
import { usePayload } from '@/stores/payload';

export default function SelectDropdown({ options, label }) {
  const [fetchOnClick, setFetchOnClick] = useState(false);
  const list = useStore((state) => state.list);
  const setList = useStore((state) => state.setList);

  const [selected, setSelected] = useState(new Set([options[0].name]));
  const [sortQuery, setSortQuery] = useState([]);
  const [sortType, setSortType] = useState([]);

  const router = useRouter();

  const selectedValue = useMemo(
    () => Array.from(selected).join(', ').split('_').join(' '),
    [selected]
  );

  const setSelectedFunction = (e) => {
    // read from options
    let sortFormated = e.anchorKey?.split(':');
    // set query states
    setSortQuery(sortFormated[1]);
    setSortType(sortFormated[2]);
    // router
    let queryCopy = {
      ...router.query,
    };
    delete queryCopy[sortQuery];
    if (sortFormated[1] != '') {
      queryCopy = {
        ...queryCopy,
        [sortFormated[1]]: sortFormated[2],
      };
    }
    router.replace(
      {
        query: queryCopy,
      },
      undefined,
      { shallow: true }
    );
    // set state
    setSelected(sortFormated[0].split(', '));
    setFetchOnClick(true);
  };
  const limit = usePayload((state) => state.limit);
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
      enabled: fetchOnClick,
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
      transport_type: transportTypeArr,
      accommodation_type: propertyTypeArr,
      star_rating: ratingCatArr,
      offer_services: serviceTypeArr,
      travel_agencies: allAgenciesArr,
      rating: guestReviewsArr,
      minimum_price: selectedPrice[0],
      maximum_price: selectedPrice[1],
      order_by: router.query.order_by ?? undefined,

      ...arrayOfFacilities,
    }
  );

  return (
    <StyledSelectDropdownWrapper>
      <Grid css={{ paddingLeft: 0 }}>
        <Text css={{ marginRight: '15px' }}>{label}</Text>
      </Grid>
      <Grid>
        <Dropdown>
          <Dropdown.Trigger>
            <div className="dropdown__trigger-content-wrapper">
              <span>{selectedValue}</span> <SvgIcons.IconCaretDown />{' '}
            </div>
          </Dropdown.Trigger>
          <Dropdown.Menu
            variant="light"
            aria-label="Actions"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={(e) => setSelectedFunction(e)}
          >
            {options.map((option) => (
              <Dropdown.Item
                key={option.name + ':' + option.type + ':' + option.order}
                css={{
                  height: '2.2rem',
                  color: 'rgba(0,0,0,0.8)',
                }}
              >
                {option.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
    </StyledSelectDropdownWrapper>
  );
}
