import { Container, Text } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import format from 'date-fns/format';

import { FiltersHero } from '../Hero/FiltersHero';

import { SidebarContainer, SidebarWrapper } from './StyledSidebar';
import FilterModal from './FilterModal';
import SidebarBody from './SidebarBody';

import { useFetchHomeData } from '@/hooks/homepage/useFetchHomeData';

const Sidebar = () => {
  const [allOfferTypes, setAllOfferTypes] = useState([]);
  const [allCountriesFrom, setAllCountriesFrom] = useState([]);
  const [allCountriesTo, setAllCountriesTo] = useState([]);
  const [allCitiesFrom, setAllCitiesFrom] = useState([]);
  const [allCitiesTo, setAllCitiesTo] = useState([]);

  const [startDateSearch, setStartDateSearch] = useState('');
  const [endDateSearch, setEndDateSearch] = useState('');

  const router = useRouter();
  const data = router.query;

  const adultsSearch = data?.adults;
  const kidsSearch = data?.kids;

  const { data: offerTypes, isLoading: offerTypesLoad } = useFetchHomeData({
    onSuccess: (data) => {
      setAllOfferTypes(data?.offerTypes);
      setAllCountriesFrom(data?.countries_from);
      setAllCountriesTo(data?.countries_to);
      setAllCitiesFrom(data?.cities_from);
      setAllCitiesTo(data?.cities_to);
    },
  });

  useEffect(() => {
    setStartDateSearch(format(new Date(data?.start_date), 'MM/dd/yyy'));
    setEndDateSearch(format(new Date(data?.end_date), 'MM/dd/yyy'));
  }, [data]);

  return (
    <SidebarWrapper>
      <Container css={{ padding: '0' }}>
        <FiltersHero
          sidebar={true}
          arrangement={true}
          allOfferTypes={allOfferTypes}
          allCountriesFrom={allCountriesFrom}
          allCountriesTo={allCountriesTo}
          allCitiesFrom={allCitiesFrom}
          allCitiesTo={allCitiesTo}
          startDateSearch={startDateSearch}
          endDateSearch={endDateSearch}
          adultsSearch={adultsSearch}
          kidsSearch={kidsSearch}
        />
      </Container>

      <FilterModal />
      <SidebarContainer
        css={{ padding: '0', display: 'none', '@sm': { display: 'block' } }}
      >
        <SidebarBody />
      </SidebarContainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
